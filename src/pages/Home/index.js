import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Shoes from '../../component/Shoes/index'
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../img/banner.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainerFlex}>
        <Text style={styles.text}>Tênis</Text>
        <Text style={{ marginTop: 12 }}><Ionicons name="radio-button-on-sharp" size={10} color="#CECECF" /></Text>
        <Text style={[styles.text, { color: '#CECECF' }]}>Masculino</Text>
        <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
          <Ionicons name="md-filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>Lançamentos</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../img/1.png')} cost={'R$300'} model={"Nike Shox 10"} onClickShoe={() => navigation.navigate('Detail')} />
          <Shoes img={require('../../img/2.png')} cost={'R$250'} model={"Nike Unit"} onClickShoe={() => navigation.navigate('Detail')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../img/3.png')} cost={'R$R$279,99'} model={" Breaket"} onClickShoe={() => navigation.navigate('Detail')} />
          <Shoes img={require('../../img/4.png')} cost={'R$349,99'} model={"ZX 1K Boost"} onClickShoe={() => navigation.navigate('Detail')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../img/5.png')} cost={'R$159,99'} model={"Tensaur"} onClickShoe={() => navigation.navigate('Detail')} />
          <Shoes img={require('../../img/6.png')} cost={'R$299,99'} model={"Run Falcon 2.0"} onClickShoe={() => navigation.navigate('Detail')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%',
    height: 200
  },
  textContainerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "row",
    marginVertical: '4%',
    marginHorizontal: '5%'


  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'

  },
  line: {
    borderBottomColor: '#d8d8d8',
    borderBottomWidth: 1,
  }

})