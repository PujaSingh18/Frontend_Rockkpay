import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import BackArrow from '../SVGComponent/BackArrow';

export default function PayInHeader() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>{
      navigation.navigate('HomeMainScreen');
    }} style={styles.pih}>
      <BackArrow
        style={{
          marginTop: moderateVerticalScale(15),
          marginLeft: moderateScale(10),
        }}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'white',
          marginLeft: moderateScale(20),
          marginTop: moderateVerticalScale(15),
        }}>
        Mandatory Parameters
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pih: {
    width: '100%',
    height: 60,
    backgroundColor: '#6633CC',
    flexDirection: 'row',
  },
});
