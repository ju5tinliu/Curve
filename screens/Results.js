import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Results = ({ navigation }) => {
  const handleSpinButtonPress = () => {
    navigation.navigate('Coin Screen');
    // Add logic here for what happens when the spin button is pressed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.congratulationsText}>Congratulations</Text>
      <Image
        source={require('../assets/doggyIcon.jpg')}
        style={styles.iconImage}
        resizeMode="contain"
      />
      <Text style={styles.resultsText}>You scored: 5 out of 5</Text>
      <TouchableOpacity style={styles.spinButton} onPress={handleSpinButtonPress}>
        <Text style={styles.spinButtonText}>Spin for a chance to win a prize!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  congratulationsText: {
    fontSize: 36
,
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Menlo'
    
  },
  iconImage: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
    
  },
  resultsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5DADE2',
    marginTop: -26,
    fontFamily: 'Menlo'
  },
  spinButton: {
    backgroundColor: '#5DADE2',
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
  },
  spinButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Menlo'
  },
});

export default Results;


