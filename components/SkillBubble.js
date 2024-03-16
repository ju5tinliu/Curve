import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SkillBubble = ({ skill, onPress }) => {
  return (
    <TouchableOpacity style={styles.bubble} onPress={onPress}>
      <Text style={styles.text}>{skill.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bubble: {
    margin: 10,
    padding: 15,
    backgroundColor: '#add8e6',
    borderRadius: 25,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default SkillBubble;
