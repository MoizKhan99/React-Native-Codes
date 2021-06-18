import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Alert, StyleSheet, Text, View, 
  TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import AddTodos from './AddTodos';



export default function TodoApp (){

  const [todos , setTodos] = useState([
    // { text : 'Sabih' , key : 1},
    // { text : 'Anas' , key : 2},
    // { text : 'Moiz' , key : 3},
   ])

const pressHandler = (key) =>{
  setTodos((prevTodos)=>{
    return prevTodos.filter(todo => todo.key != key)
  })
}

const submitHandler =(text)=>{

  if(text.length > 0){
  setTodos((prevTodos)=>{
    return [
      {text : text , key : Math.random()},
      ...prevTodos,
    ];
  });
}
else{
    Alert.alert("OOP's",'Empty Value Please Type Something', 
    [{text : 'Closed' , onPress:()=> console.log('Closed The Alert')}])
}

}
return(
<View style={styles.container}>
  <Header />
  <View style={styles.content}>
    <AddTodos submitHandler={submitHandler} />
    <View style={styles.list}>
      <FlatList 
       data={todos}
       renderItem = {({ item })=> (
       <TodoItem pressHandler={pressHandler} item={item} />
  )}
  />
  </View>
  </View>
  </View>
)
}

const styles = StyleSheet.create ({
  content : {
    padding : 40,
    // backgroundColor : 'pink',
    flex : 1,
 },
 list : {
   marginTop : 20,
  //  backgroundColor : 'yellow',
   flex : 1,
 },
 container: {
  flex : 1,
  backgroundColor: 'white'
 },
})