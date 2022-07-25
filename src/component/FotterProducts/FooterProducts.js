import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes/index'

export default function FotterProducts() {
    return (
        <View>
            <Text style={styles.title}>Você também pode gostar!</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.ProductMargin}>
                        <Shoes img={require('../../img/1.png')} cost={'R$300'} model={"Nike Shox 10"} onClickShoe={() => navigation.navigate('Detail')} />
                    </View>
                    <View style={styles.ProductMargin}>
                        <Shoes img={require('../../img/2.png')} cost={'R$250'} model={"Nike Unit"} onClickShoe={() => navigation.navigate('Detail')} />
                    </View>
                    <View style={styles.ProductMargin}>
                        <Shoes img={require('../../img/3.png')} cost={'R$R$279,99'} model={" Breaket"} onClickShoe={() => navigation.navigate('Detail')} />
                    </View>
                    <View style={styles.ProductMargin}>
                        <Shoes img={require('../../img/4.png')} cost={'R$349,99'} model={"ZX 1K Boost"} onClickShoe={() => navigation.navigate('Detail')} />
                    </View>
                    <View style={styles.ProductMargin}>
                        <Shoes img={require('../../img/5.png')} cost={'R$159,99'} model={"Tensaur"} onClickShoe={() => navigation.navigate('Detail')} />
                    </View>
                    <View style={styles.ProductMargin}>
                        <Shoes img={require('../../img/6.png')} cost={'R$299,99'} model={"Run Falcon 2.0"} onClickShoe={() => navigation.navigate('Detail')} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        fontFamily: 'Anton_400Regular'

    },
    ProductMargin: {
        marginHorizontal: 10
    }
})