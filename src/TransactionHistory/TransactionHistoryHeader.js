import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import BackArrow from '../SVGComponent/BackArrow';

export default function TransactionHistoryHeader() {
  const navigation = useNavigation();
  //const route = useRoute();
  //const { mobileNumber, userName } = route.params;
  return (
    <>
      <Pressable onPress={()=>{
        navigation.navigate('HomeMainScreen');
      }} style={styles.thh}>
        <BackArrow style={{marginLeft: moderateScale(10), marginTop:moderateVerticalScale(15)}} />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginTop: moderateVerticalScale(15),
            marginLeft:moderateScale(20)
          }}>
          Transaction History
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  thh: {
    width: '100%',
    height: 60,
    backgroundColor: '#6633CC',
    flexDirection: 'row'
  }
});
