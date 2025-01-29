import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const resetFormData = () => {
    setName('');
    setPassword('');
    setEmail('');
    setDisplay(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter User name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.textInput, styles.passwordInput]}
          placeholder="Enter User Password"
          secureTextEntry={isVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Icon
          name={isVisible ? 'visibility' : 'visibility-off'}
          size={24}
          color="#000"
          style={styles.icon}
          onPress={() => setIsVisible(!isVisible)} 
        />
      </View>

      <TextInput
        style={styles.textInput}
        placeholder="Enter User Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <View style={styles.buttonContainer}>
        <Button color="green" title="Print-Details" onPress={() => setDisplay(true)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Clear-Details" onPress={resetFormData} />
      </View>

      {display && (
        <View style={styles.details}>
          <Text>Name: {name}</Text>
          <Text>Password: {password}</Text>
          <Text>Email: {email}</Text>
        </View>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInput: {
    fontSize: 14,
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    marginRight: 10, 
  },
  icon: {
    padding: 10, 
  },
  buttonContainer: {
    marginBottom: 10,
  },
  details: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});
