import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, StyleProp, ViewStyle } from 'react-native';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  value: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
}

const CustomSearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch, value, style, inputStyle }) => {
  return (
    <View style={[styles.searchBar, style]}>
      <TextInput
        style={[styles.textInput, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#e6e6e6',
  },
});

export default CustomSearchBar;
