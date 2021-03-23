import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.menu}
            onPress={() => navigation.openDrawer()}
        >
            <Feather
                name="menu"
                size={36}
                color="#373737"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menu: {
        backgroundColor: "#FFF",
        position: "absolute",
        zIndex: 9,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        top: 40,
        left: 15,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.2
    }
})

export default Menu;