import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  const name  = "Ayush ";
  const Age = "Age";
  return (
    <View>
      <Text style={{fontSize:40 , color:'#000'}}>Home Screen</Text>
      <Text style={{fontSize:40 , color:'#000'}}>Name: {name}</Text>
      <Text style={{fontSize:40 , color:'#000'}}>Age: {Age}</Text>
      <Button title='Go to Login Page ' onPress={() =>props.navigation.navigate("Login", {name,Age})}/> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})