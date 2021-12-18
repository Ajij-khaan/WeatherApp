import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native';
import { strom, drizzle, snow, rainy, atmosphere, sunny, cloudy } from '../../assets/backgroundImages/index';
import Searchbar from './SearchBar';

const Weather = ({ weatherData, fetchWeeatherData }) => {

    const [backgroundIMage, setBakcgroundImage] = useState(null);
    // console.log(weatherData);
    const { weather, name, sys: { country }, main: { temp, humidity, feels_like }, wind: { speed } } = weatherData;
    const [{ main }] = weather;
    const id = weatherData?.weather[0].id;
    console.log(id);

    useEffect(() => {
        setBakcgroundImage(getBackgroundImage(main));
    }, [weatherData])

    console.log(weatherData);


    const getBackgroundImage = () => {
        if (id >= 200 && id <= 232) return strom
        if (id >= 300 && id <= 332) return drizzle
        if (id >= 600 && id <= 622) return snow
        if (id >= 500 && id <= 531) return rainy
        if (id >= 701 && id <= 781) return atmosphere
        if (id == 800) return sunny
        if (id >= 801 && id <= 804) return cloudy

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
                <Searchbar fetchWeeatherData={fetchWeeatherData} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}, {country}</Text>
                </View>
                <View style={styles.extraInfo}>

                    <View style={styles.info}>
                        <Text style={{ fontSize: 46, color: 'white', fontWeight: 'bold' }}>{temp}°C</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{ fontSize: 36, color: 'white', fontWeight: 'bold' }}>{main}</Text>
                    </View>
                </View>

                <Text style={{ marginLeft: 25, fontSize: 20, color: 'white', fontWeight: 'bold' }}>Feel Like {feels_like}</Text>

            </ImageBackground>
        </View >
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
    },
    info: {
        width: Dimensions.get('screen').width / 2,
        alignItems: 'center',
        padding: 10,
        borderRadius: 25
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: '90%',
        justifyContent: 'space-between',
        padding: 10
    }

});


