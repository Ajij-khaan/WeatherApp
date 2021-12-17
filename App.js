import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const API_KEY = '4b36ed411e77940a73b1838112abef3f';

export default function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);


  async function fetchWeeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    console.log(API);
    try {
      const response = await fetch(API);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setWeatherData(data);
      }
      else {
        setWeatherData(null);
      }
      setLoaded(true);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeeatherData('Mumbai');
    console.log(weatherData);
  }, [])

  return (
    <View style={styles.container}>
      <Text>length: {weatherData?.name}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
