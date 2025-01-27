import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState("Ayush");
  let data = 'Shaurabh';
  console.warn(data);
  function testName(){
    setName("Shivam");
    data = "Shubham";
    console.warn(data)
  }
  return (
    <View>
      <Text style={{fontSize:30}}>{name}</Text>
      <Text style={{fontSize:30}}>{data}</Text>
      <Button
      title='Update Name'
      onPress={testName}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})