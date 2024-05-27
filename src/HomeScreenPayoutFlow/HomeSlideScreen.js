import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Slick from 'react-native-slick';


export default function HomeSlideScreen() {
    const navigation = useNavigation();
  return (
    <>
    <View style={styles.hss}>
    <Slick style={{height:moderateScale(187)}} showsButtons={false} loop={true} autoplay={true}>

    <View style={styles.container}>
    <Image source={require('../images/Banner.jpg')} style={styles.img}/>
    </View>

    <View style={styles.container}>
    <Image source={require('../images/BillBanner.png')} style={styles.img}/>
    </View>

    <View style={styles.container}>
    <Image source={require('../images/UPIBanner.png')} style={styles.img}/>
    </View>

    </Slick>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    hss:{
        width:'100%',
        height:260,
        marginTop:moderateVerticalScale(20)
    },
    container: {
        padding: 25,
        width: '106%',
        flexDirection: 'row',
        alignSelf:'center',
        marginTop:moderateVerticalScale(15)
    },
    img:{
        width:'105.5%',
        height:moderateScale(180),
        marginTop:moderateScale(-30),
        borderWidth:2,
        borderRadius:20,
        marginLeft:moderateScale(-10)
    }
});