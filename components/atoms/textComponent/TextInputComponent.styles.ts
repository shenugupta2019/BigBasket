import {StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../mobileresponsive/Metrics';


const textInputStyles = StyleSheet.create({
    label: {
      fontSize: moderateScale(16),
      marginBottom: verticalScale(8),
    },
    input: {
      height: verticalScale(50),
      borderColor: '#ccc',
      borderWidth: moderateScale(1),
      borderRadius: moderateScale(5),
      paddingHorizontal: horizontalScale(10),
      backgroundColor: '#fff',
    },
    errorInput: {
      borderColor: 'red', // Red border for error state
    },
    errorText: {
      color: 'red',
      fontSize: moderateScale(14),
      marginTop: verticalScale(4) ,
    },
  });

  export default textInputStyles;