import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

// const Tab = createBottomTabNavigator();  // this is the bottom tab
const Tab = createMaterialTopTabNavigator();  // this is the top tab
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Login' component={Login}/>
        <Tab.Screen name='Signup' component={Signup}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})