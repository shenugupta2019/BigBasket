import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import customSearchBarStyles from  './CustomSearchBar.styles'

// Define the types for the props
interface SearchBarProps extends TextInputProps {
  placeholderText?: string;    // Optional placeholder text
  value: string;               // The current search text
  onSearch: (text: string) => void; // Function to handle search input changes
}

const CustomSearchBar: React.FC<SearchBarProps> = ({
  placeholderText = "Search...", // Default placeholder text
  value,
  onSearch,
  ...rest // Spread other TextInputProps
}) => {
  return (
    <View style={customSearchBarStyles.container}>
      <TextInput
        style={customSearchBarStyles.searchInput}
        placeholder={placeholderText}
        value={value}
        onChangeText={onSearch}
        {...rest} // Pass other TextInputProps (like autoFocus, keyboardType, etc.)
      />
    </View>
  );
};


export default CustomSearchBar;
