// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    navigation.navigate('Home Page');
};
return (
  <View style={styles.container}>
    <Text style={styles.title}>Login Screen</Text>
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <Button
      title="Login"
      onPress={handleLogin}
    />
  </View>
);
};
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  // marginBottom: 200,
  alignItems: 'center',
  padding: 20,
},
title: {
  fontSize: 24,
  marginBottom: 20,
},
input: {
  width: '100%',
  marginBottom: 10,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 5,
  padding: 10,
},
});


export default LoginScreen;
