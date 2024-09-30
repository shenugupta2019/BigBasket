import {StyleSheet} from 'react-native';

const CategoryStyles = StyleSheet.create({
    container: {
     // flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor:'pink'
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderBottomWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    btnStyle:{
      backgroundColor: 'red',
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 5,
    },
    customButtonStyle: {
      backgroundColor: 'red',  // Custom background color for the button
    },
    error: {
        color: 'red',
        fontSize: 16,
      },
      categoryContainer: {
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        flex: 1,
         margin: 5
      },
      categoryHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
      },
      row: {
        justifyContent: 'space-between', // Distribute items evenly in each row
      },
      itemContainer: {
        flex: 1, margin: 5 ,
        width:400,
        height:80
      },
      itemName: {
        fontSize: 18,
        fontWeight: '600',
      },
      itemDescription: {
        fontSize: 14,
        color: '#666',
      },
      customCard: {
        width: 150,
        height: 400,
      },
      textInput: {
        height: 40,
        fontSize: 16,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#e6e6e6',
      },
    });

    export default CategoryStyles;