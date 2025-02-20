import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListAPI = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getAPIData();
    }, [])
    
    const getAPIData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url);
        let data = await result.json();
        setData(data);
    }

  return (
    <ScrollView >
        <StatusBar hidden={false}/>
      {
        data ? data.map((item)=>
            <View style={{padding:10,marginTop:20, borderBottomColor:'grey',borderBottomWidth:2}}>
              <Text style={{fontSize:20}}>ID: {item.id}</Text>
              <Text style={{fontSize:20}}>Title: {item.title}</Text>
              <Text style={{fontSize:20}}>Body:{item.body}</Text>
            </View>
        ): <Text>loading...</Text>
      }
    </ScrollView>
  )
}

export default ListAPI

const styles = StyleSheet.create({})