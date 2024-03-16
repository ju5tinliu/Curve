import React from 'react';
import { TouchableOpacity, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SkillCreatorButton = () => {
  const navigation = useNavigation();

  const navigateToSkillCreationScreen = () => {
    navigation.navigate('SkillCreation');
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={navigateToSkillCreationScreen}>
      <Text style={styles.plusText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Adjust the size as needed
    width: 60,
    height: 60,
    backgroundColor: '#007bff', // A nice shade of blue, change as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Adjust for more or less roundness
    // Optional shadow effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SkillCreatorButton;