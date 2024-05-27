import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BackArrow from '../../SVGComponent/BackArrow';
import AboutScreen from './AboutScreen';

export default function AboutMain() {
    const navigation = useNavigation();
    return (
        <>
        <View style={styles.am}>
            <Pressable style={styles.heading} onPress={()=>{
                navigation.navigate('ProfileMain');
            }}>
                <BackArrow style={{marginTop:'5%', marginLeft:'3%'}}/>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:'4%', marginLeft:'10%'}}>Policies</Text>
            </Pressable>

            <AboutScreen/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    am:{
        width:'100%',
        height:'100%',
        backgroundColor:'#C6BCFF',
    },
    heading:{
        width:'100%',
        height:65,
        backgroundColor:'#6633CC',
        justifyContent:'flex-start',
        flexDirection:'row',
    }
});