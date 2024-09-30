import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import buttonStyles from './Button.styles';

// Define prop types for the button component
type ButtonProps = {
  title: string;             // Button text
  onPress: () => void;       // Function to handle button press
  variant?: 'primary' | 'secondary';  // Button style variant (optional)
  color?: string;            // Custom text color (optional)
  backgroundColor?: string;  // Custom background color (optional)
  style?: ViewStyle;         // Custom styles for button container (optional)
  textStyle?: TextStyle;     // Custom styles for button text (optional)
  disabled?: boolean;        // Disable the button (optional)
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',  // Default to primary style
  color = 'white',      // Default text color is white
  backgroundColor,
  style,
  textStyle,
  disabled = false,
}) => {
  // Define default styles for primary and secondary button variants
  const defaultStyles = {
    primary: {
      backgroundColor: backgroundColor || 'red', // Default to blue if no backgroundColor provided
    },
    secondary: {
      backgroundColor: backgroundColor || 'yellow', // Default to gray if no backgroundColor provided
    },
  };

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,                     // Base button styles
        defaultStyles[variant],            // Apply variant styles
        disabled && buttonStyles.disabledButton, // Apply disabled styles
        style,                             // Apply any custom styles
      ]}
      onPress={onPress }
      disabled={disabled}
    >
      <Text style={[buttonStyles.buttonText, { color: color }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};



export default Button;
