import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Company from './components/Company'


const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Components</Text>
      <UserData />
      <Company />
    </View>
  )
}

const UserData = () =>{
  return (
    <View>
      <Text>User Data</Text>
      <Text>Name : Ayush</Text>
      <Text>Age: 20</Text>
      <Text>Email: abc@gmail.com</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})