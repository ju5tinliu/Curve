import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MathScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/math.png')} // Replace with your math-related image
                style={styles.image}
            />
            <Text style={styles.title}>Math Learning Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Math Test')}>
                <Text style={styles.buttonText}>Test your Knowledge</Text>
            </TouchableOpacity>
            <View style={styles.lessons}>
                {/* Lesson 1 */}
                <View style={[styles.bubble, { backgroundColor: '#AED6F1' }]}>
                    <Text style={styles.lessonTitle}>Advanced Arithmetic and Number Sense</Text>
                    <Text style={styles.bulletPoint}>Students tackle more complex math problems that build on their foundational skills.</Text>
                    <Text style={styles.bulletPoint}>- Multiply and Divide</Text>
                    <Text style={styles.bulletPoint}>- Work with Fractions</Text>
                    <Text style={styles.bulletPoint}>- Understand Place Value</Text>
                </View>
                {/* Lesson 2 */}
                <View style={[styles.bubble, { backgroundColor: '#AED6F1' }]}>
                    <Text style={styles.lessonTitle}>Problem Solving and Critical Thinking</Text>
                    <Text style={styles.bulletPoint}>Students are challenged with tasks that require them to apply mathematical concepts and reasoning skills to solve problems and make logical decisions.</Text>
                    <Text style={styles.bulletPoint}>- Word Problems</Text>
                    <Text style={styles.bulletPoint}>- Logical Reasoning</Text>
                </View>
                {/* Lesson 3 */}
                <View style={[styles.bubble, { backgroundColor: '#AED6F1' }]}>
                    <Text style={styles.lessonTitle}>Data Analysis</Text>
                    <Text style={styles.bulletPoint}>Students learn to interpret information from graphs and calculate averages, essential skills for handling real-world data.</Text>
                    <Text style={styles.bulletPoint}>- Graph Interpretation</Text>
                    <Text style={styles.bulletPoint}>- Average Calculation</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#EBF5FB', // Soft background color
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 15,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#5DADE2',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lessons: {
        alignSelf: 'stretch',
    },
    bubble: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
    },
    lessonTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    bulletPoint: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default MathScreen;
