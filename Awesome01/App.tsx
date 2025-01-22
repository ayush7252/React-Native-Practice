import React from "react";

import {
  View,
  Text,
  Button,
  SafeAreaView
} from 'react-native';

function App(){
  return(
    <SafeAreaView>
    <View>
      <Text>Hello World!</Text>
      <Button title="Change Text"/>
    </View>
  </SafeAreaView>
  )
}

export default App;