import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { haze, rainy, snow, sunny } from '../../assets/backgroundImages/index';
import Searchbar from './SearchBar';

const Weather = ({ weatherData }) => {

    const [backgroundIMage, setBakcgroundImage] = useState(null);
    console.log(weatherData);
    const { weather, name, main: { temp, humidity } } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBakcgroundImage(getBackgroundImage(main));
    }, [weatherData])

    const getBackgroundImage = weather => {
        if (weather === 'snow') return snow
        if (weather === 'sunny') return sunny
        if (weather === 'rainy') return rainy
        if (weather === 'haze') return haze
        return haze;
    }

    let textColor = backgroundIMage !== sunny ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <ImageBackground
                source={backgroundIMage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <Searchbar />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold' }}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor }}>{temp}°C</Text>
                </View>

                <View style={{ fontSize: 22, color: 'white' }}>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 10
    }
});


