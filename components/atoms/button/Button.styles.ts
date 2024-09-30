import { StyleSheet} from 'react-native';


// Define default styles for the button
const buttonStyles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      width:100,
      marginLeft:20
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color:'white'
    },
    disabledButton: {
      opacity: 0.6,
    },
  });

  export default buttonStyles;