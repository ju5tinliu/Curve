import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';


const NextQuestion2 = ({ navigation }) => {
  const questions = [
    {
      question: "What is the term for climbing without the use of ropes or protection?",
      options: [
        { text: "A) Bouldering", correct: true },
        { text: "B) Top-roping", correct: false },
        { text: "C) Lead climbing", correct: false },
        { text: "D) Aid climbin", correct: false },
      ]
    },
    // Add more questions here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [coins, setCoins] = useState(3);

  const handleSelectOption = (option, index) => {
    setSelectedOption(index);
    const currentQuestion = questions[currentQuestionIndex];
    if (option.correct) {
      setCoins(coins + 1); // Increase coins if correct answer
    } else {
      if (coins > 0) {
        setCoins(coins); // Decrease coins if wrong answer and user has coins
      }
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null); // Reset selected option
    setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
  };

  const handleNavigateToNextQuestion = () => {
    navigation.navigate('Next Question 3');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>Coins: {coins}</Text>
      </View>
      <Image
        source={require('../assets/doggyIcon.jpg')}
        style={styles.iconImage}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.question}>{questions[currentQuestionIndex].question}</Text>
      </View>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedOption === index && option.correct ? styles.correctOption : (selectedOption === index && !option.correct ? styles.wrongOption : null),
          ]}
          onPress={() => handleSelectOption(option, index)}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.nextButton} onPress={handleNavigateToNextQuestion}>
        <Text style={styles.nextButtonText}>Go to Next Question</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: -10,
  },
  container: {
    justifyContent: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  coinContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#FFD700', // Gold color for the bubble
    padding: 10,
    borderRadius: 30, // Make it a circle
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    zIndex: 1, // Ensure the coin counter is above other elements
  },
  coinText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495E',
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
    backgroundColor: '#81C784', // Darker green color for correct answer
  },
  wrongOption: {
    backgroundColor: '#EF9A9A', // Darker red color for wrong answer
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
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NextQuestion2;