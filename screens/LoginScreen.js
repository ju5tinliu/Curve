// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    navigation.navigate('Home Page');
};
const handleFacebookLogin = () => {};
const handleGoogleLogin = () => {};
return (
  <View style={styles.container}>
   <Image
        source={require('../assets/curve-logo-transparent.png')} // Replace with the path to your logo file
        style={styles.logo}
      />
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
    <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleFacebookLogin}>
        <Image
          source={require('../assets/facebook.png')} // Replace with the path to your Facebook logo
          style={styles.fblogo}
        />
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
        <Image
          source={require('../assets/google.png')} // Replace with the path to your Google logo
          style={styles.glogo}
        />
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.link}>Sign up</Text>
        </Text>
      </TouchableOpacity>
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Menlo'
    
  },
  input: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontFamily: 'Menlo'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#DB4437',
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  fblogo: {
    width: 40,
    height: 30,
    marginRight: 8,
  },
  glogo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  signupText: {
    fontSize: 16,
    marginTop: 20,
    
  },
  link: {
    color: '#0645AD',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 120, 
    height: 100, 
    resizeMode: 'contain', 
    marginBottom: 24, 
  },
  loginButton: {
    backgroundColor: '#4285F4', // You can change this to your preferred login button color
    width: '100%', // This will ensure the login button is the same width as the social buttons
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;