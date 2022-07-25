import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScrollBotton({ size, bgColor, textColor }) {
    return (
        <View style={[styles.container, { backgroundColor: bgColor || '#fff' }]}>
            <Text style={[styles.text, { color: textColor || '#c9c' }]}>
                {size}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bprderRadios: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10
    },

})