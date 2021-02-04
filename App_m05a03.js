import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default () => {
  return (
    <SafeAreaView style={styles.page}>
    <Text style={styles.texto}>Olá Mundo</Text>
    <Text style={styles.texto}>Texto 2</Text>
    <Text style={[styles.texto, {fontSize:20}]}>Texto 3</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page:{
    width:200,
    height:200,
    backgroundColor:'#FF0000'    
  },

  texto:{
    color:'#FFF',
    fontSize:17
  }
});