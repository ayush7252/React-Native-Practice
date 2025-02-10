import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Home';
import Login from './Login';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#000',
        },
        headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen name='Home' component={Home}
        options={{
          headerLeft: ()=> <Button title='Btn' />,
          headerRight: ()=> <Header />,
          title: 'User Home',
          headerStyle: {
            backgroundColor: '#61a0bf',
          },
        }}
        />
        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Header =() => {
  return (
    <TextInput placeholder='Name' />
  )
}

export default App

const styles = StyleSheet.create({})