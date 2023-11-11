import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [text, setText] = useState("ola mundo");
 
  const Teste = () => {
    setText("vai dormir"); 
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="click-me" onPress={Teste}/>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text}/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
});
