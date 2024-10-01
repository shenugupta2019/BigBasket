import { StyleSheet} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../mobileresponsive/Metrics';



// Define default styles for the button
const buttonStyles = StyleSheet.create({
    button: {
      paddingVertical: verticalScale(12),
      paddingHorizontal: horizontalScale(24),
      borderRadius: moderateScale(4),
      alignItems: 'center',
      justifyContent: 'center',
      width:horizontalScale(100),
      marginLeft:horizontalScale(20)
    },
    buttonText: {
      fontSize: moderateScale(16),
      fontWeight: 'bold',
      color:'white'
    },
    disabledButton: {
      opacity: 0.6,
    },
  });

  export default buttonStyles;