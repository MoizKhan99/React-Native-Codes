import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, SegmentedControlIOSComponent } from 'react-native';

export default function App() {
  const [frame, useFrame] = useState([
    { name: 'Sabih' , id: 1},
    { name: 'Zaeem' , id: 2},
    { name: 'Anas' , id: 3},
    { name: 'Ahmer' , id: 4},
    { name: 'Ahmed' , id: 5},
    { name: 'Moiz' , id: 6},
    { name: 'Talha' , id: 7},
  ])
  const opFunction=(id) =>{
    console.log(id)
  }
  return (
    <View style={styles.container}>

                            {/*  Scroll View Using Map  */}

      {/* <ScrollView>
      {frame.map((item)=>(
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      )}
</ScrollView> */}

                           {/*   Flat List no need of Map */}

    <FlatList
    numColumns={2}
    keyExtractor={(item) => item.id}
    data={frame}
    renderItem = {({ item }) =>(
      <TouchableOpacity onPress={ ()=> opFunction(item.id)}>
      <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    )}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  item: {
    marginTop: 24,
    padding: 50,
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
