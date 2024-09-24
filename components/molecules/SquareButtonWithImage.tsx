import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, ViewStyle } from 'react-native';

interface SquareButtonWithImageProps {
  imageSource: ImageSourcePropType;  // Image source (local or remote)
  size?: number;                     // Size of the square button (optional, default 100)
  onPress: () => void;               // Function to handle button press
  style?: ViewStyle;                 // Optional additional styles for the button
}

const SquareButtonWithImage: React.FC<SquareButtonWithImageProps> = ({
  imageSource,
  size = 100,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { width: size, height: size }, style]}
    >
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Default background color
    borderRadius: 10,        // Optional rounded corners
  },
  image: {
    width: '20%',   // Adjust the image size relative to the button
    height: '20%',
    resizeMode: 'contain',  // Ensure the image fits within the button
  },
});

export default SquareButtonWithImage;
