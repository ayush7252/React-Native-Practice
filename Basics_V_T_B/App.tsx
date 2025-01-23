import {Text, View , Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Basics of View,Text, Button</Text>
      <Text style={{fontSize: 30}}>This is a sample App</Text>
      <Button title='Press me'></Button>
    </View>
  )
}

export default App;