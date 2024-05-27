import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AddComponent from '../../SVGComponent/AddComponent';
import EditComponent from '../../SVGComponent/EditComponent';
import PhoneComponent from '../../SVGComponent/PhoneComponent';
import VerifyComponent from '../../SVGComponent/Verifycomponent';

export default function UserProfileScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.ups}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: '3%',
            marginTop: '3%',
          }}>
          Personal Details
        </Text>
        <Pressable style={{marginLeft: '42%', marginTop:'2%'}} onPress={()=>{
          navigation.navigate('EditDetailsMain');
        }}>
            <EditComponent/>
        </Pressable>
        <View style={{marginTop: '2%', marginRight: '3%'}}></View>
      </View>
      <View style={styles.head}>
        <Text style={{fontSize: 22, fontWeight: '500', color: 'white'}}>
          Pooja Singh
        </Text>
        <PhoneComponent style={{marginLeft: '-3%'}} />
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            marginLeft: '7%',
            marginTop: '-8%',
          }}>
          9876543212
        </Text>
      </View>
      <View style={styles.upsh}>
        <Text style={{fontSize: 15, color: 'white'}}>
          pujaedsomfintech@gmail.com
        </Text>
      </View>
      <View style={{marginLeft: '80%', marginTop: '-18%'}}>
        <VerifyComponent />
      </View>

      <View style={styles.ups1}>
        <View
          style={{flexDirection: 'row', marginTop: '10%', marginLeft: '5%'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
            Add New Address
          </Text>
        </View>
        <View
          style={{
            justifyContent:'space-between',
            flexDirection:'column',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'gray',
            width: '35%',
            height: 80,
            marginTop: '2%',
            backgroundColor:'white',
            marginRight:'7%',
          }}>
            <AddComponent style={{marginTop:'6%', marginLeft:'20%', }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ups: {
    width: '98%',
    height: 170,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: '1%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#330066',
    backgroundColor:'#330066',
  },
  head: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: '-35%',
    marginLeft: '8%',
  },
  upsh: {
    width: '95%',
    height: 40,
    marginLeft: '8%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '8%',
  },
  ups1: {
    width: '98%',
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: '1%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#330066',
    marginTop: '6%',
    backgroundColor:'#330066'
  },
  map: {
    flex: 1,
},
});
