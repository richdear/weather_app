import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

export default function Loading(){
    // const [coords,setCoords]=useState(null);
    // const [errorMsg, setErrorMsg]=useState(null);
    // const [message,setMessage]=useState("");

    // useEffect(()=>{
    //     (async()=>{
    //         let {status} = await Location.requestForegroundPermissionsAsync();
            
    //         console.log("Did user grant app to use location? "+status);
            
    //         if(status!="granted"){
    //             setErrorMsg('Permission to access Location was DENIED!');
    //         }

    //         let {coords}=await Location.getCurrentPositionAsync({});
    //         setCoords(coords)
    //         console.log(coords);
            
    //         axios.get("https://api.openweathermap.org/data/2.5/weather",{ params:{
    //             lat: coords.latitude,
    //             lon: coords.longitude,
    //             appid:"2f20ad4d2e6e64f6b66392a177db4382",
    //             units:'metric'
    //         }}).then(function (response){
    //             setMessage(response);
    //             console.log(response.data);
    //         }).catch(function (error){
    //             console.log(error);
    //         });


    //     })()
    // },[]);

    // let text="Waiting...";
    // if(errorMsg){
    //     text=errorMsg;
    // }else if(coords){
    //     text = JSON.stringify(coords);
    // }


    return <>
        <View style={styles.container}>
            <Text style={styles.text}>
              Waiting
            </Text>
        </View>
    </>
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal: 30,
        paddingVertical: 200,
        backgroundColor:"#FDF6AA"
    },

    text:{
        fontSize: 30,
        color:"#2c2c2c"
    }

})