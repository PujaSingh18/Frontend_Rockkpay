import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AboutRockkpay from '../../SVGComponent/AboutRockkpay';
import PrivacyComponent from '../../SVGComponent/PrivacyComponent';
import RefundComponent from '../../SVGComponent/RefundComponent';
import TermComponent from '../../SVGComponent/TermComponent';

export default function AboutScreen() {
  return (
    <LinearGradient colors={['#5A4FCF', '#C6BCFF']} style={styles.as}>
      <View
        style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginTop: '5%',
          width: '92%',
          height: 50,
          gap: 10,
        }}>
        <AboutRockkpay />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginTop: '2%',
          }}>
          About RockkPay
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginTop: '4%',
          width: '92%',
          height: 50,
          gap: 20,
        }}>
        <PrivacyComponent style={{marginLeft:'3%'}}/>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginTop: '-1%',
          }}>
          Privacy Policy
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginTop: '4%',
          width: '92%',
          height: 50,
          gap: 20,
        }}>
        <RefundComponent style={{marginLeft:'2%'}}/>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginTop: '-1%',
          }}>
          Refund Policy
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginTop: '4%',
          width: '92%',
          height: 50,
          gap: 20,
        }}>
        <TermComponent style={{marginLeft:'2%'}}/>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            marginTop: '-1%',
          }}>
          Terms and Conditions
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  as: {
    width: '98%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: '5%',
    //backgroundColor: 'white',
    marginLeft: '1%',
    borderColor:'#330066',
  },
});
