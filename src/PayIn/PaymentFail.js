import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function PaymentFail() {
  const navigation = useNavigation();
  const route = useRoute();
  const {mobileNumber, userName} = route.params;
  return (
    <>
      <LinearGradient colors={['#5A4FCF', '#C6BCFF']} style={styles.pd}>
        <Image
          source={require('../images/failed.png')}
          style={{
            width: 220,
            height: 220,
            borderRadius: 80,
            alignSelf: 'center',
            marginTop: '20%',
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 24,
              alignSelf: 'center',
            }}>
            Payment Failed
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
            }}>
            Please try again later.
          </Text>
        </View>
        <Pressable
        onPress={()=>{
          navigation.navigate('HomeMainScreen', {mobileNumber, userName});

        }}
          style={{
            width: '94%',
            height: 50,
            borderRadius: 20,
            //borderWidth: 1,
            backgroundColor: '#6633CC',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10%',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
            OK
          </Text>
        </Pressable>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  pd: {
    width: '100%',
    height: '100%',
  },
});
