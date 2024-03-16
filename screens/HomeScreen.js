// import React from 'react';
// import {View, Text, Button } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
// //     <ImageBackground
// //     source={require('./image')}
// //     style={styles.background}
// //   >
//     <View style={{ flex: 1, justifyContent: '', alignItems: 'center' }}>
//       <Text style={{ fontSize: 30, marginBottom: 100 }}></Text>
//       <Text style={{ fontSize: 30, marginBottom: 20, fontFamily: 'Menlo'}}>Curve</Text>
//       <Text style={{ fontSize: 18, marginBottom: 0, fontFamily: 'Courier New' }}>Tiny Changes, </Text> 
//       <Text style={{ fontSize: 18, marginBottom: 20, fontFamily: 'Courier New' }}>remarkable results. </Text> 
//       <Button
//         title="Login"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//     // </ImageBackground>
//   );
// }

import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Add Skill"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}

export default HomeScreen;