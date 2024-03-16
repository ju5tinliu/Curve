import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ChatScreen = ({ navigation }) => {
  const [skill, setSkill] = useState('');

  const handleAddSkill = () => {
    // Here you would call the backend or AI service to create learning materials
    console.log(skill);
    // For now, we'll just go back to the HomeScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="I want to learn how to..."
        value={skill}
        onChangeText={setSkill}
      />
      <Button title="Create Learning Path" onPress={handleAddSkill} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default ChatScreen;
