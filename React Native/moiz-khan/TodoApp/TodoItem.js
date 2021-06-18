import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList, Touchable, TouchableOpacity, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem( {item , pressHandler} ) {
    


    return(
            <View style={styles.item}>
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <MaterialIcons name='delete' size={18} />
        </TouchableOpacity>
            <Text style={styles.textIcon}>{item.text}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop : 16,
        borderColor : 'black',
        borderWidth : 1,
        borderStyle : "solid",
        borderRadius : 10,
        flexDirection : 'row',
    },
    textIcon : {
        marginLeft : 15,
    }
})