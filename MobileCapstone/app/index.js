import React, {useEffect} from 'react';
import { Text, View, Pressable, Button, StyleSheet, Alert } from "react-native";
import * as SQLite from 'expo-sqlite';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Index() {

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.text}>Expo SQLite String</Text>

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


