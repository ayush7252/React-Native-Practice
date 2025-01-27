import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  const name = 'Ayush Kumar Singh' 
  return (
    <View>
      <Text style={{fontSize:40}}>Hello World</Text>
      <Users name={name} />
    </View>
  )
}

const Users = (props) =>{
  const name = props.name
  return (
    <View>
      <Text style={{fontSize:25}}>User List</Text>
      <Text>First Name: {name}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})