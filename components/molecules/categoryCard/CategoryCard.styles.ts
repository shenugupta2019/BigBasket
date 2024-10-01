
import {
    StyleSheet,
  } from 'react-native';
  import { horizontalScale, moderateScale, verticalScale } from '../../../mobileresponsive/Metrics';

const CategoryCardStyles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        width: horizontalScale(40),
        height: verticalScale(40),
        marginBottom: verticalScale(20),
        backgroundColor:'red'
      },
      text: {
        fontSize: moderateScale(18),
        color: '#000',
      },
  });

  export default CategoryCardStyles;