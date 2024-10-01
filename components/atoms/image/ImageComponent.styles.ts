import {  StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../mobileresponsive/Metrics';


const imageStyles = StyleSheet.create({
    image: {
      height:verticalScale(60),
      resizeMode: 'cover',
      marginBottom:verticalScale(120)
    },
    loadingIndicator: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: horizontalScale(-15),
      marginTop: verticalScale(-15),
    },
  });

  export default imageStyles;