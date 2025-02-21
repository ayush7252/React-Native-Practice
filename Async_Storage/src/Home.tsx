import { StyleSheet, Text, Button,View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [user ,setUser] = useState('')
    const setData = async()=> {
        await AsyncStorage.setItem("user", "Ayush")
    }
    const getData = async()=> {
        const value : string = await AsyncStorage.getItem("user")
        setUser(value);
    }
    const removeData = async()=> {
        await AsyncStorage.removeItem("user")
        setUser('');
    }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
      <Text>{user}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})