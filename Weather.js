import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Weather({ cityName, temprature, icon, condition }) {
    console.log("Icon "+icon)

    return <>

        <LinearGradient
            colors={['#83a4d4', '#b6fbff']}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.topView}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                    }}
                />
                
                <Text style={styles.text}>
                    {Math.round(temprature)}°
                </Text>
            </View>

            <View style={styles.bottomView}>
                <Text style={styles.text}>
                    {cityName}
                </Text>
                <Text style={styles.text}>
                    {condition}
                </Text>
            </View>
        </LinearGradient>
    </>
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

        //backgroundColor: "#FDF6AA"
    },

    gradient: {
        flex: 1,
    },
    logo:{
        width:200,
        height:200,
    },

    text: {
        paddingTop: 15,
        //backgroundColor:"orange",
        fontSize: 40,
        color: "white",

    },
    gradient: {
        flex: 1,
    },

    topView: {
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"blue",
        flex: 1,
    },
    bottomView: {
        flex: 1,
        //backgroundColor:"red",
        alignItems: "center",
        justifyContent: "flex-start",
    }

})