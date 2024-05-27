import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import AboutIpaisa from '../SVGComponent/AboutIpaisa';
import LogoutComponent from '../SVGComponent/LogoutComponent';
import { asyncStorage } from '../config/asyncStorage';
// import RNRestart from './../../node_modules/react-native-restart/lib/module/index';
import ProfileHeader from './ProfileHeader';
import ProfileScreen from './ProfileScreen';
export default function ProfileMain() {
  const navigation = useNavigation();
  // Function to handle logout
  const handleLogout = async () => {
    // Navigate the user back to the login screen
    asyncStorage.removeToken();
    asyncStorage.removeName();
    asyncStorage.removeMobile();
    // navigation.navigate('MainLoginScreen');
    // RNRestart.restart();
  };
  return (
    <>
      <View style={styles.pm}>
        <ProfileHeader />
        <ProfileScreen />
        <LinearGradient colors={['#5A4FCF', '#C6BCFF']} style={styles.d}>
          <Pressable onPress={() => {
            navigation.navigate('AboutMain');
          }}>
            <View style={styles.buttonContent}>
              <AboutIpaisa
                style={{
                  marginTop: moderateScale(20),
                  marginLeft: moderateScale(10),
                }}
              />
              <Text style={styles.buttonText}>About RockkPay</Text>
              <Text style={styles.buttonSubText}>Privacy settings</Text>
            </View>
          </Pressable>
        </LinearGradient>
        <LinearGradient colors={['#5A4FCF', '#C6BCFF']} style={styles.e}>
          <Pressable onPress={handleLogout}>
            <View style={styles.buttonContent}>
              <LogoutComponent
                style={{
                  marginTop: moderateScale(10), // Adjusted marginTop for icon alignment
                  marginLeft: moderateScale(20),
                }}
              />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </Pressable>
        </LinearGradient>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  pm: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C6BCFF',
  },
  d: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '94%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#330066',
  },
  e: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '94%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: moderateVerticalScale(30),
    borderWidth: 1,
    borderColor: '#330066',
  },
  buttonContent: {
    width:'94%',
    height:70,
    flexDirection: 'row', // Adjusted to align icon and text horizontally
    alignItems: 'center', // Adjusted to align icon and text vertically
    marginLeft: moderateScale(10),
    gap:10,
    //marginTop: moderateVerticalScale(-40),
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonSubText: {
    fontSize: 14,
    color: 'black',
    marginTop: moderateVerticalScale(40),
    marginLeft: moderateVerticalScale(-170),
  },
  logoutText: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: moderateScale(10), // Adjusted marginLeft for text alignment
  },
});