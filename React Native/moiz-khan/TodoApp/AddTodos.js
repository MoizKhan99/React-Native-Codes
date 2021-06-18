import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList, } from 'react-native';

export default function AddTodos({submitHandler}){

    const [text , setText] = useState('')
    const changeHandler =(val)=>{
        setText(val)
    }

    return(
        <View>
            <TextInput 
            style={styles.input}
            placeholder='Write Todo'
            onChangeText={changeHandler}
            />
            <Button onPress={()=> submitHandler(text)} title='Add Todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        marginHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : 'black',
    }
})