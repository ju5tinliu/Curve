import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';

const SkillCreationScreen = ({ navigation }) => {
  const [skill, setSkill] = useState('');

  const handleHomePagePress = () => {
    navigation.navigate('Home Page'); // Ensure this matches your actual home screen route name
  };

  const handleSubmit = () => {
    const url = Platform.OS === 'android' ? 'http://10.0.2.2:3000/api/generate' : 'http://localhost:3000/api/generate';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `I want to learn ${skill}. Can you create a plan to learn the basics of this skill in 20 hours for me?`,
      }),
    })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok.');
      return response.json();
    })
    .then((data) => {
      // Ensure that the data includes the text property
      if (data.text) {
        Alert.alert('AI Response', data.text, [{ text: 'OK', onPress: () => setSkill('') }]);
      } else {
        console.error('Invalid response data:', data);
        Alert.alert('Error', 'Invalid response from server', [{ text: 'OK' }]);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to generate skill', [{ text: 'OK' }]);
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleHomePagePress} style={styles.backButton}>
          <Text style={styles.bubbleText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.promptText}>I want to learn </Text>
        <TextInput
          style={styles.input}
          placeholder="Ex:Rock-Climbing, etc."
          placeholderTextColor="gray"
          value={skill}
          onChangeText={setSkill}
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98F5F9',
    paddingTop: Platform.OS === 'ios' ? 60 : 30,
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 30, // Adjust for the status bar height
    right: 0,
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
  },
  // ... other styles
  bubbleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  formContainer: {
    flexDirection: 'row',
    // This centers the content horizontally, but we remove alignItems to allow alignSelf on children
    justifyContent: 'center',
    width: '100%',
  },
  promptText: {
    fontSize: 24,
    color: '#000',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#000',
    marginTop: 0,
    alignSelf: 'center',
    textAlign: 'center',
    minWidth: '20%', // Ensure the input is wide enough for users to tap
  },
  submitButton: {
    marginTop: 50,
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 10,
    alignSelf: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
  },
  // Add any other styles you need here
});

export default SkillCreationScreen;