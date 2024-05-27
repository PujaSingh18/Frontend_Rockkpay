import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BackArrowBlack from '../SVGComponent/BackArrowBlack';

export default function WalletMain({navigation}) {
  return (
    <>
    <View style={styles.wm}>
        <Pressable onPress={() => {
            navigation.navigate('HomeMainScreen');
        }}>
        <BackArrowBlack style={{marginTop:'3%'}}/>
        </Pressable>
        <View style={styles.centerSection}>
        <Text style={{color: '#000', fontSize: 20, fontWeight: 700}}>
            Enter Pay Out Details
        </Text>
        <Text
            style={{color: '#000', fontSize: 12, fontWeight: 400, marginTop: 20}}>
            Send rewards with no hidden charges!
        </Text>
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Bank Account Number"
        />
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Re-Enter Bank Account Number"
        />
        <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Account Holder’s Name"
        />
        </View>
        <Pressable
            onPress={() => {
            navigation.navigate('WalletScreen');
        }}
        style={{
            width: '90%',
            height: 50,
            borderRadius: 40,
            backgroundColor: '#CD5C5C',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom:30,
            marginLeft:18
        }}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 500}}>
            Continue
        </Text>
        </Pressable>
    </View>
    </>
  )
}


const styles=StyleSheet.create({
    wm:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFE7C1',
        flex:1,
    },
    centerSection: {
        width: '100%',
        padding: 20,
        flex: 8,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        marginTop: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
});