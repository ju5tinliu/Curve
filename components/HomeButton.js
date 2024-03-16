import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeButton = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={navigateToHome}>
      <Text style={styles.text}>Home</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Adjust the size as needed
    minHeight: 50,
    minWidth: 100,
    backgroundColor: '#007bff', // A nice shade of blue, change as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Rounded corners
    // Optional shadow effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeButton;
