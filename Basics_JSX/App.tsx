import { Text, View } from 'react-native'
import React from 'react'


const name = "Ayush Kumar Singh"
let age = 20;
var email = "abc@gmail.com"

function fruit(){
  return "Apple";
}
const App = () => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Text>{age > 18 ? "Allowed": "Not Allowed"}</Text>
      <Text>{age + 30}</Text>
    </View>
  )
}

export default App