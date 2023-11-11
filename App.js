import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App() {
  const [text, setText] = useState("ola mundo");
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
 
  const soma = () => {
    setText(parseInt(value) + parseInt(value2)); 
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="click-me" onPress={soma}/>
      <TextInput style={styles.input} onChangeText={value => setValue(value)} value={value}/>
      <TextInput style={styles.input} onChangeText={value2 => setValue2(value2)} value={value2}/>
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
