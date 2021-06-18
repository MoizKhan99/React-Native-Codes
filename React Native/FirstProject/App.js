import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, Button } from 'react-native';

export default function App() {
  const  [count,useCount] = useState(0)
  return (
    <View style={styles.container}>
      <Image
       style={styles.tinyLogo}
       source={{
         uri: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png'
       }}
      />
      <Text style={{color: 'white', fontSize: 25}}>Counter App</Text>
      <Text style={{color: 'white', fontSize: 25}}>{count}</Text>
      <Button title="Add Count" onPress={()=> useCount (count +1)}></Button>
      <Text/>
      <Button title="Sub Count" onPress={()=> useCount (count -1)}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  }

});
