import React from 'react';
import { TextInput, StyleSheet, TextInputProps,Text } from 'react-native';
import Typography from '../Typography';
import textInputStyles from './TextInputComponent.styles'

interface TextInputComponentProps extends TextInputProps {
  label?: string; // Optional label for accessibility or display purposes
  error?: string; // Optional error message
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  label,
  error,
  style,
  ...props
}) => {
  return (
    <>
      {label && <Typography style={textInputStyles.label}>{label}</Typography>}
      <TextInput
        style={[textInputStyles.input, error && textInputStyles.errorInput, style]} // Combine styles
        placeholderTextColor="#888" // Optional: Customize placeholder color
        {...props} // Spread the remaining props
      />
      {error && <Typography style={textInputStyles.errorText}>{error}</Typography>} {/* Display error message */}
    </>
  );
};



export default TextInputComponent;
