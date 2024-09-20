// styles/globalStyles.ts
import { StyleSheet, ViewStyle } from 'react-native';

// Define global styles
interface GlobalStyles {
  container: ViewStyle;
}

export const globalStyles: GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    // Default values can be set here if needed
  },
});
