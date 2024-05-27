import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BackArrow from '../SVGComponent/BackArrow';
import PersonLogoComponent from '../SVGComponent/PersonLogoComponent';

export default function WalletScreen({navigation}) {
  return (
    <>
    <View style={styles.ws}>
    <Pressable onPress={() => {
            navigation.navigate('WalletMain');
        }}>
        <BackArrow style={{marginLeft:'15%'}}/>
    </Pressable>
    <Text  style={{fontSize:20, fontWeight:'bold', color:'white', marginLeft:'-5%', marginBottom:'1%'}}>Wallet</Text>
    </View>
    <View style={styles.amount}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <PersonLogoComponent/>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: '#000',
                    marginTop: 10,
                }}>
                Reubin
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: '#000',
                    marginTop: 10,
                }}>
                Pay Out
            </Text>
        </View>
        <View
            style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {/* <Image source={require(`../image/inr.png`)} style={{}} /> */}
            <TextInput
                placeholder="₹ 0"
                keyboardType="numeric"
                style={{height: 50}}
            />
        </View>
    </View>
    </>
  )
}


const styles=StyleSheet.create({
    ws:{
        width:'100%',
        height:70,
        backgroundColor:'#CD5C5C',
        flexDirection:'row',
        alignItems:'center'
    },
    amount: {
        width: '100%',
        height:'100%',
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
});