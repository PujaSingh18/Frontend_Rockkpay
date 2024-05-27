import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackArrow from '../../SVGComponent/BackArrow';

export default function ChangeMpinVerifyMain() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.mpin}>
      <Pressable style={styles.header} onPress={()=>{
        navigation.navigate('ChangeMpinOldMain');
      }}>
        <BackArrow style={{marginTop: '1%', marginLeft: '-2%'}} />
        <Text style={{fontSize: 18, fontWeight: '600', color: 'white'}}>
          Chnage M-PIN
        </Text>
      </Pressable>
      <View style={styles.main}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
            marginTop: '10%',
          }}>
          Enter a new 4 digit M-PIN
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            gap: 5,
          }}>
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
            marginTop: '10%',
          }}>
          Confirm your 4 digit M-PIN
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            gap: 5,
          }}>
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
            //value="abc"
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
            //value="abc"
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
            //value="abc"
          />
          <TextInput
            style={{
              width: 50,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              textAlign: 'center',
              borderColor: 'white',
            }}
            //placeholder="0"
            secureTextEntry={true}
            keyboardType="numeric"
            maxLength={1}
            //value="abc"
          />
        </View>
      </View>
      <Pressable style={styles.btn} onPress={()=> setModalVisible(true)} >
        <Text style={{fontSize:18, fontWeight:'600', color:'white'}}>Verify</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <LinearGradient colors={['#5A4FCF','#C6BCFF']} style={styles.modalView}>
            <Text style={styles.modalText}>Your PIN have {'\n'} been set successfully</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>{
                  setModalVisible(false);
                  navigation.navigate('ProfileMain')}}>
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mpin: {
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
    gap: 20,
  },
  main: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btn:{
    width:'96%',
    height:60,
    borderRadius:20,
    borderColor:'black',
    marginTop:'50%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6633CC',
    marginLeft:'2%'
  },
  modalView: {
    width:'90%',
    height:200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    marginTop:'5%'
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
