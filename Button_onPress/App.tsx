import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const App = () => {
  let data = 100;
  const fruit = (val : any) => {
    data = 40;
    console.warn(val)
    console.warn(data)
  }
  return (
    <View>
      <Text style={{fontSize: 30}}>Button onPress Event</Text>
      <Text>{data}</Text>
      <Button 
      title='Press Me '
      onPress={fruit}
      />
      <Button 
      title='Press me 2'
      onPress={() => fruit(90)}
      />

    </View>
  )
}


export default App

const styles = StyleSheet.create({})