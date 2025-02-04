

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [data, setData] = useState('')
  const [display, setDisplay] = useState(false)
  const [arr, setArr] = useState<string[]>([]);

  return (
    <View>
      <Text>Hello World</Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter name here...'
        keyboardType='default'
        value={data}
        onChangeText={setData} 
      />
      <Button title='Submit' onPress={() => {
        setData('');
        setArr(prevArr => [...prevArr, data]); 
      }} />
      <Button title='Data' onPress={() => {
        setDisplay(true);
      }} />
      <View>
      {
        display && 
        arr.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

export default App;
