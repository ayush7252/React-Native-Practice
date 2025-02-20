import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const API = () => {
    const [data, setdata] = useState(undefined)
    const getData = async()=>{
        const url = "https://jsonplaceholder.typicode.com/posts/1"
        let result = await fetch(url);
        result = await result.json();
        setdata(result);
    }
    useEffect(()=>{
        getData();
    }, [])

  return (
    <View style={styles.MainContainer}>
      {
        data ? <View>
            <Text style={{fontSize:30}}>{data.id}</Text>
            <Text style={{fontSize:30}}>{data.userId}</Text>
            <Text style={{fontSize:30}}>{data.title}</Text>
            <Text style={{fontSize:30}}>{data.body}</Text>
             </View> : null
      }
    </View>
  )
}

export default API

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
    },
})