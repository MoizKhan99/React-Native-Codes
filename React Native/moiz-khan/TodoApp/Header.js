import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList, } from 'react-native';

export default function Header(){


    return(
        <View style={styles.header}>
            <Text style={styles.todoText}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 80,
        padding : 38,
        backgroundColor : 'coral',
    },
    todoText : {
        textAlign : 'center',
        color : '#fff',
        fontSize : 20,
        fontWeight : 'bold',
    }
})