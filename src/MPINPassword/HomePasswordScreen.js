import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomePasswordScreen() {
  const navigation = useNavigation(); // Initialize the navigation hook
  const [password, setPassword] = useState(''); // State variable to track entered password
  const [errorMessage, setErrorMessage] = useState(''); // State variable for error messages

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const checkPassword = async () => {
      const storedPassword = await AsyncStorage.getItem('mpin'); // Retrieve stored M-PIN

      if (password.length === 4) {
        if (password === storedPassword) {
          navigation.navigate('HomeMainScreen'); // Navigate on correct M-PIN
        } else {
          setErrorMessage('Invalid M-PIN');
        }
      }
    };

    checkPassword(); // Check the M-PIN
  }, [password, navigation]);

  const handleInputChange = (text, index) => {
    setPassword(prev => {
      const newPassword = prev.split('');
      newPassword[index] = text;
      return newPassword.join('');
    });

    if (text.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <LinearGradient
      colors={['#5A4FCF', '#C6BCFF']}
      style={{width: '100%', height: '100%'}}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
          }}>
          Enter RockkPay M-PIN
        </Text>
        {errorMessage && (
          <Text style={{color: 'red', alignSelf: 'center', marginTop: 10}}>
            {errorMessage}
          </Text>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              style={{
                width: 50,
                height: 50,
                borderWidth: 2,
                borderRadius: 10,
                textAlign: 'center',
              }}
              secureTextEntry
              keyboardType="numeric"
              maxLength={1}
              ref={inputRefs[index]}
              onChangeText={text => handleInputChange(text, index)}
              value={password[index] || ''}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChangeMpinVerifyMain')}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              textDecorationLine: 'underline',
              marginTop: 10,
            }}>
            Forgot the M-PIN?
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  hp: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 80,
    marginTop: '10%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginLeft: '20%',
    marginTop: '5%',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '300',
    color: 'white',
    marginLeft: '21%',
    marginTop: '2%',
  },
  errorMessage: {
    color: 'red',
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    gap: 5,
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
  forgotPasswordText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios'; // For API requests
// import React, { useState } from 'react';
// import { Alert, Button, Text, TextInput, View } from 'react-native';

// const HomePasswordScreen = () => {
//   const [mpin, setMPIN] = useState('');
//   const navigation = useNavigation();

//   const verifyMPIN = async () => {
//     try {
//       const response = await axios.post('http://192.168.233.246:8080/api/verify-mpin', { mpin }); // Endpoint to verify M-PIN
//       if (response.data.success) {
//         navigation.navigate('HomeMainScreen'); // Navigate to Home Screen on successful verification
//       } else {
//         Alert.alert('Error', 'Incorrect M-PIN'); // Show error if M-PIN is incorrect
//       }
//     } catch (error) {
//       console.error('Error verifying M-PIN:', error);
//       Alert.alert('Error', 'An error occurred while verifying M-PIN');
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Enter your M-PIN to unlock</Text>
//       <TextInput
//         value={mpin}
//         secureTextEntry
//         keyboardType="numeric"
//         maxLength={4} // Assuming a 4-digit M-PIN
//         onChangeText={setMPIN}
//         style={{ width: '80%', borderBottomWidth: 1, textAlign: 'center' }}
//       />
//       <Button title="Unlock" onPress={verifyMPIN} />
//     </View>
//   );
// };

// export default HomePasswordScreen;
