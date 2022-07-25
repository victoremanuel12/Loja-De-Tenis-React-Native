import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shoes({ img, cost, model, onClickShoe }) {
    function filterModelWidth(desc) {
        if (desc.length < 27) {
            return desc
        } else {
            return `${desc.substring(0, 22)}...`
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onClickShoe}>
            <Image source={img} style={styles.shoesImg} />
            <Text style={styles.shoesText}>
                {filterModelWidth(model)}
            </Text>
            <View style={styles.opacity}>
                <Text style={styles.shoescost}>
                    {cost}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    opacity: {
        opacity: 0.4
    },
    shoesImg: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontSize: 16,
    }
})