import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PayInHeader from './PayInHeader';
import PayInScreen from './PayInScreen';

export default function PayInMain() {
  return (
    // <View style={styles.pim}>
    <LinearGradient
    colors={['#5A4FCF','#C6BCFF']}
    style={styles.pim}>
        <PayInHeader/>
        <ScrollView>
        <PayInScreen/>
        </ScrollView>
    </LinearGradient>
  )
}

const styles=StyleSheet.create({
    pim:{
        width:'100%',
        height:'100%',
        //backgroundColor:'#C6BCFF',
    },
    button:{
      width:'90%',
      height:40,
      backgroundColor:'#6633CC',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      marginTop:'100%',
      marginLeft:'5%',
    }
});