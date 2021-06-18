import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [name , useName] = useState ('Moiz')
  const [age , useAge] = useState(21)
  return (
    <View style={styles.container}>

      <Text>Enter Your Name:</Text>

    <TextInput 
    multiline
    style={styles.input}
    placeholder='e.g Moiz Khan'
    onChangeText={(val) => useName(val) }
     />

     <Button title='update Name'/>


      <Text>Enter Your Age:</Text>

    <TextInput 
    multiline
    style={styles.input}
    placeholder='e.g 21'
    onChangeText={(val) => useAge(val) }
     />

     <Button title='update Name'/>

     <Text>Name is {name} and age is {age}</Text>

      <StatusBar style="auto" backgroundColor= 'red' />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,

  }
});
