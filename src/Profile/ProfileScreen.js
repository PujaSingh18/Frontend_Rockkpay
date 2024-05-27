import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Back from '../SVGComponent/Back';
import PersonLogo from '../SVGComponent/PersonLogo';
import PrintComponent from '../SVGComponent/PrintComponent';
import QRCode from '../SVGComponent/QRCode';
import StarCom from '../SVGComponent/StarCom';
import ThemesComponent from '../SVGComponent/ThemesComponent';
import ToggleButtonExample from '../commonFooter/ToggleButtonExample';

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <>
      <LinearGradient colors={['#5A4FCF', '#C6BCFF']} style={styles.ps}>
        <Pressable
          onPress={() => {
            navigation.navigate('UserProfileMain');
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            alignSelf: 'center',
            gap: 25,
          }}>
          <PersonLogo style={{marginTop: '5%'}} />
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            User Name
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              marginTop: '15%',
              marginLeft: '-40%',
            }}>
            +91 9867542345
          </Text>
          <Back style={{marginLeft: '20%'}} />
        </Pressable>
      </LinearGradient>

      <LinearGradient colors={['#5A4FCF', '#C6BCFF']} style={styles.his}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: moderateVerticalScale(20),
            marginLeft: moderateScale(20),
          }}>
          Settings
        </Text>

        <View style={{rowGap: 30}}>
          <Pressable
            onPress={() => {
              navigation.navigate('HomeMainScreen');
            }}
            style={{justifyContent: 'space-between'}}>
            <QRCode
              style={{marginLeft: moderateVerticalScale(20), marginTop: '2%'}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
                fontWeight: 'bold',
              }}>
              Languages
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: moderateVerticalScale(70),
                color: 'black',
              }}>
              Select your preferred language
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate('ThemeMain');
            }}>
            <ThemesComponent style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
                fontWeight: 'bold',
              }}>
              Themes
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: moderateVerticalScale(70),
                color: 'black',
              }}>
              Theme & wallpapers
            </Text>
          </Pressable>

          <View>
            <PrintComponent style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
                fontWeight: 'bold',
              }}>
              Screen Lock
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: moderateVerticalScale(70),
                color: 'black',
              }}>
              Biometric and Screen Lock
            </Text>
            <ToggleButtonExample style={{marginTop: moderateScale(-40)}} />
          </View>

          <Pressable style={{marginTop:'4%'}} onPress={()=>{
            navigation.navigate('ChangeMpinOldMain');
          }}>
            <StarCom style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
                fontWeight: 'bold',
              }}>
              Change M-PIN
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginLeft: moderateVerticalScale(70),
                color: 'black',
              }}>
              Privacy Settings
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  ps: {
    width: '94%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: '2%',
    marginLeft: '3%',
    borderColor: '#330066',
  },
  his: {
    width: '94%',
    height: 330,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#330066',
    marginTop: '2%',
    marginLeft: '3%',
    gap: 5,
  },
});
