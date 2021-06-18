import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyle } from '../GlobalStyle/globalStyle';

export default function Home(){
    return(
    <View style={globalStyle.container}>
        <Text style={globalStyle.text}>Home Screen</Text>
    </View>
    )
}

