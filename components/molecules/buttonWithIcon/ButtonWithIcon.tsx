import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Or any other icon library
import buttonWithIconStyles from './ButtonWithicon.styles';

// Define the prop types for the button with an icon
type ButtonWithIconProps = {
  title: string; // Button text
  onPress: () => void; // Function to handle button press
  iconName: string; // Name of the icon (specific to the icon library)
  iconPosition?: 'left' | 'right'; // Position of the icon relative to the text
  iconColor?: string; // Icon color (optional)
  iconSize?: number; // Icon size (optional)
  color?: string; // Button text color (optional)
  backgroundColor?: string; // Button background color (optional)
  style?: ViewStyle; // Custom styles for the button container (optional)
  textStyle?: TextStyle; // Custom styles for the button text (optional)
  disabled?: boolean; // Disable the button (optional)
};

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  title,
  onPress,
  iconName,
  iconPosition = 'left', // Default icon position is left
  iconColor = 'white', // Default icon color
  iconSize = 10, // Default icon size
  color = 'white', // Default text color
  backgroundColor = 'gray', // Default button background color
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <View style={buttonWithIconStyles.btnView}>
      <TouchableOpacity
        style={[
          buttonWithIconStyles.button, // Base button styles
          {backgroundColor: backgroundColor}, // Apply background color
          disabled && buttonWithIconStyles.disabledButton, // Apply disabled styles if needed
          style, // Custom container styles
        ]}
        onPress={onPress}
        disabled={disabled}>
        <View style={buttonWithIconStyles.content}>
          {iconPosition === 'left' && (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={buttonWithIconStyles.iconLeft}
            />
          )}
          <Text style={[buttonWithIconStyles.buttonText, {color: color}, textStyle]}>
            {title}
          </Text>
          {iconPosition === 'right' && (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={buttonWithIconStyles.iconRight}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default ButtonWithIcon;
