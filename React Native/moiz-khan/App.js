import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard , TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import TodoApp from './TodoApp/TodoApp'
import SandBox from './SandBox';

export default function App() {

  // const [name , setName] = useState('Raza');
  // const [person , setPerson] = useState({ name : 'Sabih' , age : 27});
  // const updateName = () =>{
  //   setName('moiz')
  //   setPerson({name : 'Anas', age : 23})
  // }
  // const [name1 ,setName1] = useState('moiz');
  // const [age , setAge ] = useState(15)

  // const [bhai , setBhai] = useState([
  //   { name : 'Sabih' , key : 1},
  //   { name : 'Zaeem' , key : 2},
  //   { name : 'Anas' , key : 3},
  //   { name : 'Ahmer' , key : 4},
  //   { name : 'Ahmed' , key : 5},
  //   { name : 'Moiz' , key : 6},
  //   { name : 'Talha' , key : 7},
  //   { name : 'Bilal' , key : 8},
  //   { name : 'Raza' , key : 9},
  // ])

  // const [bhai1 , setBhai1] = useState([
  //   { name : 'Sabih' , id : 1},
  //   { name : 'Zaeem' , id : 2},
  //   { name : 'Anas' , id : 3},
  //   { name : 'Ahmer' , id : 4},
  //   { name : 'Ahmed' , id : 5},
  //   { name : 'Moiz' , id : 6},
  //   { name : 'Talha' , id : 7},
  //   { name : 'Bilal' , id : 8},
  //   { name : 'Raza' , id : 9},
  // ])
  
  // const clickFunction =(name,id)=>{
  //   console.log(name,id)
  // }

  return (
      // <SandBox />
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss();
        console.log("keyboard")
      }}>
        <View style={styles.containers}>
          <TodoApp />
         </View>
       </TouchableWithoutFeedback>
       </View>
  )
    }
/*                                                                           
                                       Video_8
      <View style={styles.Video_6}>
        <FlatList 
        data={bhai1}
        numColumns={2}
        renderItem= {({item})=>(
          <TouchableOpacity onPress={()=>clickFunction(item.id,item.name)}>
            <Text style={styles.Items}>{item.name}</Text>
          </TouchableOpacity>
      )}
        />
      </View>



                                         Video_7 without key props
      <View style={styles.Video_6}>
        <FlatList 
        data={bhai}
        numColumns={2}
        renderItem= {({item})=>(
          <Text style={styles.Items}>{item.name}</Text>
      )}
        />
      </View> 
                                        Video_7 without keyExtractor                                   
      <View style={styles.Video_6}>
        <FlatList 
        data={bhai1}
        keyExtractor={(item)=>item.id}
        renderItem= {({item})=>(
          <Text style={styles.Items}>{item.name}</Text>
      )}
        />
      </View> 
  




                                  Video_6
      <View style={styles.Video_6}>
        <ScrollView>
        {bhai.map((item)=>{
          return(
            <View key={item.key}>
            <Text style={styles.Items}>{item.name}</Text>
            </View>
          )
        })}
          </ScrollView>
      </View> 



                            Video_5
                           multiline enter karnay par dosri line aaegi
                           numberic se sirf number wala keyboard aaega
    <Text>Enter Name</Text>
    <TextInput 
    style={{borderWidth:1,borderColor:'black',margin:4,padding:5}}
    placeholder="Enter Name" 
    onChangeText={(val)=>setName1(val)}
    multiline/>

    <Text>Enter Age</Text>
    <TextInput 
    style={{borderWidth:1,borderColor:'black',margin:4,padding:5}}
    placeholder="Enter Age" 
    onChangeText={(val)=>setAge(val)}
    multiline
    keyboardType='numeric'/>
    <Text>Name is {name1} and Age is {age}</Text> 



                       video 4   
      <View>
        <Text>My Name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
        <Button onPress={updateName} title="Update" />
      </View> 




                    video 3,2,1
      <View style={styles.CSS}>
        <Text style={styles.Font}>Hello World</Text>
      </View>
      <View style={styles.PARA}>
        <Text>Hello Moiz Khan is Here</Text>
        <Text>Hello Moiz Khan is Here</Text>
        <Text>Hello Moiz Khan is Here</Text>
      </View> 
      <StatusBar style="auto" />
     </View> */

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  CSS : {
    backgroundColor : 'pink',
    textAlign : "center",
  },
  Font : {
    fontWeight : 'bold'
  },
  PARA : {
    backgroundColor : 'yellow'
  },
  Video_6 :{
    paddingTop : 40,
    paddingHorizontal : 20,
  },
  Items : {
    backgroundColor :'aqua',
    marginTop : 24,
    padding : 30,
    fontSize : 24,
    marginHorizontal: 10
  },
  containers: {
    flex : 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },  
});
