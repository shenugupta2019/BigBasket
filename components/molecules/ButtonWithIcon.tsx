import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';// Or any other icon library

// Define the prop types for the button with an icon
type ButtonWithIconProps = {
  title: string;              // Button text
  onPress: () => void;        // Function to handle button press
  iconName: string;           // Name of the icon (specific to the icon library)
  iconPosition?: 'left' | 'right'; // Position of the icon relative to the text
  iconColor?: string;         // Icon color (optional)
  iconSize?: number;          // Icon size (optional)
  color?: string;             // Button text color (optional)
  backgroundColor?: string;   // Button background color (optional)
  style?: ViewStyle;          // Custom styles for the button container (optional)
  textStyle?: TextStyle;      // Custom styles for the button text (optional)
  disabled?: boolean;         // Disable the button (optional)
};

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  title,
  onPress,
  iconName,
  iconPosition = 'left',  // Default icon position is left
  iconColor = 'white',    // Default icon color
  iconSize = 24,          // Default icon size
  color = 'white',        // Default text color
  backgroundColor = '#007bff', // Default button background color
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,                      // Base button styles
        { backgroundColor: backgroundColor }, // Apply background color
        disabled && styles.disabledButton,   // Apply disabled styles if needed
        style,                               // Custom container styles
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.content}>
        {iconPosition === 'left' && (
          <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.iconLeft} />
        )}
        <Text style={[styles.buttonText, { color: color }, textStyle]}>
          {title}
        </Text>
        {iconPosition === 'right' && (
          <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.iconRight} />
        )}
      </View>
    </TouchableOpacity>
  );
};

// Define default styles for the button and icon positioning
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconLeft: {
    marginRight: 8, // Space between icon and text when icon is on the left
  },
  iconRight: {
    marginLeft: 8, // Space between icon and text when icon is on the right
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default ButtonWithIcon;
