import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const StrikethroughTextExample: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.strikeThroughText}>This text is struck through</Text>
        {/* <Text style={styles.normalText}>This is normal text</Text> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
    marginTop:10,
    backgroundColor: 'yellow',
  },
  textContainer: {
    padding: 20, // Adding padding to ensure spacing around the text
  },
  strikeThroughText: {
    textDecorationLine: 'line-through', // Apply line-through
    textDecorationColor: 'red',         // Optional: change the color of the strike
    textDecorationStyle: 'solid',       // Optional: change the style of the strike
    fontSize: 8,
    color: 'red',
  },
  normalText: {
    fontSize: 18,
    color: '#333',
    marginTop: 10, // Adding some space between texts
  },
});

export default StrikethroughTextExample;
