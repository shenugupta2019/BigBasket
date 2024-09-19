import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type TypographyProps = {
  variant?: string;
  color?: string;
  align?: string;
  style?: TextStyle; // Make the 'style' prop optional
  children: React.ReactNode;
};

const typographyVariants: { [key: string]: TextStyle } = {
  h1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  // Add more variants as needed
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',   // Default to body text
  color = 'black',    // Default text color
  align = 'left',     // Default text alignment
  style = {},         // Default empty object for style
  children,
  ...rest
}) => {
  return (
    <Text
      style={[
        typographyVariants[variant],   // Apply the selected variant
        { color: color, textAlign: align },  // Apply dynamic styles
        style,                        // Apply custom styles if passed
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
