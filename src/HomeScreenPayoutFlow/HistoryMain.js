import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Back from '../SVGComponent/Back';
import Plus from '../SVGComponent/Plus';

export default function HistoryMain() {
  const navigation = useNavigation();
  const route = useRoute();
  const mobileNumber = route.params?.mobileNumber;
  const userName = route.params?.userName;
  const amount = route.params?.amount;
console.log(amount,"=======================================");
  return (
    <>
      <View style={style.hm}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: moderateScale(20),
          }}>
          Manage your money
        </Text>
        <Pressable onPress={()=>{
          navigation.navigate('PayInMain', {mobileNumber, userName, amount});
        }}
          style={{
            marginTop: moderateVerticalScale(20),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Plus style={{marginLeft: moderateScale(20)}} />
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              marginRight: moderateScale(170),
            }}>
            Add Money
          </Text>
          <Back style={{marginRight: moderateScale(20)}} />
        </Pressable>

        {/* <View
          style={{
            marginTop: moderateVerticalScale(20),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Home style={{marginLeft: moderateScale(20)}} />
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              marginRight: moderateScale(150),
            }}>
            Check Balance
          </Text>
          <Back style={{marginRight: moderateScale(20)}} />
        </View> */}

        {/* <Pressable
        onPress={()=>{
          navigation.navigate('TransactionHistoryMain', {mobileNumber, userName});
        }}
          style={{
            marginTop: moderateVerticalScale(20),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Time style={{marginLeft: moderateScale(20)}} />
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              marginRight: moderateScale(120),
            }}>
            Transaction History
          </Text>
          <Back style={{marginRight: moderateScale(20)}} />
        </Pressable> */}

      </View>
    </>
  );
}

const style = StyleSheet.create({
  hm: {
    width: '100%',
    height: 'auto',
    marginTop: moderateVerticalScale(5),
    //backgroundColor:'white'
  },
});
