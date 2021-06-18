import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyle } from '../GlobalStyle/globalStyle';

export default function About(){
    return(
    <View style={globalStyle.container} >
        <Text style={globalStyle.container}>About Screen</Text>
    </View>
    )
}