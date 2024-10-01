
import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../../mobileresponsive/Metrics';


// Styles for the search bar
const customSearchBarStyles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: moderateScale(8),
      borderWidth: moderateScale(1),
      borderColor: '#ddd',
      marginBottom: verticalScale(10),
    },
    searchInput: {
      height: verticalScale(40),
      paddingHorizontal: horizontalScale(10),
      backgroundColor: '#fff',
      borderRadius: moderateScale(8),
      fontSize: moderateScale(16),
      borderWidth: moderateScale(1),
      borderColor: '#ccc',
    },
  });

  export default customSearchBarStyles;

