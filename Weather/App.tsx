import React from 'react'
import { ImageBackground, StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

const App = () => {
  const handleIconPress = (iconName: string) => {
    Alert.alert(
      'Icon Pressed',
      `You pressed the ${iconName} icon`,
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1736018545810-3de4c7ec25fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D' }} // Replace with your background image URL
        style={styles.background}
      >
        <BlurView style={styles.absolute} blurType="light" blurAmount={10} />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Icon name="sort" size={35} color={'#c3c9cb'} />
          </View>
          <View style={styles.headerRight}>
            <Icon name='location-on' size={20} style={styles.headerRightIcon} />
            <Text style={styles.headerRightText}>Delhi, INDIA</Text>
            <Icon name='keyboard-arrow-down' size={30} style={styles.headerRightIcon} />
          </View>
        </View>

        <View style={styles.currentWeather}>
          <LinearGradient colors={['rgba(78, 161, 206, 0.8)', 'rgba(78, 161, 206, 0.8)']} style={styles.temperatureCard}>
            <Text style={styles.temperature}>28°C</Text>
            <Text style={styles.weatherCondition}>Sunny</Text>
            <Icon name="wb-sunny" size={100} color={'#ffcc00'} />
          </LinearGradient>
        </View>

        <View style={styles.forecast}>
          <Text style={styles.forecastTitle}>7-Day Forecast</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from({ length: 7 }).map((_, index) => (
              <View key={index} style={styles.forecastItem}>
                <Text style={styles.forecastDay}>Day {index + 1}</Text>
                <Icon name="wb-sunny" size={40} color={'#ffcc00'} />
                <Text style={styles.forecastTemp}>30°C</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.additionalInfo}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Humidity</Text>
            <Text style={styles.infoValue}>60%</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Wind Speed</Text>
            <Text style={styles.infoValue}>15 km/h</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => handleIconPress('home')}>
            <Icon name="home" size={30} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('search')}>
            <Icon name="search" size={30} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('notifications')}>
            <Icon name="notifications" size={30} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleIconPress('settings')}>
            <Icon name="settings" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  headerLeft: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightIcon: {
    color: '#fff',
    marginHorizontal: 5,
  },
  headerRightText: {
    color: '#fff',
    fontSize: 18,
  },
  currentWeather: {
    alignItems: 'center',
    marginVertical: 20,
  },
  temperatureCard: {
    width: '80%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  temperature: {
    fontSize: 64,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  weatherCondition: {
    fontSize: 24,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  forecast: {
    marginVertical: 20,
  },
  forecastTitle: {
    fontSize: 24,
    color: '#fff',
    marginHorizontal: 20,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  forecastItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 10,
  },
  forecastDay: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  forecastTemp: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  infoItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    marginTop: 40,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  infoValue: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 60,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
})