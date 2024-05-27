import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import BackArrow from '../SVGComponent/BackArrow';

export default function ProfileHeader() {
  const navigation = useNavigation();
  return (
    <>
    <Pressable
      onPress={() => {
            navigation.navigate('HomeMainScreen');
          }} style={styles.ph}>
      <View style={{marginLeft:10, flexDirection:'row', gap:15, alignItems:'center'}}>
        <BackArrow style={{marginTop:20}}/>
        <Text style={{fontSize:15, fontWeight:'bold', color:'white', marginTop:20}}>User Profile</Text>
      </View>
    </Pressable>
    </>
  )
}


const styles=StyleSheet.create({
    ph:{
        width:'100%',
        height:65,
        backgroundColor:'#6633CC',
    }
});