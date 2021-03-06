import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { condition } from '../../utils/conditions'

const Forecast = ({ data }) => {

    let icon = condition(data.condition)
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <Ionicons name={icon.name} color={icon.color} size={25} />

            <View style={styles.temp}>
                <Text>{data.min}°</Text>
                <Text
                    style={{
                        fontSize: 18, fontWeight:"bold"
                    }}>
                    {data.max}°
               </Text>
            </View>
        </View>
    );
}

export default Forecast;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        marginLeft: 12,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        justifyContent: "space-around",
        alignItems: "center",
    },
    temp: {
        alignItems: "center",
    }
})