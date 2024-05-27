import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainLoginScreen');
    }, 3000);
  });
  return (
    <>
      <View style={style.mainbg}>
        <Image source={require('./images/LoginPage.jpg')} />
        <View>
          <Image
            source={require('./images/puja.png')}
            style={{
              width: 140,
              height: 140,
              marginLeft: moderateScale(110),
              backgroundColor: 'white',
              borderRadius: 80,
              marginTop: moderateVerticalScale(-600),
            }}
          />
        </View>
        {/* <SplashRockkPay style={{marginTop:moderateVerticalScale(-500), marginLeft:moderateScale(25)}}/> */}
      </View>
    </>
  );
}
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const style = StyleSheet.create({
  mainbg: {
    height: HEIGHT,
    width: WIDTH,
  },
});
