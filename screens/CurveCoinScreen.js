import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const CurveCoinScreen = ({ navigation }) => {
  const [coins, setCoins] = useState(5);
  const [hasChecked, setHasChecked] = useState(false);
  const [slotNumbers, setSlotNumbers] = useState([1, 2, 1]); // Initial numbers in the slot machine
  const [isRolling, setIsRolling] = useState(false);
  const rollIntervalRef = useRef(null);

  // Function to start rolling the slot machine
  const startRolling = () => {
    setIsRolling(true);
    let counter = 0;
    rollIntervalRef.current = setInterval(() => {
      setSlotNumbers([
        Math.floor(Math.random() * 2) + 1,
        Math.floor(Math.random() * 2) + 1,
        Math.floor(Math.random() * 2) + 1,
      ]);
      counter++;
      if (counter === 20) { // Increase the counter value for longer rolling duration
        clearInterval(rollIntervalRef.current);
        setIsRolling(false);
        checkSlotMachine();
      }
    }, 150); // Increase the interval for a slower rolling effect
  };

  const checkSlotMachine = () => {
    setTimeout(() => {
      if (slotNumbers[0] === slotNumbers[1] && slotNumbers[1] === slotNumbers[2] && slotNumbers[2] === slotNumbers[0]) {
        Alert.alert('Congratulations!', 'You won an iPad!', [
          { text: 'YAY', onPress: () => setCoins(coins - 1) },
        ]);
      } else {
        Alert.alert('Sorry!', 'Better luck next time!', [
          { text: 'Aw', onPress: () => setCoins(coins - 1) },
        ]);
      }
      setIsRolling(false); // Stop the rolling animation
    }, 1000); // Adjust the delay time as needed (in milliseconds)
  };

  // Check if the user ran out of coins
  if (coins === 0) {
    Alert.alert(
      'Out of Coins',
      'You ran out of coins! Learn more skills to gain more!',
      [{ text: 'OK', onPress: () => navigation.navigate('Home Page') }]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Text style={styles.coinText}>{coins} Coins</Text>
      </View>
      <Text style={styles.title}>Slot Machine</Text>
      <View style={styles.slotMachine}>
        <Text style={styles.slotNumber}>{slotNumbers[0]}</Text>
        <Text style={styles.slotNumber}>{slotNumbers[1]}</Text>
        <Text style={styles.slotNumber}>{slotNumbers[2]}</Text>
      </View>
      {!hasChecked && coins > 0 && (
        <Button title="Use Coin" onPress={() => startRolling()} disabled={isRolling} />
      )}
      {hasChecked && (
        <Button title="Check another Coin" onPress={() => setHasChecked(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Menlo',
  },
  coinContainer: {
    position: 'absolute',
    top: 30,
    left: 25,
    backgroundColor: 'gold',
    padding: 5,
    borderRadius: 20,
  },
  coinText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Menlo',
  },
  slotMachine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  slotNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#5DADE2',
    fontFamily: 'Menlo',
  },
});

export default CurveCoinScreen;
