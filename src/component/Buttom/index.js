import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Buttom() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.title}>
                    Compre já
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '4%'
    },
    btnContainer: {
        backgroundColor: '#17181A',
        width: '90%',
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 18,
        color: '#FFF'
    }


})