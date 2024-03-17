// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
