/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { ArrUP } from '../Util/Array';

export default function UtilityPayments() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

return (
<>
<View style={styles.container}>
    {ArrUP.map((item, index) => (
        <Pressable
        onPress={()=>{
            navigation.navigate(item?.path);
        {
            item.path=="HomeMainScreen" && setModalVisible(true)
        }
        }}
            style={{
                marginLeft: moderateScale(8),
                alignItems: 'center',
                justifyContent:'space-between'
            }}
            key={index}>
        {item.img}
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
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>CommingSoon</Text>
            <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>OK</Text>
            </Pressable>
        </View>
    </View>
</Modal>
</>
);
}

const styles = StyleSheet.create({
container: {
    width:'100%',
    flexDirection:'row',
    flexWrap:"wrap",
    justifyContent:'space-between',
    padding: 10,
    rowGap:25,
    height:'auto',
},
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
}
});
