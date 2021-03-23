import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Header = ({background, weather, icon}) => {

    return (
        <LinearGradient
        style={styles.header}
        colors={background}
        >
            <Text style={styles.date}>{weather.results.date}</Text>
            <Text style={styles.city}>{weather.results.city_name}</Text>
            <Ionicons 
            name={icon.name} color={icon.color} size={150}
            />
            <Text style={styles.temp}>{weather.results.temp}°</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingTop: 10
    },
    date: {
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold'
    },
    city: {
        color: "#000",
        fontSize:20,
        fontWeight: 'bold'
    },
    temp: {
        color: "#fff",
        fontSize: 80,
        fontWeight: 'bold'
    }
})

export default Header;