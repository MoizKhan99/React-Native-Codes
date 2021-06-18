import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screen/Home'
import About from './screen/About'
import ReviewDetails from './screen/ReviewDetails'


export default function App() {
  return (
    <View>
      <Home />
      <About />
      <ReviewDetails />
    </View>
  );
}


