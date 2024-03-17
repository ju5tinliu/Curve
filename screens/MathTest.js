import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

const MathTest = ({ navigation }) => {
  // Setting up an example question. Extend this logic for multiple questions.
  const questions = [
    {
      questionText: "Multiplication and Division: What is 12×8? Divide the result by 4.",
      options: [
        "A) 24",
        "B) 96",
        "C) 48",
        "D) 3",
      ],
      correctAnswer: "A) 24",
    },
    {
      questionText: "Word Problems: If a train travels 60 miles in 1 hour, how long will it take to travel 180 miles?",
      options: [
        "A) 1 hour",
        "B) 2 hours",
        "C) 3 hours",
        "D) 4 hours",
      ],
      correctAnswer: "C) 3 hours",
    },
    {
      questionText: "Graph Interpretation: If a bar graph shows that 20 students like apples, 15 like bananas, and 5 like cherries, how many students were surveyed?",
      options: [
        "A) 20",
        "B) 40",
        "C) 50",
        "D) 60",
      ],
      correctAnswer: "B) 40",
    },
  ];

  // This is to keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Function to handle when an answer is selected
  const handleSelectOption = (selectedOption) => {
    // Here you can handle the logic to check if the answer is correct,
    // display feedback, and navigate to the next question
    // For now, this just logs the selected option
    console.log("Selected Option:", selectedOption);

    // Navigate to the next question or show results
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // All questions answered
      console.log("Test completed");
      // Navigate to a results screen or reset the test
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/doggyIcon.jpg')} // Adjust path as needed
        style={styles.iconImage}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.question}>{currentQuestion.questionText}</Text>
      </View>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // You can reuse the styles from RockClimbingTest and adjust as necessary
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff', // Soft background color
  },
  iconImage: {
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
    alignSelf: 'center', // Center the image
    marginTop: 20, // Adjust space above
    marginBottom: 20, // Adjust space below
  },
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

export default MathTest;
