import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  const user = [
    {
      id: 1,
      name: 'Ayush'
    },
    {
      id: 2,
      name: 'Ashray'
    },
    {
      id: 3,
      name: 'Shivam'
    },
    {
      id: 4,
      name: 'Alok'
    },
  ]
  return (
    <View>
      <Text style={{fontSize: 30}}>FlatList</Text>
      <FlatList 
      data={user}
      renderItem={({item})=><Text style={styles.items}>{item.name}</Text>}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  items: {
    padding: 10,
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  }
})