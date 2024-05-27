// MainComponent.js
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ThemeContext from './ThemeContext';
const MainComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === 'dark' && styles.dark]}>
    <Text style={{color:'gray', fontSize:20}}>Welcome to React Native!</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
});

export default MainComponent;
