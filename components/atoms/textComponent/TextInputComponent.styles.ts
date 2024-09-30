import {StyleSheet } from 'react-native';


const textInputStyles = StyleSheet.create({
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },
    errorInput: {
      borderColor: 'red', // Red border for error state
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 4 ,
    },
  });

  export default textInputStyles;