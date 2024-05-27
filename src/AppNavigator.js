/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// Component Imports
import AboutMain from './Component/AboutRockkpay/AboutMain';
import ChangeMpinOldMain from './Component/ChangeM-PIN/ChangeMpinOldMain';
import ChangeMpinVerifyMain from './Component/ChangeM-PIN/ChangeMpinVerifyMain';
import EditDetailsMain from './Component/EditDetails/EditDetailsMain';
import ThemeMain from './Component/Themes/ThemeMain';
import UserProfileMain from './Component/UserProfile/UserProfileMain';

// HomeMainPage Imports
import HomeMPMain from './HomeMainPage/HomeMPMain';

// HomeScreenPayoutFlow Imports
import HomeMainScreen from './HomeScreenPayoutFlow/HomeMainScreen';

// LoginScreen Imports
import LoginUserScreen from './LoginScreen/LoginUserScreen';
import MainLoginScreen from './LoginScreen/MainLoginScreen';
import OTPVerificationScreen from './LoginScreen/OTPVerificationScreen';

// MPINPassword Imports
import HomePasswordScreen from './MPINPassword/HomePasswordScreen';
import MPinMain from './MPINPassword/MPinMain';

// PayIn Imports
import PayInMain from './PayIn/PayInMain';
import PaymentFail from './PayIn/PaymentFail';
import PaymentSuccess from './PayIn/PaymentSuccess';

// Profile Imports
import ProfileMain from './Profile/ProfileMain';

// Splash Imports
import Splash from './Splash';

// TransactionHistory Imports
import TransactionHistoryMain from './TransactionHistory/TransactionHistoryMain';

// Wallet Imports
import WalletMain from './Wallet/WalletMain';
import WalletScreen from './Wallet/WalletScreen';

const Stack = createStackNavigator();

// const [nav,setNav] = useState(false)
// if(userName && mobileNumber){
//  linking.boolean == true;
// }
const linking = {
    // boolean: false,
    prefixes: ['rockkpay://'], // Your URL scheme
    config: {
      screens: {
        PayInMain: 'deepLink', // Path to match in the deep link
      },
    },
  };

export default function  AppNavigator() {
    return (
    <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
            component={Splash}
            name="splash"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={MainLoginScreen}
            name="MainLoginScreen"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={LoginUserScreen}
            name="LoginUserScreen"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={OTPVerificationScreen}
            name="OTPVerificationScreen"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={HomeMainScreen}
            name="HomeMainScreen"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={TransactionHistoryMain}
            name="TransactionHistoryMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={WalletMain}
            name="WalletMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={WalletScreen}
            name="WalletScreen"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={HomeMPMain}
            name="HomeMPMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={ProfileMain}
            name="ProfileMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={PayInMain}
            name="PayInMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={PaymentSuccess}
            name="PaymentSuccess"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={PaymentFail}
            name="PaymentFail"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={ThemeMain}
            name="ThemeMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={AboutMain}
            name="AboutMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={UserProfileMain}
            name="UserProfileMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={MPinMain}
            name="MPinMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={EditDetailsMain}
            name="EditDetailsMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={HomePasswordScreen}
            name="HomePasswordScreen"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={ChangeMpinOldMain}
            name="ChangeMpinOldMain"
            options={{headerShown: false}}
        />
        <Stack.Screen
            component={ChangeMpinVerifyMain}
            name="ChangeMpinVerifyMain"
            options={{headerShown: false}}
        />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
