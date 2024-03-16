import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
   
    <View style={styles.container}>
  
      <Text style={styles.title}>Curve</Text>
      <Text style={styles.subtitle}>Tiny Changes,</Text>
      <Text style={styles.subtitle1}>remarkable results.</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'Menlo',
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 10,
    fontFamily: 'Courier New',
  },
  subtitle1: {
    fontSize: 15,
    marginBottom: 30,
    fontFamily: 'Courier New',
  },
});

export default HomeScreen;
