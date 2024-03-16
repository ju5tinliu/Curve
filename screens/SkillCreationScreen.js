import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, StyleSheet, Button, Alert, Text, KeyboardAvoidingView, StatusBar } from 'react-native';

const SkillCreationScreen = ({ navigation }) => {
  const [skill, setSkill] = useState('');

  const handleHomePagePress = () => {
    navigation.navigate('Home Page'); // Ensure this matches your actual home screen route name
  };

  const handleSubmit = () => {
    // Example: Update the URL to match your backend endpoint
    fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `I want to learn ${skill}.`, // Adjust based on how you want to structure the prompt
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data from your backend
      console.log(data);
      Alert.alert('AI Response', data.text, [
        { text: 'OK', onPress: () => setSkill('') },
      ]);
    })
    .catch((error) => {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to generate skill', [
        { text: 'OK' },
      ]);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#165C5F" />
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity onPress={handleHomePagePress} style={styles.smallBubble}>
        <Text style={styles.bubbleText}>Home Page</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="I want to learn ..."
        value={skill}
        onChangeText={setSkill}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98F5F9',
    padding: 20,
  },
  text: {
    fontSize: 50
    ,
    color: '#000',
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top', // Ensure multiline text input is aligned to the top
  },
  smallBubble: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    padding: 10,
    zIndex: 1,
  },
});

export default SkillCreationScreen;