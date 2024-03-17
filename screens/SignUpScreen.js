import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const SignUpScreen = ({ navigation })  => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
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
      <Image
        source={require('../assets/curve-logo-transparent.png')} // Replace with the path to your logo file
        style={styles.logo}
      />
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
        secureTextEntry
      />
      <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleFacebookSignUp}>
        <Image
          source={require('../assets/facebook.png')} // Replace with the path to your Facebook logo
          style={styles.fblogo}
        />
        <Text style={styles.buttonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleSignUp}>
        <Image
          source={require('../assets/google.png')} // Replace with the path to your Google logo
          style={styles.glogo}
        />
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By signing up you accept the <Text style={styles.link} onPress={() => {/* Your terms navigation logic here */}}>Terms of Service</Text> and <Text style={styles.link} onPress={() => {/* Your privacy navigation logic here */}}>Privacy Policy</Text>
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.link}>Log in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
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
  signUpButton: {
    backgroundColor: '#4285F4', 
    
  },
  facebookButton: {
    backgroundColor: '#3b5998', 
  },
  googleButton: {
    backgroundColor: '#DB4437', 
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
  logo: {
    width: 120, 
    height: 100, 
    resizeMode: 'contain', 
    marginBottom: 24, 
  },
  termsText: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 50,
  },
  link: {
    color: '#0645AD',
    textDecorationLine: 'underline',
    
  },
  loginText: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default SignUpScreen;