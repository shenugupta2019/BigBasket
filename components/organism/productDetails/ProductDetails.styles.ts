import {
    StyleSheet,
  } from 'react-native';

// Styling for the ProductDetail Component
const productDetailStyles = StyleSheet.create({
    container: {
      margin: 16,
      backgroundColor: 'pink',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 8,
      elevation: 2,
    },
    imageStyle:{
     marginLeft:-20
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    quantitySelectorStyle:{
      position: 'absolute',  // Absolute positioning
      bottom: 20,  // Position from the bottom of the screen
      right: 20,   // Position from the right of the screen
  
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginBottom: 16,
    },
    titleView: {
      backgroundColor: 'blue',
      marginLeft: -70,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      color: '#555',
      marginBottom: 16,
    },
    price: {
      fontSize: 20,
      fontWeight: '600',
      color: '#000',
      marginBottom: 16,
    },
  });

  export default productDetailStyles;