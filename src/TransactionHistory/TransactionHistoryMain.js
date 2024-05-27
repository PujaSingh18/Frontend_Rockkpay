import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import IconComponent from '../SVGComponent/IconComponent';
import TransactionHistoryHeader from './TransactionHistoryHeader';
import TransactionScreen from './TransactionScreen';

export default function TransactionHistoryMain() {
  return (
    <>
      <View style={styles.thm}>
        <TransactionHistoryHeader />
        <View style={[styles.container]}>
          <IconComponent style={{marginTop:moderateVerticalScale(5)}}/>
          <Pressable
            style={{width: '80%', height: 50, justifyContent: 'center'}}>
            <TextInput
              style={{
                fontSize: 16,
                alignItems: 'center',
                placeholderTextColor: '#fff',
              }}
              placeholder="Search by name"
            />
          </Pressable>
        </View>
        <TransactionScreen/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  thm: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C6BCFF',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    alignContent: 'center',
    borderRadius: 10,
  },
});
