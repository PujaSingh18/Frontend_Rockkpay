import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackArrowComponent from '../../SVGComponent/BackArrowComponent';
import Camera from '../../SVGComponent/Camera';
import QLogoComponent from '../../SVGComponent/QLogoComponent';
import UPBackground from '../../SVGComponent/UPBackground';
import UserProfileScreen from './UserProfileScreen';

export default function UserProfileMain() {
  const navigation = useNavigation();
  return (
    <>
      <LinearGradient
      colors={['#5A4FCF','#C6BCFF']} // You can specify your gradient colors here
      style={styles.upm}>
        <UPBackground style={{marginTop: '10%', marginLeft: '30%'}} />
        <Pressable
          style={{marginTop: '-40%', marginLeft: '5%'}}
          onPress={() => {
            navigation.navigate('ProfileMain');
          }}>
          <BackArrowComponent />
        </Pressable>
        <Camera style={{marginTop: '25%', marginLeft: '42%'}} />
        <QLogoComponent style={{marginLeft: '83%', marginTop: '-11%'}} />

        <View style={{marginTop: '5%'}}>
          <UserProfileScreen />
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  upm: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C6BCFF',
  },
});
