import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import NBAComponent from '../SVGComponent/NBAComponent';
import NetflixComponent from '../SVGComponent/NetflixComponent';
import PersonBoy from '../SVGComponent/PersonBoy';
import PersonComponent from '../SVGComponent/PersonComponent';

export default function TransactionRecent() {
  return (
    <>
      <View style={styles.tr}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: moderateVerticalScale(10),
            marginLeft: moderateScale(20),
          }}>
          Recent Transactions
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: moderateVerticalScale(20),
            marginLeft: moderateScale(20),
          }}>
          <NBAComponent />
          <PersonComponent/>
          <NetflixComponent/>
          <PersonBoy/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tr: {
    width: '94%',
    height: 150,
    justifyContent: 'center',
    marginLeft: moderateScale(10),
    marginTop: moderateVerticalScale(10),
    //borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#EEF5FF',
  }
});
