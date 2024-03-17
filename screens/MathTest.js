import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';

const MathTest = ({ navigation }) => {
  const [coins, setCoins] = useState(0); // State for coins
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      questionText: "Multiplication and Division: What is 12×8? Divide the result by 4.",
      options: [
        { text: "A) 24", isCorrect: true },
        { text: "B) 96", isCorrect: false },
        { text: "C) 48", isCorrect: false },
        { text: "D) 3", isCorrect: false },
      ],
    },
    {
      questionText: "Word Problems: If a train travels 60 miles in 1 hour, how long will it take to travel 180 miles?",
      options: [
        { text: "A) 1 hour", isCorrect: false },
        { text: "B) 2 hours", isCorrect: false },
        { text: "C) 3 hours", isCorrect: true },
        { text: "D) 4 hours", isCorrect: false },
      ],
    },
    {
      questionText: "Graph Interpretation: If a bar graph shows that 20 students like apples, 15 like bananas, and 5 like cherries, how many students were surveyed?",
      options: [
        { text: "A) 20", isCorrect: false },
        { text: "B) 40", isCorrect: true },
        { text: "C) 50", isCorrect: false },
        { text: "D) 60", isCorrect: false },
      ],
    },
    {
      "questionText": "Exponents and Square Roots: What is the square of 9, and what is the square root of that result?",
      "options": [
        { "text": "A) 81 and 9", "isCorrect": true },
        { "text": "B) 81 and 3", "isCorrect": false },
        { "text": "C) 18 and 9", "isCorrect": false },
        { "text": "D) 18 and 3", "isCorrect": false }
      ]
    },
    {
      "questionText": "Ratio and Proportion: If the ratio of cats to dogs in a pet store is 3:2, how many dogs are there if there are 12 cats?",
      "options": [
        { "text": "A) 6 dogs", "isCorrect": false },
        { "text": "B) 8 dogs", "isCorrect": true },
        { "text": "C) 10 dogs", "isCorrect": false },
        { "text": "D) 14 dogs", "isCorrect": false }
      ]
    },
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption && selectedOption.isCorrect) {
      setCoins(coins + 1); // Increment coins if the answer is correct
    }
    setSelectedOption(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigation.navigate('Results');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/doggyIcon.jpg')}
        style={styles.iconImage}
        resizeMode="contain"
      />
      <View style={styles.coinCounterContainer}>
        <Text style={styles.coinCounterText}>{coins} Coins</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.question}>{currentQuestion.questionText}</Text>
      </View>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption && selectedOption.isCorrect && selectedOption.text === option.text ? styles.correctOption : null,
            selectedOption && !selectedOption.isCorrect && selectedOption.text === option.text ? styles.incorrectOption : null,
          ]}
          onPress={() => handleSelectOption(option)}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.nextButton, !selectedOption && { opacity: 0.5 }]}
        onPress={handleNext}
        disabled={!selectedOption}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  iconImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: -10,
  },
  coinCounterContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    backgroundColor: 'gold',
    padding: 5,
    borderRadius: 20,
    zIndex: 1, // Ensure the counter is above the image
  },
  coinCounterText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
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
  correctOption: {
    backgroundColor: '#C8E6C9', // Green background for correct answer
  },
  incorrectOption: {
    backgroundColor: '#F5B7B1', // Red background for incorrect answer
  },
  optionText: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'left',
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
