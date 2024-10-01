import {
    StyleSheet,
  } from 'react-native';
  import { horizontalScale, moderateScale, verticalScale } from '../../../mobileresponsive/Metrics';

 
 // Define default styles for the button and icon positioning
const buttonWithIconStyles = StyleSheet.create({
    button: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: horizontalScale(6),
      borderRadius: moderateScale(8),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: horizontalScale(20),
      height: verticalScale(20),
      backgroundColor: 'yellow',
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    btnView: {
      width: horizontalScale(20),
      height: verticalScale(20),
    },
    buttonText: {
      fontSize: moderateScale(16),
      fontWeight: 'bold',
    },
    iconLeft: {
      marginRight: horizontalScale(8), // Space between icon and text when icon is on the left
    },
    iconRight: {
      marginLeft: horizontalScale(8), // Space between icon and text when icon is on the right
    },
    disabledButton: {
      opacity: 0.6,
    },
  });

  export default buttonWithIconStyles;