import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import HistoryMain from './HistoryMain';
import HomeSlideScreen from './HomeSlideScreen';
import UtilityPayments from './UtilityPayment';

export default function HomePaymentModeScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.hpms}>
      {/* <View>
        <Pressable
          onPress={() => {
            navigation.navigate('PayInMain');
          }}
          style={style.button1}>
          <BackComponent style={{marginTop: moderateVerticalScale(7)}} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              marginTop: moderateVerticalScale(5),
            }}>
            Pay Out
          </Text>
        </Pressable>
      </View> */}
      <ScrollView>
        <HomeSlideScreen />
        <HistoryMain/>
        <LinearGradient
          colors={['#5A4FCF', '#C6BCFF']} // You can specify your gradient colors here
          style={style.up}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              marginTop: '3%',
              marginLeft: '3%',
            }}>
            Utilities Payment By BBPS
          </Text>
          <UtilityPayments/>
        </LinearGradient>

        <View
          style={{width: '100%', height: moderateVerticalScale(100)}}></View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  hpms: {
    width: '100%',
    height: moderateVerticalScale(450),
    marginTop: moderateVerticalScale(80),
    backgroundColor: '#C6BCFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  button1: {
    width: '40%',
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A9315C',
    marginTop: moderateVerticalScale(10),
    marginLeft: moderateScale(110),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  up: {
    width: '94%',
    height: 250,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#330066',
    marginTop: moderateVerticalScale(30),
  },
});
