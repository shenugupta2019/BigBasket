import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ImageWithTextProps {
  imageSource: ImageSourcePropType; // The source of the image (local or remote)
  title: string;                     // Title text to display
  description: string;               // Description text to display
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageSource, title, description }) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={imageSource} style={styles.image} />

      {/* Text Container */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0, // Start from the left
        top: 0,  // Start from the top
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        marginBottom: 15,
        // Removed left: -84
      },
  image: {
    width: 40,               // Set width for the image
    height: 40,              // Set height for the image
   // borderRadius: 30,        // Make the image circular
    marginRight: 0,         // Space between image and text
  },
  textContainer: {
    //flex: 1,  
    top:-35             // Take up remaining space
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
});

export default ImageWithText;

