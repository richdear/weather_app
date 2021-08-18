import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

export default function App() {

  const [coordinates, setCoordinates] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2f20ad4d2e6e64f6b66392a177db4382";

  const [cityName,setCityName]=useState(null);
  const [weather,setWeather]=useState(null);
  const [temprature,setTemprature]=useState(null);
  const [image,setImage]=useState(null);

  const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log("Location");
    console.log(location);
    return location;
  }

  const askForLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log("Permission status " + status);
    return status == "granted" ? true : false;
  }

  const getLocationOfUserWhenPermissionIsGranted = async () => {
    let permissionResult = await askForLocationPermission();
    if (permissionResult) {
      const { coords } = await getLocation();
      console.log("Coordinates:");
      console.log(coords);
      getWeather(coords.latitude, coords.longitude);
    } else {
      Alert.alert("ERROR", "Can not get location because location permission was denied!");
      console.log("Permission to get location denied by the user!");
    }
    setLoading(false)
  }

  const getWeather = (latitude, longitude) => {
    console.log(latitude, longitude)
    axios.get(WEATHER_API_URL, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units:"metric",
      }
    })
      .then((response) => {
        setCityName(response.data.name);
        setWeather(response.data.weather[0].description);
        setTemprature(response.data.main.temp);
        setImage(response.data.weather[0].icon);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getLocationOfUserWhenPermissionIsGranted();
  }, [])

  if (loading) {
    return <Loading />
  }


  return (
    <Weather temprature={temprature} cityName={cityName} icon={image} condition={weather}/>
  );
}


