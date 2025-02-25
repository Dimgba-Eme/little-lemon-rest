import * as React from 'react';
import { Text, View, StyleSheet } from "react-native";
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Onboarding from '../Screens/Onboarding';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {

  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Onboarding' component={Onboarding} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#457E57',
  },
})


