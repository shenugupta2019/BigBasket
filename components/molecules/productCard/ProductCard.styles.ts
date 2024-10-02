import {
    StyleSheet,
  } from 'react-native';

const productCardStyles = StyleSheet.create({
    card: {
     // flex: 1,
      backgroundColor: 'blue',
      borderRadius: 8,
      // padding: 8,
      marginVertical: 18,
      // width: 120,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2, // For Android shadow
    },
    rowContainer:{
      flexDirection:'row',
      justifyContent: 'space-between',
  
    },
    bottomTab: {
      flexDirection: 'row', // Align items horizontally
      alignItems: 'center', // Center items vertically within the row
      justifyContent: 'space-between', // Adjust horizontal spacing (optional)
      // padding: 10,              // Optional: padding around the items
      backgroundColor: 'orange',
      width: 20,
    },
    imageView: {
      flexDirection: 'row',
      backgroundColor: 'green',
      // width: 40,
      // height: 40,
      marginTop: 0,
      marginBottom: 30,
    },
    imageStyle: {
      position: 'absolute',
      right: 80,
      backgroundColor: 'yellow',
      marginBottom: 30,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 12,
      marginBottom: 18,
    },
    content: {
      flex: 1, // Ensures items take up available space evenly
      padding: 10,
      textAlign: 'center', // Align text in the center of each item
    },
  });

  export default productCardStyles;