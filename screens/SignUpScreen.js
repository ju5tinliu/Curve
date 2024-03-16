import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SignUpScreen = ({ navigation })  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Placeholder for sending the sign-up data to your backend
    // You would replace this with your actual API call
    
    // Show an alert indicating successful sign-up
    Alert.alert(
      'Sign up successful!',
      'Your account has been created successfully.',
      [
        {
          text: 'Login',
          onPress: () => navigation.navigate('Login'), // Navigate to the login screen
        },
      ]
    );
    // setEmail('');
    // setPassword('');
  };

  const handleFacebookSignUp = () => {};
  const handleGoogleSignUp = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hides the password text
      />
      <TouchableOpacity 
        style={[styles.button, styles.signUpButton]} 
        onPress={handleSignUp}>
          <Image
          source={require('../assets/facebook.png')} // Replace with the path to your Facebook logo
          style={styles.logo}
        />
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.facebookButton]} 
        onPress={handleFacebookSignUp}>
        <Text style={styles.buttonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.googleButton]} 
        onPress={handleGoogleSignUp}>
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginBottom: 150,
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
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#4285F4', // Example blue color for the sign-up button
  },
  facebookButton: {
    backgroundColor: '#3b5998', // Facebook blue color
  },
  googleButton: {
    backgroundColor: '#DB4437', // Google red color
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
