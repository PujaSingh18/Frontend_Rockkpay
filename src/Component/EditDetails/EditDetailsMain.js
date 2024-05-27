import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import BackArrow from '../../SVGComponent/BackArrow';
import EmailComponent from '../../SVGComponent/EmailComponent';
import UserComponent from '../../SVGComponent/UserComponent';


export default function EditDetailsMain() {
  const navigation = useNavigation();

  return (
    <View style={styles.edm}>
      <Pressable style={styles.header} onPress={()=>{
        navigation.navigate('UserProfileMain');
      }}>
        <BackArrow style={{marginTop: '2%'}} />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: '10%',
          }}>
          Edit Policies
        </Text>
      </Pressable>
      <View style={styles.edm1}>
        <UserComponent style={{marginTop: '2%'}} />
        <TextInput
          placeholder="Full Name"
          style={{marginTop: '-5%', fontSize: 15}}
        />
      </View>
      <View style={styles.edm2}>
        <EmailComponent style={{marginTop: '3%'}} />
        <TextInput
          placeholder="E-mail Address"
          style={{marginTop: '-5%', fontSize: 15}}
        />
      </View>
      <Pressable
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#6633CC',
          borderWidth: 1,
          alignSelf: 'center',
          alignItems: 'center',
          padding: 10,
          marginTop:'110%',
          borderColor:'#6633CC'
        }} onPress={()=>{
          navigation.navigate('UserProfileMain');
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          UPDATE CHANGES
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  edm: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C6BCFF',
  },
  header: {
    width: '100%',
    height: 65,
    backgroundColor: '#6633CC',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15,
  },
  edm1: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    marginTop: '2%',
    gap: 20,
    borderColor:'gray',
  },
  edm2: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    marginTop: '2%',
    gap: 20,
    borderColor:'gray',
  },
});
