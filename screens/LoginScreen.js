// screens/LoginScreen.js
import Button from '../components/Button';
import React from 'react';
import { View, Text } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Login Screen</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default LoginScreen;
