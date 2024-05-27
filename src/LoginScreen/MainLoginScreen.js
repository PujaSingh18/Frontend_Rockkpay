import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import PhoneLogo from '../SVGComponent/PhoneLogo';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function MainLoginScreen(props) {
  // const route = useRoute();

  const navigation = useNavigation();
  // const { deepLinkAmount } = route.params;
  return (
    <>
      <View style={styles.mls}>
        <Image
          source={require('../images/BackgroundLogin.jpg')}
          style={{width: '100%', height: '100%'}}
        />
        <FadeInView>
          <View
            style={{
              //alignItems: 'center',
              marginTop: moderateVerticalScale(-600),
              marginLeft: moderateScale(40),
              alignSelf: 'center',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 120,
                marginLeft: -20,
              }}>
              <Image
                source={require('../images/puja.png')}
                style={{width: 140, height: 140,  backgroundColor: 'white',
                borderRadius: 80,}}
              />
            </View>
          </View>
          <View
            style={{width: '94%', height: 170, marginTop: 280, marginLeft: 15}}>
            <Pressable
              onPress={() => {
                navigation.navigate('LoginUserScreen');
              }}
              style={{
                borderRadius: 20,
                borderWidth: 2,
                borderColor: 'white',
                marginTop: moderateVerticalScale(20),
                width: '94%',
                height: 60,
                marginLeft: moderateScale(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <PhoneLogo
                style={{
                  marginTop: moderateVerticalScale(20),
                  marginLeft: moderateScale(30),
                }}
              />
              <Text
                style={{
                  marginTop: moderateVerticalScale(20),
                  color: 'white',
                  fontWeight: 'bold',
                  marginRight: moderateScale(80),
                }}>
                Login with phone number
              </Text>
            </Pressable>
            <Text
              style={{
                fontSize: 15,
                color: 'white',
                marginTop: moderateVerticalScale(25),
                alignSelf: 'center',
                textAlign: 'center',
                marginRight: moderateScale(18),
                fontWeight: 'bold',
              }}>
              RockkPay, the trusted platform for{'\n'}all your daily expenses, by secure{' '}
              {'\n'}and seamless payments.
            </Text>
          </View>
        </FadeInView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mls: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2148C0',
  },
});
