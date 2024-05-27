// import { useNavigation, useRoute } from '@react-navigation/native';
// import React, { useRef, useState } from 'react';
// import {
//   Dimensions,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
// import { asyncStorage } from '../config/asyncStorage';

// const OTPVerificationScreen = () => {
//   const navigation = useNavigation();
  
//   //const route = useRoute();
//   //const {mobileNumber, userName} = route.params;

//   const et1 = useRef();
//   const et2 = useRef();
//   const et3 = useRef();
//   const et4 = useRef();
//   const et5 = useRef();
//   const et6 = useRef();

//   // State for OTP input fields
//   const [val1, setVal1] = useState('');
//   const [val2, setVal2] = useState('');
//   const [val3, setVal3] = useState('');
//   const [val4, setVal4] = useState('');
//   const [val5, setVal5] = useState('');
//   const [val6, setVal6] = useState('');

//   const route = useRoute();
//   const mobileNumber = route.params?.mobileNumber;
//   const userName = "Pooja";
//   const amount = route.params.amount;
//   // State for handling errors and loading
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
// console.log(route.params,"ROUTE INSIDE PARAMSSSSSS");
//   // Handle input change and move to the next field
// const handleInputChange = (text, setText, nextRef,backRef) => {
//     // Use regex to remove any non-numeric characters
//     const numericText = text.replace(/[^0-9]/g, '');
    
//     // Update the state with the filtered numeric text
//     setText(numericText);

//     // If the text length is 1 and there is a next field reference, move focus to the next input field
//     if (numericText.length === 1 && nextRef) {
//         nextRef.current.focus();
//     }
//     if (numericText.length === 0 && backRef) {
//         backRef.current.focus();
//     }
// };

//   // Function to verify OTP
//   const verifyOTP = async () => {
//     // Combine the OTP values from the input fields
//     const otp = val1 + val2 + val3 + val4 + val5 + val6;


//     // Make an API request to verify the OTP
//     // try {
//     //   setLoading(true);
//     //   const response = await axios.post(
//     //     'http://192.168.113.177:8080/api/verify-otp',
//     //     {
//     //       mobile_number: mobileNumber,
//     //       otp,
//     //     },
//     //   );
//     //   console.log(mobileNumber,"Mobileee inside OTP");
//     //   console.log(otp,"otp");

//       // Check the response from the server
//       // if (response.status === 200) {
//         // OTP verification successful  // if(amount != null ){
//         //   navigation.navigate('PayInMain', { mobileNumber, userName, amount });
//         // }
//         // else{
//         //   navigation.navigate('HomeMainScreen', { mobileNumber, userName, amount });
//         // }
//         // console.log(route.params.mobileNumber,"Inside response 2000000000000000")
//         asyncStorage.setName(userName);
//  asyncStorage.setMobile(mobileNumber);
      
//       // } else {
//         // OTP verification failed
//       //   console.log(response.status);
//       //   setError('Invalid OTP. Please try again.');
//       // }
//     // } catch (error) {
//     //   setError('An error occurred. Please try again later.');
//     // } finally {
//     //   setLoading(false);
//     // }
//   };

//   return (
//     <>
//       <View style={style.ovs}>
//         <Image
//           source={require('../images/OTPScreen.jpg')}
//           style={{width: '100%', height: '100%'}}
//         />
//         <View style={{marginTop: moderateVerticalScale(-700)}}>
//           <Image
//             source={require('../images/puja.png')}
//             style={{
//               width: 140,
//               height: 140,
//               marginLeft: moderateScale(20),
//               backgroundColor: 'white',
//               borderRadius: 80,
//             }}
//           />
//           <Text
//             style={{
//               fontSize: 20,
//               color: 'white',
//               marginLeft: moderateScale(20),
//             }}>
//             Verify your One Time Password
//           </Text>
//           <Text
//             style={{
//               fontSize: 15,
//               color: 'white',
//               marginLeft: moderateScale(20),
//               marginTop: moderateVerticalScale(10),
//             }}>
//             Enter the OTP sent to your number
//           </Text>
//         </View>
//         <View
//           style={{
//             width: '100%',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'row',
//             marginTop: 30,
//             gap: 5,
//           }}>
//           <TextInput
//             ref={et1}
//             style={style.input}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val1}
//             onChangeText={text => handleInputChange(text, setVal1, et2,null)}
//           />
//           <TextInput
//             ref={et2}
//             style={style.input}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val2}
//             onChangeText={text => handleInputChange(text, setVal2, et3,et1)}
//           />
//           <TextInput
//             ref={et3}
//             style={style.input}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val3}
//             onChangeText={text => handleInputChange(text, setVal3, et4,et2)}
//           />
//           <TextInput
//             ref={et4}
//             style={style.input}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val4}
//             onChangeText={text => handleInputChange(text, setVal4, et5,et3)}
//           />
//           <TextInput
//             ref={et5}
//             style={style.input}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val5}
//             onChangeText={text => handleInputChange(text, setVal5, et6,et4)}
//           />
//           <TextInput
//             ref={et6}
//             style={style.input}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val6}
//             onChangeText={text => handleInputChange(text, setVal6, null,et5)}
//           />
//         </View>

//         {error && <Text style={{color: 'red', marginTop: 10}}>{error}</Text>}

//         <Pressable
//           onPress={verifyOTP}
//           disabled={loading}
//           style={[
//             {
//               width: '93%',
//               height: 55,
//               borderRadius: 20,
//               marginTop: 50,
//               alignSelf: 'center',
//               justifyContent: 'center',
//               alignItems: 'center',
//               backgroundColor: '#C6BCFF',
//             },
//           ]}>
//           <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
//             Verify
//           </Text>
//         </Pressable>
//       </View>
//     </>
//   );
// };

// const HEIGHT = Dimensions.get('screen').height;
// const WIDTH = Dimensions.get('screen').width;

// const style = StyleSheet.create({
//   ovs: {
//     height: HEIGHT,
//     width: WIDTH,
//   },
//   input: {
//     width: 50,
//     height: 50,
//     borderWidth: 2,
//     borderRadius: 10,
//     textAlign: 'center',
//     borderColor: 'white',
//     color: 'white',
//   },
// });

// export default OTPVerificationScreen;


import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios'; // Importing axios for making HTTP requests
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

const OTPVerificationScreen = () => {
  const navigation = useNavigation();
  
  //const route = useRoute();
  //const {mobileNumber, userName} = route.params;

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  // State for OTP input fields
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [val5, setVal5] = useState('');
  const [val6, setVal6] = useState('');

  const route = useRoute();
  const mobileNumber = route.params?.mobileNumber;
  const userName = route.params?.userName;

  
  // State for handling errors and loading
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

    // Handle input change and move to the next field
    const handleInputChange = (text, setText, nextRef,backRef) => {
    // Use regex to remove any non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
    
    // Update the state with the filtered numeric text
    setText(numericText);

    // If the text length is 1 and there is a next field reference, move focus to the next input field
    if (numericText.length === 1 && nextRef) {
        nextRef.current.focus();
    }
    if (numericText.length === 0 && backRef) {
        backRef.current.focus();
    }
};

  // Function to verify OTP
  const verifyOTP = async () => {
    // Combine the OTP values from the input fields
    const otp = val1 + val2 + val3 + val4 + val5 + val6;


    // Make an API request to verify the OTP
    try {
      setLoading(true);
      const response = await axios.post(
        'http://192.168.1.39:5000/api/verify-otp',
        {
          mobile_number: mobileNumber,
          otp,
        },
      );

      // Check the response from the server
      if (response.status === 200) {
        // OTP verification successful
        navigation.navigate('HomeMainScreen', { mobileNumber, userName });
      } else {
        // OTP verification failed
        console.log(response.status);
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={style.ovs}>
        <Image
          source={require('../images/OTPScreen.jpg')}
          style={{width: '100%', height: '100%'}}
        />
        <View style={{marginTop: moderateVerticalScale(-700)}}>
          <Image
            source={require('../images/puja.png')}
            style={{
              width: 140,
              height: 140,
              marginLeft: moderateScale(20),
              backgroundColor: 'white',
              borderRadius: 80,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              marginLeft: moderateScale(20),
            }}>
            Verify your One Time Password
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginLeft: moderateScale(20),
              marginTop: moderateVerticalScale(10),
            }}>
            Enter the OTP sent to your number
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 30,
            gap: 5,
          }}>
          <TextInput
            ref={et1}
            style={style.input}
            keyboardType="numeric"
            maxLength={1}
            value={val1}
            onChangeText={text => handleInputChange(text, setVal1, et2,null)}
          />
          <TextInput
            ref={et2}
            style={style.input}
            keyboardType="numeric"
            maxLength={1}
            value={val2}
            onChangeText={text => handleInputChange(text, setVal2, et3,et1)}
          />
          <TextInput
            ref={et3}
            style={style.input}
            keyboardType="numeric"
            maxLength={1}
            value={val3}
            onChangeText={text => handleInputChange(text, setVal3, et4,et2)}
          />
          <TextInput
            ref={et4}
            style={style.input}
            keyboardType="numeric"
            maxLength={1}
            value={val4}
            onChangeText={text => handleInputChange(text, setVal4, et5,et3)}
          />
          <TextInput
            ref={et5}
            style={style.input}
            keyboardType="numeric"
            maxLength={1}
            value={val5}
            onChangeText={text => handleInputChange(text, setVal5, et6,et4)}
          />
          <TextInput
            ref={et6}
            style={style.input}
            keyboardType="numeric"
            maxLength={1}
            value={val6}
            onChangeText={text => handleInputChange(text, setVal6, null,et5)}
          />
        </View>

        {error && <Text style={{color: 'red', marginTop: 10}}>{error}</Text>}

        <Pressable
          onPress={verifyOTP}
          disabled={loading}
          style={[
            {
              width: '93%',
              height: 55,
              borderRadius: 20,
              marginTop: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#C6BCFF',
            },
          ]}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Verify
          </Text>
        </Pressable>
      </View>
    </>
  );
};

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const style = StyleSheet.create({
  ovs: {
    height: HEIGHT,
    width: WIDTH,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: 'white',
    color: 'white',
  },
});

export default OTPVerificationScreen;
