import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const CurveCoinScreen = ({ navigation }) => {
  const [hasChecked, setHasChecked] = useState(false);

  const checkCoin = () => {
    const didWin = Math.random() < 0.33; // 1 in 3 chance
    if (didWin) {
      Alert.alert('Congratulations!', 'You have won a prize!', [
        { text: 'OK', onPress: () => setHasChecked(true) },
      ]);
    } else {
      Alert.alert('Sorry!', 'No prize this time.', [
        { text: 'Try Again', onPress: () => setHasChecked(false) },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CurveCoin</Text>
      {!hasChecked && (
        <Button title="Open CurveCoin" onPress={checkCoin} />
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
    fontFamily: 'Menlo'
  },
});

export default CurveCoinScreen;
