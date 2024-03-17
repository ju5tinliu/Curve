import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

const RockClimbingTest = ({ navigation }) => {
  // Example of setting up a single question.
  // Extend this to handle multiple questions and track user answers.
  const question = "What are the main differences between bouldering, sport climbing, and traditional (trad) climbing?";
  const options = [
    "A) The height of the climbs",
    "B) The type of gear used",
    "C) Both A and B",
    "D) The color of the climbing shoes",
  ];
  const correctAnswer = "C) Both A and B";

  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Function to handle when an answer is selected
  const handleSelectOption = (option) => {
    setSelectedAnswer(option);
    // Add logic here for what happens when an answer is selected.
    // For example, showing feedback, navigating to the next question, etc.
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/doggyIcon.jpg')} // Make sure the path is correct
        style={styles.iconImage}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.question}>{question}</Text>
      </View>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedAnswer === option && styles.selectedOption, // Highlight if selected
          ]}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.nextButton} onPress={() => console.log(selectedAnswer)}>
        <Text style={styles.nextButtonText}>Next Question</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: 300, // Adjust the width as needed
    height: 300, // Adjust the height as needed
    alignSelf: 'center', // Center the image
    marginTop: 0, // Add some space above the image
    marginBottom: -10, // Add some space below the image
  },
  container: {
    justifyContent: 'center', // Center the content vertically
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff', // Soft background color
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495E',
  },
  option: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#AED6F1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  selectedOption: {
    borderColor: '#5DADE2', // Different color for selected option
  },
  optionText: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'left', // Center the text within the option
  },
  nextButton: {
    backgroundColor: '#5DADE2',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RockClimbingTest;
