/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  scale,
  verticalScale
} from 'react-native-size-matters';
import BackArrow from '../SVGComponent/BackArrow';
import IconCom from '../SVGComponent/IconCom';

export default function DHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
      onPress={() => {
            navigation.navigate('HomeMainScreen');
          }} style={styles.search1}>
        <BackArrow style={{marginTop:-5}}/>
      </Pressable>
      <Text style={styles.searchText}>Bills & Recharges</Text>
      <Pressable style={styles.searchIcon}>
      <IconCom/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
header: {
    width: '100%',
    height: verticalScale(60),
    backgroundColor: '#5A4FCF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
},
search1: {
    width: scale(15),
    height: 15,
    marginTop:moderateScale(25),
    marginLeft:moderateScale(10),
},
searchText: {
    marginLeft: moderateScale(50),
    fontSize: moderateScale(18),
    alignSelf: 'center',
    color: 'white',
    fontWeight:'bold',
    // eslint-disable-next-line no-dupe-keys
    fontSize: moderateScale(20),
},
searchIcon: {
    marginLeft: moderateScale(70),
    marginTop:moderateScale(10),
},
});
