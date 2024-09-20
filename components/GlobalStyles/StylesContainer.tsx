// components/StyledContainer.tsx
import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { globalStyles } from '../GlobalStyles/GlobalStyles'; // Import global styles

interface StyledContainerProps {
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  children: React.ReactNode;
  style?: ViewStyle; // Optional additional styles
}

const StyledContainer: React.FC<StyledContainerProps> = ({
  justifyContent = 'flex-start', // Default to flex-start
  flexDirection = 'column',      // Default to column
  children,
  style,
}) => {
  return (
    <View style={[globalStyles.container, { justifyContent, flexDirection }, style]}>
      {children}
    </View>
  );
};

export default StyledContainer;
