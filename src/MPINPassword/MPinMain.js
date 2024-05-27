import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateVerticalScale } from 'react-native-size-matters';

export default function MPinMain() {
  const navigation = useNavigation();
  const route = useRoute();
  const mobileNumber = route.params;

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  const et7 = useRef();
  const et8 = useRef();

  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [val5, setVal5] = useState('');
  const [val6, setVal6] = useState('');
  const [val7, setVal7] = useState('');
  const [val8, setVal8] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // Handle input changes and move to the next field
  const handleInputChange = (text, setText, nextRef, backRef) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setText(numericText);

    if (numericText.length === 1 && nextRef) {
      nextRef.current.focus();
    }
    if (numericText.length === 0 && backRef) {
      backRef.current.focus();
    }
  };

  const handleSetMPin = async () => {
    const mpin1 = val1 + val2 + val3 + val4;
    const mpin2 = val5 + val6 + val7 + val8;

    if (mpin1 !== mpin2) {
      setError('The M-PINs do not match. Please try again.');
      return;
    }

    try {
      setLoading(true);

      // Save the M-PIN in AsyncStorage
      await AsyncStorage.setItem('mpin', mpin1);

      // Optional: Send to server
      const response = await axios.put('http://192.168.233.246:8080/mpin/update', {
        mobile_number: mobileNumber,
        mpin: mpin1,
      });

      if (response.status === 200) {
        setModalVisible(true); // Show success modal
      } else {
        setError('Failed to set M-PIN. Please try again.');
      }
    } catch (error) {
      // console.error(error.message);
      // setError('An error occurred. Please try again later.');
      console.error('Request failed:', error.response?.data ?? error.message);  // Log the error response
    setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.ovs}>
      <Image
          source={require('../images/OTPScreen.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
        <View style={{ marginTop: moderateVerticalScale(-700) }}>
          <Image
            source={require('../images/puja.png')}
            style={{
              width: 140,
              height: 140,
              backgroundColor: 'white',
              borderRadius: 80,
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center' }}>
            Set RockkPay M-PIN
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            gap: 5,
          }}>
          <TextInput
            style={styles.input}
            ref={et1}
            keyboardType="numeric"
            maxLength={1}
            value={val1}
            onChangeText={text => handleInputChange(text, setVal1, et2, null)}
          />
          <TextInput
            style={styles.input}
            ref={et2}
            keyboardType="numeric"
            maxLength={1}
            value={val2}
            onChangeText={text => handleInputChange(text, setVal2, et3, et1)}
          />
          <TextInput
            style={styles.input}
            ref={et3}
            keyboardType="numeric"
            maxLength={1}
            value={val3}
            onChangeText={text => handleInputChange(text, setVal3, et4, et2)}
          />
          <TextInput
            style={styles.input}
            ref={et4}
            keyboardType="numeric"
            maxLength={1}
            value={val4}
            onChangeText={text => handleInputChange(text, setVal4, null, et3)}
          />
        </View>

        <View style={{ marginTop: '5%' }}>
          <Text style={{ fontSize: 20, color: 'white', alignSelf: 'center' }}>
            ReEnter RockkPay M-PIN
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
            <TextInput
              style={styles.input}
              ref={et5}
              keyboardType="numeric"
              maxLength={1}
              value={val5}
              onChangeText={text => handleInputChange(text, setVal5, et6, et4)}
            />
            <TextInput
              style={styles.input}
              ref={et6}
              keyboardType="numeric"
              maxLength={1}
              value={val6}
              onChangeText={text => handleInputChange(text, setVal6, et7, et5)}
            />
            <TextInput
              style={styles.input}
              ref={et7}
              keyboardType="numeric"
              maxLength={1}
              value={val7}
              onChangeText={text => handleInputChange(text, setVal7, et8, et6)}
            />
            <TextInput
              style={styles.input}
              ref={et8}
              keyboardType="numeric"
              maxLength={1}
              value={val8}
              onChangeText={text => handleInputChange(text, setVal8, null, et7)}
            />
          </View>
        </View>

        {error && (
          <Text style={{ color: 'red', marginTop: 10, alignSelf: 'center' }}>
            {error}
          </Text>
        )}
        <Pressable
          onPress={handleSetMPin}
          disabled={loading}
          style={[
            {
              width: '90%',
              height: 55,
              borderRadius: 20,
              marginTop: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#C6BCFF',
            },
          ]}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
            Set
          </Text>
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          navigation.navigate('HomePasswordScreen');
        }}>
        <View style={styles.centeredView}>
          <LinearGradient
            colors={['#5A4FCF', '#C6BCFF']}
            style={styles.modalView}>
            <Text style={styles.modalText}>
              Your M-PIN has been set successfully
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('HomePasswordScreen');
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </Modal>
    </>
  );
}

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
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
  modalView: {
    width: '90%',
    height: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginTop: '5%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});




// import { useNavigation } from '@react-navigation/native';
// import React, { useRef, useState } from 'react';
// import {
//   Dimensions,
//   Image,
//   Modal,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { moderateVerticalScale } from 'react-native-size-matters';

// export default function MPinMain() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation();

//   const et1 = useRef();
//   const et2 = useRef();
//   const et3 = useRef();
//   const et4 = useRef();
//   const et5 = useRef();
//   const et6 = useRef();
//   const et7 = useRef();
//   const et8 = useRef();

//   // State for OTP input fields
//   const [val1, setVal1] = useState('');
//   const [val2, setVal2] = useState('');
//   const [val3, setVal3] = useState('');
//   const [val4, setVal4] = useState('');
//   const [val5, setVal5] = useState('');
//   const [val6, setVal6] = useState('');
//   const [val7, setVal7] = useState('');
//   const [val8, setVal8] = useState('');

//   // State for handling errors and loading
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Handle input change and move to next field
//   // Handle input change and move to the next field
//   const handleInputChange = (text, setText, nextRef, backRef) => {
//     // Use regex to remove any non-numeric characters
//     const numericText = text.replace(/[^0-9]/g, '');

//     // Update the state with the filtered numeric text
//     setText(numericText);

//     // If the text length is 1 and there is a next field reference, move focus to the next input field
//     if (numericText.length === 1 && nextRef) {
//       nextRef.current.focus();
//     }
//     if (numericText.length === 0 && backRef) {
//       backRef.current.focus();
//     }
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
//               //marginLeft: moderateScale(20),
//               backgroundColor: 'white',
//               borderRadius: 80,
//               alignItems: 'center',
//               alignSelf: 'center',
//             }}
//           />
//           <Text
//             style={{
//               fontSize: 20,
//               color: 'white',
//               alignSelf: 'center',
//             }}>
//             Set RockkPay M-PIN
//           </Text>
//         </View>
//         <View
//           style={{
//             width: '100%',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'row',
//             marginTop: 20,
//             gap: 5,
//           }}>
//           <TextInput
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 2,
//               borderRadius: 10,
//               textAlign: 'center',
//               borderColor: 'white',
//               color: 'white',
//             }}
//             ref={et1}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val1}
//             onChangeText={text => handleInputChange(text, setVal1, et2, null)}
//           />
//           <TextInput
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 2,
//               borderRadius: 10,
//               textAlign: 'center',
//               borderColor: 'white',
//               color: 'white',
//             }}
//             ref={et2}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val2}
//             onChangeText={text => handleInputChange(text, setVal2, et3, et1)}
//           />
//           <TextInput
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 2,
//               borderRadius: 10,
//               textAlign: 'center',
//               borderColor: 'white',
//               color: 'white',
//             }}
//             ref={et3}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val3}
//             onChangeText={text => handleInputChange(text, setVal3, et4, et2)}
//           />
//           <TextInput
//             style={{
//               width: 50,
//               height: 50,
//               borderWidth: 2,
//               borderRadius: 10,
//               textAlign: 'center',
//               borderColor: 'white',
//               color: 'white',
//             }}
//             ref={et4}
//             keyboardType="numeric"
//             maxLength={1}
//             value={val4}
//             onChangeText={text => handleInputChange(text, setVal4, et5, et3)}
//           />
//         </View>

//         <View style={{marginTop: '5%'}}>
//           <Text
//             style={{
//               fontSize: 20,
//               color: 'white',
//               alignSelf: 'center',
//             }}>
//             ReSet RockkPay M-PIN
//           </Text>
//           <View
//             style={{
//               width: '100%',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'row',
//               marginTop: 20,
//               gap: 5,
//             }}>
//             <TextInput
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderWidth: 2,
//                 borderRadius: 10,
//                 textAlign: 'center',
//                 borderColor: 'white',
//                 color: 'white',
//               }}
//               ref={et5}
//               keyboardType="numeric"
//               maxLength={1}
//               value={val5}
//               onChangeText={text => handleInputChange(text, setVal5, et6, et4)}
//             />
//             <TextInput
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderWidth: 2,
//                 borderRadius: 10,
//                 textAlign: 'center',
//                 borderColor: 'white',
//                 color: 'white',
//               }}
//               ref={et6}
//               keyboardType="numeric"
//               maxLength={1}
//               value={val6}
//               onChangeText={text => handleInputChange(text, setVal6, et7, et5)}
//             />
//             <TextInput
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderWidth: 2,
//                 borderRadius: 10,
//                 textAlign: 'center',
//                 borderColor: 'white',
//                 color: 'white',
//               }}
//               ref={et7}
//               keyboardType="numeric"
//               maxLength={1}
//               value={val7}
//               onChangeText={text => handleInputChange(text, setVal7, et8, et6)}
//             />
//             <TextInput
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderWidth: 2,
//                 borderRadius: 10,
//                 textAlign: 'center',
//                 borderColor: 'white',
//                 color: 'white',
//               }}
//               ref={et8}
//               keyboardType="numeric"
//               maxLength={1}
//               value={val8}
//               onChangeText={text => handleInputChange(text, setVal8, null, et7)}
//             />
//           </View>
//         </View>

//         <Pressable
//           onPress={() => setModalVisible(true)}
//           style={[
//             {
//               width: '90%',
//               height: 55,
//               borderRadius: 20,
//               marginTop: 50,
//               alignSelf: 'center',
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: 'center',
//               backgroundColor: '#C6BCFF',
//             },
//           ]}>
//           <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
//             Set
//           </Text>
//         </Pressable>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(false);
//         }}>
//         <View style={style.centeredView}>
//           <LinearGradient
//             colors={['#5A4FCF', '#C6BCFF']}
//             style={style.modalView}>
//             <Text style={style.modalText}>
//               Your PIN have {'\n'} been set successfully
//             </Text>
//             <Pressable
//               style={[style.button, style.buttonClose]}
//               onPress={() => {
//                 setModalVisible(false);
//                 navigation.navigate('HomePasswordScreen');
//               }}>
//               <Text style={style.textStyle}>OK</Text>
//             </Pressable>
//           </LinearGradient>
//         </View>
//       </Modal>
//     </>
//   );
// }

// const HEIGHT = Dimensions.get('screen').height;
// const WIDTH = Dimensions.get('screen').width;
// const style = StyleSheet.create({
//   ovs: {
//     height: HEIGHT,
//     width: WIDTH,
//   },
//   modalView: {
//     width: '90%',
//     height: 200,
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 15,
//     elevation: 2,
//     marginTop: '5%',
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
// });
