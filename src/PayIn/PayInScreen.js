// import { useNavigation } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Pressable, Text, View } from 'react-native';
import EasebuzzCheckout from 'react-native-easebuzz-kit';
const PayInScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {userMobile, userName} = route.params;
  const [txnId, setTxnId] = useState('ROCKKPAY' + new Date().getTime());
  const [amount, setAmount] = useState('');
  const [productInfo, setProductInfo] = useState('Rockkpay');
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState('edsomfintech@gmail.com');
  const [surl, setSurl] = useState('https://edsomfintech.com');
  const [furl, setFurl] = useState('https://edsomfintech.com');
  const [udf1, setUdf1] = useState('');
  const [udf2, setUdf2] = useState('');
  useEffect(() => {
    // Extract amount from deep link parameters
    const { amount: deepLinkAmount, udf1: retailerEmail, udf2: retailerMobile } = route.params;
    // console.log(route.params, "Deep link amount");
    // console.log(, "Deep link retailerEmail");
    // console.log(amount, "Deep link retailerMobile");
    if (deepLinkAmount) {
      setAmount(deepLinkAmount);
      setUdf1(route.params.retailerEmail);
      setUdf2(route.params.retailerMobile);
      setFirstName(route.params.userName);
      setPhone(route.params.userMobile);
      
    }
  }, [amount]);
  // console.log(udf1, "Deep link amount after setting");
  // console.log(firstName, "firstName after setting");
  // console.log(phone, "PHONEEEE after setting");
  // console.log(udf1, "mail after setting");

  // useEffect(() => {
  //   const { amount } = route.params ?? {};
  //   if (amount) {
  //     setAmount(amount);
  //   } else {
  //     console.warn('Amount parameter is missing or undefined');
  //   }
  // }, []);
  const callPaymentGateway = async () => {
    try {
      const response = await axios.post(
        // 'http://192.168.1.39:5000/initiate-payment',
        'https://ipaisa.co.in/initiate-payment',
        {
          txnid: txnId,
          amount: amount,
          productinfo: productInfo,
          firstname: firstName,
          phone: phone,
          email: email,
          surl: surl,
          furl: furl,
          // udf1 : udf1,
          // udf2 : udf2,
        }
      );
      const accessKey = response.data.data;
      const options = {
        access_key: accessKey,
        pay_mode: 'production', // Set to 'production' for live transactions
      };
      EasebuzzCheckout.open(options)
        .then(async (data) => {
          console.log('Payment Response:', data);
          const paymentResponse = data.payment_response; // Extract payment response
          const paymentStatus = data.result; // Extract payment status
          // Save the entire payment response to the database
          try {
            await axios.post('http://192.168.1.39:5000/api/save', {
              payment_response: paymentResponse,
              result: paymentStatus
            });
            // Navigate based on the resultHome
          } catch (dbError) {
            console.error('Error saving payment transaction:', dbError);
            Alert.alert(
              'Error',
              'An error occurred while saving the payment transaction.'
            );
          }
        })
        .catch((sdkError) => {
          console.error('SDK Error:', sdkError);
          Alert.alert(
            'Error',
            'An error occurred while processing payment. Please try again later.'
          );
        });
    } catch (error) {
      console.error('Error initiating payment:', error);
      Alert.alert(
        'Error',
        'An error occurred while initiating payment. Please try again later.',
      );
    }
  };
  return (
    <View>
      <Image
        source={require('../images/puja.png')}
        style={{
          width: 120,
          height: 120,
          backgroundColor: 'white',
          borderRadius: 80,
          alignSelf: 'center',
          marginTop: '20%',
        }}
      />
      {/* <TextInput
        style={{
          alignSelf: 'center',
          marginTop: '10%',
          fontSize: 15,
          fontWeight: 'bold',
          marginLeft: '1%',
          borderRadius: 10,
          borderWidth: 1,
          width: '94%',
          height: 50,
          paddingLeft:15
        }}
        placeholder="Enter Amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      /> */}
      <Pressable onPress={callPaymentGateway}
        style={{
          width: '94%',
          height: 50,
          borderRadius: 20,
          backgroundColor: '#6633CC',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:'10%',
          alignSelf:'center'
        }}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>PAY - ₹ {amount} </Text>
      </Pressable>
    </View>
  );
};
export default PayInScreen;














// import { useNavigation, useRoute } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
// import EasebuzzCheckout from 'react-native-easebuzz-kit';
// const PayInScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {mobileNumber, userName} = route.params;
//   // const mobileNumber = route.params?.mobileNumber;
//   // const userName = route.params?.userName;
//   const [txnId, setTxnId] = useState('IPAISA' + new Date().getTime());
//   const [amount, setAmount] = useState('');
//   const [productInfo, setProductInfo] = useState('Rockkpay');
//   const [firstName, setFirstName] = useState(userName);
//   const [phone, setPhone] = useState(mobileNumber);
//   const [email, setEmail] = useState('edsomfintech@gmail.com');
//   const [surl, setSurl] = useState('https://edsomfintech.com');
//   const [furl, setFurl] = useState('https://edsomfintech.com');
  // const callPaymentGateway = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://192.168.1.39:5000/initiate-payment',
  //       {
  //         txnid: txnId,
  //         amount: amount,
  //         productinfo: productInfo,
  //         firstname: firstName,
  //         phone: phone,
  //         email: email,
  //         surl: surl,
  //         furl: furl,
  //       }
  //     );
  //     const accessKey = response.data.data;
  //     const options = {
  //       access_key: accessKey,
  //       pay_mode: 'production', // Set to 'production' for live transactions
  //     };
  //     EasebuzzCheckout.open(options)
  //       .then(async (data) => {
  //         console.log('Payment Response:', data);
  //         const paymentResponse = data.payment_response; // Extract payment response
  //         const paymentStatus = data.result; // Extract payment status
  //         // Save the entire payment response to the database
  //         try {
  //           await axios.post('http://192.168.1.39:5000/api/save', {
  //             payment_response: paymentResponse,
  //             result: paymentStatus
  //           });
  //           // Navigate based on the result
  //           if (paymentStatus === 'payment_successfull') {
  //             navigation.navigate('PaymentSuccess', {mobileNumber, userName});
  //           } else if (paymentStatus === 'user_cancelled' || paymentStatus === 'error_noretry' || paymentStatus === 'payment_failed') {
  //             navigation.navigate('PaymentFail', {mobileNumber, userName});
  //           }
  //         } catch (dbError) {
  //           console.error('Error saving payment transaction:', dbError);
  //           Alert.alert(
  //             'Error',
  //             'An error occurred while saving the payment transaction.'
  //           );
  //         }
  //       })
  //       .catch((sdkError) => {
  //         console.error('SDK Error:', sdkError);
  //         Alert.alert(
  //           'Error',
  //           'An error occurred while processing payment. Please try again later.'
  //         );
  //       });
  //   } catch (error) {
  //     console.error('Error initiating payment:', error);
  //     Alert.alert(
  //       'Error',
  //       'An error occurred while initiating payment. Please try again later.',
  //     );
  //   }
  // };
//   return (
//     <View>
//       <Image
//         source={require('../images/puja.png')}
//         style={{
//           width: 120,
//           height: 120,
//           backgroundColor: 'white',
//           borderRadius: 80,
//           alignSelf: 'center',
//           marginTop: '20%',
//         }}
//       />
//       <TextInput
//         style={{
//           alignSelf: 'center',
//           marginTop: '10%',
//           fontSize: 15,
//           fontWeight: 'bold',
//           marginLeft: '1%',
//           borderRadius: 10,
//           borderWidth: 1,
//           width: '94%',
//           height: 50,
//           paddingLeft: 15,
//         }}
//         placeholder="Enter Amount"
//         value={amount}
//         keyboardType="numeric"
//         onChangeText={setAmount}
//       />
//       <Pressable
//         onPress={callPaymentGateway}
//         style={{
//           width: '94%',
//           height: 50,
//           borderRadius: 20,
//           backgroundColor: '#6633CC',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginTop: '10%',
//           alignSelf: 'center',
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: 'bold',
//             color: 'white',
//           }}
//         >
//           ADD MONEY
//         </Text>
//       </Pressable>
//     </View>
//   );
// };
// export default PayInScreen;







// import { useNavigation, useRoute } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
// import EasebuzzCheckout from 'react-native-easebuzz-kit';
// const PayInScreen = () => {
//   const navigation = useNavigation();
  // const route = useRoute();
  // const {mobileNumber, userName} = route.params;
//   console.log(route.params);

//   const [txnId, setTxnId] = useState('ROCKKPAY' + new Date().getTime());
//   const [amount, setAmount] = useState('');
//   const [productInfo, setProductInfo] = useState('Rockkpay');
//   const [firstName, setFirstName] = useState(userName);
//   const [phone, setPhone] = useState(mobileNumber);
//   const [email, setEmail] = useState('edsomfintech123@gmail.com');
//   const [surl, setSurl] = useState('https://edsomfintech.com');
//   const [furl, setFurl] = useState('https://edsomfintech.com');
//   // useEffect(() => {
//   //   const { amount } = route.params ?? {};
//   //   if (amount) {
//   //     setAmount(amount);
//   //   } else {
//   //     console.warn('Amount parameter is missing or undefined');
//   //   }
//   // }, []);
//   const callPaymentGateway = async () => {
//     try {
//       const response = await axios.post(
//         'https://api.ipaisa.site/initiate-payment',
//         {
//           txnid: txnId,
//           amount: amount,
//           productinfo: productInfo,
//           firstname: firstName,
//           phone: phone,
//           email: email,
//           surl: surl,
//           furl: furl,
//         }
//       );
//       const accessKey = response.data.data;
//       const options = {
//         access_key: accessKey,
//         pay_mode: 'production', // Set to 'production' for live transactions
//       };
//       EasebuzzCheckout.open(options)
//         .then(async (data) => {
//           console.log('Payment Response:', data);
//           const paymentResponse = data.payment_response; // Extract payment response
//           const paymentStatus = data.result; // Extract payment status
//           // Save the entire payment response to the database
//           try {
//             await axios.post('http://192.168.216.105:5000/api/save', {
//               payment_response: paymentResponse,
//               result: paymentStatus
//             });
//             // Navigate based on the result
//             if (paymentStatus === 'payment_successfull') {
//               navigation.navigate('PaymentSuccess', {mobileNumber, userName});
//             } else if (paymentStatus === 'user_cancelled' || paymentStatus === 'error_noretry' || paymentStatus === 'payment_failed') {
//               navigation.navigate('PaymentFail', {mobileNumber, userName});
//             }
//           } catch (dbError) {
//             console.error('Error saving payment transaction:', dbError);
//             Alert.alert(
//               'Error',
//               'An error occurred while saving the payment transaction.'
//             );
//           }
//         })
//         .catch((sdkError) => {
//           console.error('SDK Error:', sdkError);
//           Alert.alert(
//             'Error',
//             'An error occurred while processing payment. Please try again later.'
//           );
//         });
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//       Alert.alert(
//         'Error',
//         'An error occurred while initiating payment. Please try again later.',
//       );
//     }
//   };
//   return (
//     <View>
//       <Image
//         source={require('../images/puja.png')}
//         style={{
//           width: 120,
//           height: 120,
//           backgroundColor: 'white',
//           borderRadius: 80,
//           alignSelf: 'center',
//           marginTop: '20%',
//         }}
//       />
//       <TextInput
//         style={{
//           alignSelf: 'center',
//           marginTop: '10%',
//           fontSize: 15,
//           fontWeight: 'bold',
//           marginLeft: '1%',
//           borderRadius: 10,
//           borderWidth: 1,
//           width: '94%',
//           height: 50,
//           paddingLeft: 15,
//         }}
//         placeholder="Enter Amount"
//         value={amount}
//         keyboardType="numeric"
//         onChangeText={setAmount}
//       />
//       <Pressable
//         onPress={callPaymentGateway}
//         style={{
//           width: '94%',
//           height: 50,
//           borderRadius: 20,
//           backgroundColor: '#6633CC',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginTop: '10%',
//           alignSelf: 'center',
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: 'bold',
//             color: 'white',
//           }}
//         >
//           ADD MONEY
//         </Text>
//       </Pressable>
//     </View>
//   );
// };
// export default PayInScreen;









// // import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
// import EasebuzzCheckout from 'react-native-easebuzz-kit';
// const PayInScreen = () => {
//   const navigation = useNavigation();
//   //const route = useRoute();
//   //const {mobileNumber, userName} = route.params;
//   const [txnId, setTxnId] = useState('IPAISA' + new Date().getTime());
//   const [amount, setAmount] = useState('');
//   const [productInfo, setProductInfo] = useState('Rockkpay');
//   const [firstName, setFirstName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('edsomfintech@gmail.com');
//   const [surl, setSurl] = useState('https://edsomfintech.com');
//   const [furl, setFurl] = useState('https://edsomfintech.com');
//   useEffect(() => {
//     // Extract amount from deep link parameters
//     const { amount: deepLinkAmount } = route.params;
//     if (deepLinkAmount) {
//       setAmount(deepLinkAmount);
//     }
//   }, []);
//   const callPaymentGateway = async () => {
//     try {
//       // Make a POST request to the backend API to initiate payment
//       const response = await axios.post(
//         'https://api.ipaisa.site/initiate-payment',
//         {
//           txnid: txnId,
//           amount: amount,
//           productinfo: productInfo,
//           firstname: firstName,
//           phone: phone,
//           email: email,
//           surl: surl,
//           furl: furl,
//         },
//       );
//       // Extract access key from the response directly
//       const accessKey = response.data.data;
//       // Define payment options
//       const options = {
//         access_key: accessKey,
//         pay_mode: 'production', // Set to 'production' for live transactions
//       };
//       // Open Easebuzz payment gateway
//       EasebuzzCheckout.open(options)
//         .then(data => {
//           // Handle payment response
//           console.log('Payment Response:');
//           if(response.success){
//               // navigation.navigate(PaymentSuccess);
//               console.log(data);
//           }
//           else{
//             // navigation.navigate(PaymentFail);
//             // console.log(response.fail);
//             console.log(data);
//           }
//           console.log(data);
//           // Handle payment success or failure here
//         })
//         .catch(error => {
//           // Handle SDK failure
//           console.log('SDK Error:');
//           console.log(error);
//         });
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//       // Handle error
//       Alert.alert(
//         'Error',
//         'An error occurred while initiating payment. Please try again later.',
//       );
//     }
//   };
//   return (
//     <View>
//       <Image
//         source={require('../images/puja.png')}
//         style={{
//           width: 120,
//           height: 120,
//           backgroundColor: 'white',
//           borderRadius: 80,
//           alignSelf: 'center',
//           marginTop: '20%',
//         }}
//       />
//       <TextInput
//         style={{
//           alignSelf: 'center',
//           marginTop: '10%',
//           fontSize: 15,
//           fontWeight: 'bold',
//           marginLeft: '1%',
//           borderRadius: 10,
//           borderWidth: 1,
//           width: '94%',
//           height: 50,
//           paddingLeft:15
//         }}
//         placeholder="Enter Amount"
//         value={amount}
//         keyboardType="numeric"
//         onChangeText={setAmount}
//       />
//       <Pressable onPress={callPaymentGateway}
//         style={{
//           width: '94%',
//           height: 50,
//           borderRadius: 20,
//           backgroundColor: '#6633CC',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginTop:'10%',
//           alignSelf:'center'
//         }}>
//         <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>ADD MONEY</Text>
//       </Pressable>
//     </View>
//   );
// };
// export default PayInScreen;





// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import {
//   Alert,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import EasebuzzCheckout from 'react-native-easebuzz-kit';

// const PayInScreen = () => {
//   const navigation = useNavigation();

//   const [paymentData, setPaymentData] = useState({
//     txnid: 'ROCKKPAY' + new Date().getTime(),
//     amount: '', // base amount entered by the user
//     productinfo: 'ROCKKPAY',
//     firstname: 'Edsom',
//     phone: '8788286618',
//   });

//   const [mode, setMode] = useState('percentage');
//   const [percentage, setPercentage] = useState('');
//   const [amountNumber, setAmountNumber] = useState('');
//   const [calculatedAmount, setCalculatedAmount] = useState(0);

//   const callPaymentGateway = async () => {
//     try {
//         // Extract values from paymentData
//         const { txnid, productinfo, firstname, phone } = paymentData;
//         const amount = calculatedAmount.toString(); // Use the calculated amount
//       // Make a POST request to the backend API to initiate payment
//       const response = await axios.post(
//         'https://api.ipaisa.site/initiate-payment',
//         {
//           txnid: txnid,
//           amount: amount,
//           productinfo: productInfo,
//           firstname: firstName,
//           phone: phone,
//         },
//       );
//       // Extract access key from the response directly
//       const accessKey = response.data.data;
//       // Define payment options
//       const options = {
//         access_key: accessKey,
//         pay_mode: 'production', // Set to 'production' for live transactions
//       };
//       // Open Easebuzz payment gateway
//       EasebuzzCheckout.open(options)
//         .then(data => {
//           // Handle payment response
//           console.log('Payment Response:');
//           if (response.success) {
//             // navigation.navigate(PaymentSuccess);
//             console.log(data);
//           } else {
//             // navigation.navigate(PaymentFail);
//             // console.log(response.fail);
//             console.log(data);
//           }
//           console.log(data);
//           // Handle payment success or failure here
//         })
//         .catch(error => {
//           // Handle SDK failure
//           console.log('SDK Error:');
//           console.log(error);
//         });
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//       // Handle error
//       Alert.alert(
//         'Error',
//         'An error occurred while initiating payment. Please try again later.',
//       );
//     }
//   };

//   const handleChange = (name, value) => {
//     setPaymentData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleModeChange = newMode => {
//     setMode(newMode);
//   };

//   const handleAmountChange = value => {
//     const newValue = parseFloat(value);
//     setPaymentData(prevState => ({
//       ...prevState,
//       amount: newValue,
//     }));
//     updateCalculatedAmount(newValue);
//   };

//   const updateCalculatedAmount = baseAmount => {
//     if (mode === 'percentage') {
//       const percentageValue = parseFloat(percentage) || 0;
//       const extra = (baseAmount * percentageValue) / 100;
//       setCalculatedAmount(baseAmount + extra);
//     } else if (mode === 'number') {
//       const extra = parseFloat(amountNumber) || 0;
//       setCalculatedAmount(baseAmount + extra);
//     }
//   };

//   useEffect(() => {
//     // Recalculate when mode, percentage, or extra rupees changes
//     updateCalculatedAmount(paymentData.amount);
//   }, [mode, percentage, amountNumber]);

//   return (
//     <View>
//       <View style={styles.a}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'flex-start',
//             alignSelf: 'flex-start',
//             gap: 15,
//             width: '100%',
//             borderBottomColor: 'black',
//             borderBottomWidth: 1,
//             marginTop: '5%',
//           }}>
//           <Image
//             source={require('../images/puja.png')}
//             style={{
//               width: 50,
//               height: 50,
//               backgroundColor: 'white',
//               borderRadius: 80,
//               alignSelf: 'flex-start',
//               justifyContent: 'flex-start',
//               marginTop: '2%',
//               marginLeft: '2%',
//             }}
//           />
//           <TextInput
//             placeholder="Transaction ID"
//             value={paymentData.txnid}
//             style={{
//               width: '70%',
//               borderWidth: 1,
//               borderColor: 'lightgray',
//               padding: 10,
//               borderRadius: 5,
//               marginVertical: 10,
//             }}
//             onChangeText={value => handleChange('txnid', value)}
//           />
//         </View>

//         <TextInput
//           placeholder="Amount"
//           value={paymentData.amount}
//           style={styles.input}
//           keyboardType="numeric"
//           onChangeText={handleAmountChange}
//         />
//         <TextInput
//           placeholder="productinfo"
//           value={paymentData.productinfo}
//           style={styles.input}
//           onChangeText={value => handleChange('productinfo', value)}
//         />
//         <TextInput
//           placeholder="firstname"
//           value={paymentData.firstname}
//           style={styles.input}
//           onChangeText={value => handleChange('firstname', value)}
//         />
//         <TextInput
//           placeholder="phone"
//           value={paymentData.phone}
//           style={styles.input}
//           onChangeText={value => handleChange('phone', value)}
//         />
//         <Picker
//           selectedValue={mode}
//           style={styles.picker}
//           onValueChange={handleModeChange}>
//           <Picker.Item label="Percentage" value="percentage" />
//           <Picker.Item label="Rupees" value="number" />
//         </Picker>

//         {mode === 'percentage' && (
//           <TextInput
//             placeholder="Percentage (%)"
//             value={percentage}
//             style={styles.input}
//             keyboardType="numeric"
//             onChangeText={value => setPercentage(value)}
//           />
//         )}

//         {mode === 'number' && (
//           <TextInput
//             placeholder="Additional Rupees"
//             style={styles.input}
//             value={amountNumber}
//             keyboardType="numeric"
//             onChangeText={value => setAmountNumber(value)}
//           />
//         )}

//         <TextInput
//           placeholder="Total Amount"
//           value={calculatedAmount.toString()}
//           style={{
//             width: '80%',
//             height: 50,
//             borderRadius: 8,
//             borderWidth: 1,
//             borderColor: 'lightgray',
//             padding: 10,
//             borderColor: 'lightgray',
//             borderRadius: 5,
//           }}
//           editable={false} // The total amount should not be manually edited
//         />
//       </View>

//       <Pressable
//         onPress={callPaymentGateway}
//         style={{
//           width: '94%',
//           height: 50,
//           borderRadius: 20,
//           backgroundColor: '#6633CC',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginTop: '5%',
//           alignSelf: 'center',
//         }}>
//         <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
//           PAY NOW
//         </Text>
//       </Pressable>
//     </View>
//   );
// };
// export default PayInScreen;

// const styles = StyleSheet.create({
//   a: {
//     width: '94%',
//     height: 580,
//     borderRadius: 10,
//     borderWidth: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: '3%',
//     alignSelf: 'center',
//     borderColor: 'lightgray',
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   picker: {
//     width: '80%',
//     height: 50,
//     borderColor: 'lightgray',
//     borderRadius: 5,
//     marginBottom: 20,
//   },
// });
