import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = (props) => {
  const {name , Age} = props.route.params
  return (
    <View>
      <Text style={{fontSize:40 }}>Login Screen</Text>
      <Text style={{fontSize:40 }}>Name: {name}</Text>
      <Text style={{fontSize:40 }}>Age : {Age}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})