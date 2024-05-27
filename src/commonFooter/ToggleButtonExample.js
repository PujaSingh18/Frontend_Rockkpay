import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';

const ToggleButtonExample = () => {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <View style={styles.a}>
    <Switch value={switchOn} onValueChange={() => {
      setSwitchOn(!switchOn)
      Alert.alert("Switch on : " + !switchOn)} }/>
    </View>
  );
};

const styles=StyleSheet.create({
  a: {
    marginTop:moderateScale(-40)
  }
})

export default ToggleButtonExample;
