import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

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
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholderText}
        value={value}
        onChangeText={onSearch}
        {...rest} // Pass other TextInputProps (like autoFocus, keyboardType, etc.)
      />
    </View>
  );
};

// Styles for the search bar
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default CustomSearchBar;
