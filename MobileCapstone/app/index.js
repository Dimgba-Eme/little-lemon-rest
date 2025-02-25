import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Onboarding from '../Screens/Onboarding';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Index() {

  return (
    <>
      <View style={styles.container}>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#457E57',
  },

  text: {
    color: '#fff',
    fontSize: 20,
  },
})


