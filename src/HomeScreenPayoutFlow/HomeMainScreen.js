import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import EyeLogo from '../SVGComponent/EyeLogo';
import PersonImage from '../SVGComponent/PersonImage';
import SerachBar from '../SVGComponent/SearchBar';
import Wallet from '../SVGComponent/Wallet';
import HomePaymentModeScreen from './HomePaymentModeScreen';

export default function HomeMainScreen() {
  const navigation = useNavigation();

  const route = useRoute();
  const mobileNumber = route.params?.mobileNumber;
  const userName = route.params?.userName;
  const amount = route.params?.amount;
// asyncStorage.setName(userName);
// asyncStorage.setMobile(mobileNumber);
  return (
    <>
      <View style={style.hms}>
        <Image
          source={require('../images/wallet.jpg')}
          style={{width: '100%', height: 350}}
        />
        <Pressable onPress={()=>{
          navigation.navigate("ProfileMain");
        }}
          style={{
            marginTop: moderateVerticalScale(-310),
            marginLeft: moderateScale(20),
          }}>
          <PersonImage />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
              marginTop: moderateVerticalScale(-45),
              marginLeft: moderateScale(60),
            }}>
            {mobileNumber} {/* Display mobile number */}
          </Text>
          <Text style={{color: 'white', marginLeft: moderateScale(60)}}>
          {userName} {/* Display username */}
          </Text>
          <SerachBar
            style={{
              marginLeft: moderateVerticalScale(280),
              marginTop: moderateScale(-45),
            }}
          />
        </Pressable>
        <View
          style={{
            marginTop: moderateVerticalScale(50),
            marginLeft: moderateScale(40),
          }}>
          <Text style={{fontSize: 15, color: '#FFF6E9', fontWeight: 'bold'}}>
          {`Hello, ${userName}`} {/* Greet user with their username */}
          </Text>
          <Text style={{fontSize: 35, color: '#FFF6E9', fontWeight: 'bold'}}>
            ₹6,000.00
          </Text>
          <EyeLogo
            style={{
              marginLeft: moderateScale(185),
              marginTop: moderateVerticalScale(-35),
            }}
          />
          <Pressable onPress={() =>{
              navigation.navigate('WalletMain');
          }}>
          <Wallet style={{
              marginLeft: moderateScale(265),
              marginTop: moderateVerticalScale(-30),
            }}/>
          </Pressable>
        </View>
        <HomePaymentModeScreen/>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  hms: {
    width: '100%',
    height: 500
    //backgroundColor:'black'
  },
});
















// // import { useNavigation, useRoute } from '@react-navigation/native';
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native';
// // import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
// // import EyeLogo from '../SVGComponent/EyeLogo';
// // import PersonImage from '../SVGComponent/PersonImage';
// // import SerachBar from '../SVGComponent/SearchBar';
// // import Wallet from '../SVGComponent/Wallet';
// // import HomePaymentModeScreen from './HomePaymentModeScreen';

// // const HomeMainScreen = () => {
// //   const navigation = useNavigation();
// //   const route = useRoute();
// //   const { mobileNumber, userName } = route.params;

//   // const [balance, setBalance] = useState('');
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState('');

//   // // Fetch the user's balance
//   // useEffect(() => {
//   //   const fetchBalance = async () => {
//   //     try {
//   //       const response = await axios.get('http://192.168.233.246:5000/api/protected/appbalance', {
//   //         params: {
//   //           mobile_number: mobileNumber,
//   //           name: userName,
//   //         },
//   //       });

//   //       if (response.status === 200) {
//   //         setBalance(response.data.balance); // Update the balance state
//   //       } else {
//   //         setError('Failed to retrieve balance.');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error fetching balance:', error);
//   //       setError('An error occurred while fetching the balance.');
//   //     } finally {
//   //       setLoading(false); // Stop loading
//   //     }
//   //   };

//   //   fetchBalance(); // Trigger fetch when component mounts
//   // }, [mobileNumber, userName]); // Dependency array for `useEffect`

//   // if (loading) {
//   //   return (
//   //     <View style={styles.loadingContainer}>
//   //       <ActivityIndicator size="large" color="#0000ff" />
//   //     </View>
//   //   );
//   // }

//   // if (error) {
//   //   return (
//   //     <View style={styles.errorContainer}>
//   //       <Text style={styles.errorText}>{error}</Text>
//   //     </View>
//   //   );
//   // }

// //   return (
// //     <View style={styles.hms}>
// //       <Image
// //         source={require('../images/wallet.jpg')}
// //         style={{ width: '100%', height: 350 }}
// //       />
// //       <Pressable
// //         onPress={() => {
// //           navigation.navigate('ProfileMain');
// //         }}
// //         style={{
// //           marginTop: moderateVerticalScale(-310),
// //           marginLeft: moderateScale(20),
// //         }}
// //       >
// //         <PersonImage />
// //         <Text
// //           style={{
// //             fontSize: 15,
// //             fontWeight: 'bold',
// //             color: 'white',
// //             marginTop: moderateVerticalScale(-45),
// //             marginLeft: moderateScale(60),
// //           }}
// //         >
// //           {mobileNumber} {/* Display mobile number */}
// //         </Text>
// //         <Text style={{ color: 'white', marginLeft: moderateScale(60) }}>
// //            {userName} {/* Display username */}
// //         </Text>
// //         <SerachBar
// //           style={{
// //             marginLeft: moderateScale(280),
// //             marginTop: moderateVerticalScale(-45),
// //           }}
// //         />
// //       </Pressable>
// //       <View
// //         style={{
// //           marginTop: moderateVerticalScale(50),
// //           marginLeft: moderateScale(40),
// //         }}
// //       >
// //         <Text style={{ fontSize: 15, color: '#FFF6E9', fontWeight: 'bold' }}>
// //           {`Hello, ${userName}`} {/* Greet user with their username */}
// //         </Text>

// //         {/* Display the fetched balance */}
// //         <Text style={{ fontSize: 35, color: '#FFF6E9', fontWeight: 'bold' }}>
// //           {`₹${balance ?? '0.00'}`} {/* Fallback to 0.00 if balance is null */}
// //         </Text>

// //         <EyeLogo
// //           style={{
// //             marginLeft: moderateScale(185),
// //             marginTop: moderateVerticalScale(-35),
// //           }}
// //         />
// //         <Pressable
// //           onPress={() => {
// //             navigation.navigate('WalletMain');
// //           }}
// //         >
// //           <Wallet
// //             style={{
// //               marginLeft: moderateScale(265),
// //               marginTop: moderateVerticalScale(-30),
// //             }}
// //           />
// //         </Pressable>
// //       </View>
// //       <HomePaymentModeScreen />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   hms: {
// //     flex: 1,
// //     padding: 16,
// //   },
//   // loadingContainer: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//   // errorContainer: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   // },
//   // errorText: {
//   //   color: 'red',
//   //   fontSize: 16,
//   // },
// // });

// // export default HomeMainScreen;










// import { useNavigation, useRoute } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// import { ActivityIndicator } from 'react-native-paper';
// import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
// import EyeLogo from '../SVGComponent/EyeLogo';
// import PersonImage from '../SVGComponent/PersonImage';
// import SerachBar from '../SVGComponent/SearchBar';
// import Wallet from '../SVGComponent/Wallet';
// import HomePaymentModeScreen from './HomePaymentModeScreen';

// export default function HomeMainScreen() {
//   // const mobileNumber = '6386853730';
//   //   const userName = 'PoojaSingh';

//   //const route = useRoute();
//   const navigation = useNavigation();
//   const route = useRoute();
//   const {mobileNumber, userName} = route.params;

//   const [balance, setBalance] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//     // Fetch the user's balance
//     useEffect(() => {
//       const fetchBalance = async () => {
//         try {
//           const response = await axios.get('http://192.168.216.105:5000/api/protected/appbalance', {
//             params: {
//               mobile_number: mobileNumber,
//               name: userName,
//             },
//           });
  
//           if (response.status === 200) {
//             setBalance(response.data.balance); // Update the balance state
//           } else {
//             setError('Failed to retrieve balance.');
//           }
//         } catch (error) {
//           console.error('Error fetching balance:', error);
//           setError('An error occurred while fetching the balance.');
//         } finally {
//           setLoading(false); // Stop loading
//         }
//       };
  
//       fetchBalance(); // Trigger fetch when component mounts
//     }, [mobileNumber, userName]); //Dependency array for `useEffect`
  
//     if (loading) {
//       return (
//         <View style={style.loadingContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       );
//     }
  
//     if (error) {
//       return (
//         <View style={style.errorContainer}>
//           <Text style={style.errorText}>{error}</Text>
//         </View>
//       );
//     }

//   return (
//     <View style={style.hms}>
//       <Image
//         source={require('../images/wallet.jpg')}
//         style={{ width: '100%', height: 350 }}
//       />
//       <Pressable
//         onPress={() => {
//           navigation.navigate('ProfileMain');
//         }}
//         style={{
//           marginTop: moderateVerticalScale(-310),
//           marginLeft: moderateScale(20),
//         }}
//       >
//         <PersonImage />
//         <Text
//           style={{
//             fontSize: 15,
//             fontWeight: 'bold',
//             color: 'white',
//             marginTop: moderateVerticalScale(-45),
//             marginLeft: moderateScale(60),
//           }}
//         >
//           {mobileNumber} {/* Display mobile number */}
//         </Text>
//         <Text style={{ color: 'white', marginLeft: moderateScale(60) }}>
//            {userName} {/* Display username */}
//         </Text>
//         <SerachBar
//           style={{
//             marginLeft: moderateScale(280),
//             marginTop: moderateVerticalScale(-45),
//           }}
//         />
//       </Pressable>
//       <View
//         style={{
//           marginTop: moderateVerticalScale(50),
//           marginLeft: moderateScale(40),
//         }}
//       >
//         <Text style={{ fontSize: 15, color: '#FFF6E9', fontWeight: 'bold' }}>
//           {`Hello, ${userName}`} {/* Greet user with their username */}
//         </Text>
//         <Text style={{ fontSize: 35, color: '#FFF6E9', fontWeight: 'bold' }}>
//         {`₹${balance ?? '0.00'}`} {/* Fallback to 0.00 if balance is null */}
//         </Text>
//         <EyeLogo
//           style={{
//             marginLeft: moderateScale(185),
//             marginTop: moderateVerticalScale(-35),
//           }}
//         />
//         <Pressable
//           onPress={() => {
//             navigation.navigate('WalletMain');
//           }}
//         >
//           <Wallet
//             style={{
//               marginLeft: moderateScale(265),
//               marginTop: moderateVerticalScale(-30),
//             }}
//           />
//         </Pressable>
//       </View>
//       <HomePaymentModeScreen />
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   hms: {
//     width: '100%',
//     height: 500,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 16,
//   },
// });
