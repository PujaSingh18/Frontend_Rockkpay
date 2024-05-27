import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateVerticalScale } from 'react-native-size-matters';
import DHeader from './DHeader';
import FinancialServices from './FinancialServices';
import OthersServices from './OthersServices';
import RechargePayment from './RechargePayment';
import Utilities from './Utilities';

export default function HomeMPMain() {
  return (
    <>
    <View style={styles.hmpm}>
        <DHeader/>

    <ScrollView>
        <LinearGradient
        colors={['#5A4FCF','#C6BCFF']} // You can specify your gradient colors here
        style={styles.rp}>
        <Text
            style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
                marginTop: '3%',
                marginLeft: '3%',
            }}>
            Recharge Payment
        </Text>
        <RechargePayment/>
        </LinearGradient>

        <LinearGradient
        colors={['#5A4FCF','#C6BCFF']}
        style={styles.up}>
        <Text
            style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
                marginTop: '3%',
                marginLeft: '3%',
            }}>
            Utilities Payment
        </Text>
        <Utilities/>
        </LinearGradient>

        <LinearGradient
        colors={['#5A4FCF', '#C6BCFF']} // You can specify your gradient colors here
        style={styles.fs}>
        <Text
            style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
                marginTop: '3%',
                marginLeft: '3%',
            }}>
            Financial Services
        </Text>
        <FinancialServices/>
        </LinearGradient>

        <LinearGradient
        colors={['#5A4FCF', '#C6BCFF']} // You can specify your gradient colors here
        style={styles.os}>
        <Text
            style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'white',
                marginTop: '3%',
                marginLeft: '3%',
            }}>
            Others Services
        </Text>
        <OthersServices/>
        </LinearGradient>
        <View style={{marginTop:'10%'}}></View>
    </ScrollView>
    </View>
    </>
  )
}

const styles= StyleSheet.create({
    hmpm:{
        width:"100%",
        height:"100%",
        backgroundColor:"#C6BCFF",
        gap:10,
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        margin: 10,
        alignContent: 'center',
        borderRadius: 10,
    },
    rp:{
        width: '94%',
        height: 130,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#330066',
        marginTop: moderateVerticalScale(10),
    },
    up:{
        width: '94%',
        height: 220,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#330066',
        marginTop: moderateVerticalScale(10),
        backgroundColor:'#381483'
    },
    fs:{
        width: '94%',
        height: 130,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#330066',
        marginTop: moderateVerticalScale(10),
    },
    os:{
        width: '94%',
        height: 130,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#330066',
        marginTop: moderateVerticalScale(10),
    }
});