import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard , TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function SandBoc(){
    return(
        <View style={styles.container}>
        <Text style={styles.box1}>box1</Text>
        <Text style={styles.box2}>box2</Text>
        <Text style={styles.box3}>box3</Text>
        <Text style={styles.box4}>box4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 40,
        backgroundColor : 'gray',
        // flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'flex-end',
    },
    box1 : {
        backgroundColor : 'gold',
        padding : 10,
        flex : 2,
    },
    box2 : {
        backgroundColor : 'coral',
        padding : 20,
        flex : 1,
    },
    box3 : {
        flex : 5,
        backgroundColor : 'skyblue',
        padding : 30,
    },
    box4 : {
        flex : 2,
        backgroundColor : 'violet',
        padding : 40,
    },
})