import Button from '../components/Button';
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RockClimbingScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/rock-climbing.png')}
        style={styles.image}
      />
      <View style={styles.roundedBox}>
        <Text style={styles.description}>
          <Text style={styles.highlightedText}>Rock climbing</Text> is an exhilarating sport that challenges both the body and the mind. It involves scaling up natural or artificial rock formations using hands and feet to ascend. Whether you're climbing indoors at a climbing gym or outdoors on real rock faces, the fundamentals remain the same.
          {/* Text truncated for brevity */}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RockClimbingTest')}>
        <Text style={styles.buttonText}>Test your Knowledge</Text>
      </TouchableOpacity>
      <View style={styles.lessons}>
        <View style={[styles.bubble, { backgroundColor: '#AED6F1' }]}>
            <Text style={styles.lessonTitle}>Understanding Rock Climbing</Text>
            <Text style={styles.bulletPoint}>Basics of Rock Climbing: Learn about the different types of rock climbing (bouldering, sport climbing, trad climbing, etc.), essential terminology, and the gear you will need.</Text>
             <Text style={styles.bulletPoint}>Recommended video: "Rock Climbing for Beginners- Video 1- Introduction To Rock Climbing" by RE</Text>
        </View>
        <View style={[styles.bubble, { backgroundColor: '#AED6F1' }]}>
            <Text style={styles.lessonTitle}>Gear and Safety</Text>
            <Text style={styles.bulletPoint}>Climbing Gear Essentials: Understand the gear required for different types of climbing, including shoes, harnesses, helmets, and belay devices.</Text>
            <Text style={styles.bulletPoint}>Recommended video: "Beginner's Guide to Rock Climbing Gear" by MEC</Text>
            <Text style={styles.bulletPoint}>Safety Protocols: Learn the safety measures, including how to properly use your gear, checking equipment, and understanding climbing commands.</Text>
            <Text style={styles.bulletPoint}>Recommended video: "How to Belay for Climbing" by REI</Text>
        </View>
        <View style={[styles.bubble, { backgroundColor: '#AED6F1' }]}>
            <Text style={styles.lessonTitle}>Skills Development</Text>
            <Text style={styles.bulletPoint}>Basic Techniques: Explore fundamental climbing techniques such as foot placement, hand grips, body positioning, and movement on the rock.</Text>
            <Text style={styles.bulletPoint}>Recommended video: "Rock Climbing Technique For Beginners : Static VS Dynamic Styles" by Geek Climber</Text>
            <Text style={styles.bulletPoint}>Bouldering for Beginners: Bouldering is a great way to start climbing without the need for a lot of gear. It helps in building strength and technique.</Text>
            <Text style={styles.bulletPoint}>Recommended video: "Bouldering for Beginners" by MEC</Text>
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
            marginTop: -20,
            width: '120%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 15,
            marginBottom: 20,
          },
          roundedBox: {
            backgroundColor: '#fff',
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
          },
          highlightedText: {
            fontWeight: 'bold',
            color: '#2E86C1', // Color for highlighting text
          },
          description: {
            fontSize: 16,
            color: '#333',
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
            borderRadius: 15,
            padding: 20,
            marginBottom: 20,
          },
          lessonTitle: {
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10,
          },
          bulletPoint: {
            fontSize: 16,
            marginBottom: 5,
          },
    });
    
    export default RockClimbingScreen;
