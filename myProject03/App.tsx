import { ScrollView, StyleSheet, Text, View } from 'react-native'
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
    {
      id: 4,
      name: 'Ashray'
    },
    {
      id: 4,
      name: 'Shivam'
    },
    {
      id: 4,
      name: 'Ayush'
    },
    {
      id: 4,
      name: 'Subham'
    },
    {
      id: 4,
      name: 'Shivam'
    },
    {
      id: 4,
      name: 'Tanmay'
    },
    {
      id: 4,
      name: 'Ayush'
    },
    {
      id: 4,
      name: 'Shivam'
    },
    {
      id: 4,
      name: 'Alok'
    },
  ]
  return (
    <View>
      <Text style={{fontSize: 30}}>List with map</Text>
      <ScrollView style={{marginBottom: 50}}>
      {
        user.map((item) => <Text style={styles.items}>{item.name}</Text>)
      }
      </ScrollView>
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