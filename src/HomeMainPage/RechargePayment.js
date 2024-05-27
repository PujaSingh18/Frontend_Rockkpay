/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale
} from 'react-native-size-matters';
import { arrInfo } from './../Util/Array';

export default function RechargePayment() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '94%',
        alignSelf: 'center',
        marginTop: moderateScale(10),
        marginLeft:moderateScale(-20)
      }}>
      {arrInfo.map((item, index) => (
        <Pressable
        onPress={()=>{
            navigation.navigate(`${item?.path}`)
            {
              item.path=="HomeMPMain" && setModalVisible(true)
            }
        }}
          style={{
            marginLeft: moderateScale(16),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          key={index}>
          {item.img}
          <Text style={{fontSize:12, fontWeight:'bold', color:'white', marginTop:'-40%'}}>{item.title}</Text>
          <Text style={{fontSize:12, fontWeight:'bold', color:'white'}}>{item.subtitle}</Text>
        </Pressable>
      ))}
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.modalText}>CommingSoon</Text>
            <Pressable
              style={[Styles.button, Styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={Styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const Styles = StyleSheet.create({
  modalView: {
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
    padding: 10,
    elevation: 2,
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
})
