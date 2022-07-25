import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Buttom from '../../component/Buttom';
import DotColor from '../../component/DotColor/DotColor';
import ScrollButton from '../../component/ScrollBotton/ScrollButton';
import FotterProducts from '../../component/FotterProducts/FooterProducts'


export default function Detail({ navigation }) {
  navigation.setOptions({
    headerTitle: "Nike Bost"
  })
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../img/detail.png')} style={styles.image} resizeMode="cover" />
      <View>
        <Text style={[styles.title, { fontSize: 24 }]}>R$200</Text>
      </View>
      <View opacity={0.5}>
        <Text style={[styles.title, { fontSize: 30 }]}>Nike</Text>
      </View>
      <View style={styles.dotContainer}>
        <DotColor color="#2379f4" />
        <DotColor color="#fb6e53" />
        <DotColor color="#ddd" />
        <DotColor color="#000" />
      </View>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ScrollButton size="39" bgColor='#17181a' textColor="#FFF" />
          <ScrollButton size="40" />
          <ScrollButton size="41" />
          <ScrollButton size="42" />
        </ScrollView>
      </View>
      <View style={styles.textContent}>
        <Text style={styles.textTitle}>Nike Bost</Text>
        <Text style={styles.textContent}>
          Tênis Basquete Masculino Nike Lebron Witness 5 O Tênis Basquete Masculino Nike Lebron Witness 5, é confeccionado em tecido com detalhes em sintético, super confortável.
        </Text>
        <Text style={styles.textList}>
          - Categoria: Amortecimento.
        </Text>
        <Text style={styles.textList}>
          - Material: Mesh
        </Text>
        <Buttom />
        <View style={styles.line} />
        <FotterProducts />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    widt: '100%',
    backgroundColor: '#FFF',

  },
  image: {
    width: '100%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: '7%'

  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'

  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,

  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }



})