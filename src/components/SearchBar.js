import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


const SearchBar = ({ fetchWeeatherData }) => {
    const [cityName, setCityName] = useState('');
    return (
        <View style={styles.searchBar}>
            <TextInput placeholder='Enter CIty Name' value={cityName}
                onChangeText={text => setCityName(text)}

            />
            <FontAwesome5 name="search" size={24} color="black" onPress={() => fetchWeeatherData(cityName)} />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 50,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'gray',
        backgroundColor: 'lightgray'
    }
})
