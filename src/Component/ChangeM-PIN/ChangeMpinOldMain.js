import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BackArrow from '../../SVGComponent/BackArrow';

export default function ChangeMpinOldMain() {
  const navigation = useNavigation();
  const [mpin, setMpin] = useState(['', '', '', '']);

  // Create refs for each TextInput
  const mpinRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Function to handle text changes in each input field
  const handleTextChange = (index, text) => {
    // Set the new value for the current TextInput
    const newMpin = [...mpin];
    newMpin[index] = text;
    setMpin(newMpin);

    // If the text length reaches the maxLength, move to the next input
    if (text.length === 1 && index < mpin.length - 1) {
      mpinRefs[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.mpin}>
      <Pressable
        style={styles.header}
        onPress={() => {
          navigation.navigate('ProfileMain');
        }}>
        <BackArrow style={{marginTop: '1%', marginLeft: '-2%'}} />
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          Change M-PIN
        </Text>
      </Pressable>
      <View style={styles.pass}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
          Enter your Old M-PIN
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            gap: 5,
          }}>
          {mpin.map((digit, index) => (
            <TextInput
              key={index}
              ref={mpinRefs[index]}
              style={styles.input}
              secureTextEntry={true}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleTextChange(index, text)}
            />
          ))}
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('ChangeMpinVerifyMain');
          }}>
          <Text
            style={{
              color: '#0F62FE',
              marginTop: '5%',
              marginLeft: '5%',
            }}>
            Forgot M-PIN?
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.btn}
        onPress={() => {
          navigation.navigate('ChangeMpinVerifyMain');
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
          Verify
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mpin: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C6BCFF',
  },
  header: {
    width: '100%',
    height: 65,
    backgroundColor: '#6633CC',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15,
    gap: 20,
  },
  pass: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
    marginTop: '5%',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: 'white',
    marginHorizontal: 5,
  },
  btn: {
    width: '96%',
    height: 60,
    borderRadius: 20,
    borderColor: 'black',
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6633CC',
    marginLeft: '2%',
  },
});
