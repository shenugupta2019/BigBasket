import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../mobileresponsive/Metrics';

const CategoryStyles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'pink',
  },
  input: {
    height: verticalScale(40),
    borderColor: 'gray',
    borderBottomWidth: moderateScale(1),
    marginBottom: verticalScale(12),
    paddingHorizontal: horizontalScale(8),
  },
  btnStyle: {
    backgroundColor: 'red',
    borderRadius: moderateScale(5),
    padding: 10,
    marginHorizontal: horizontalScale(5),
  },
  customButtonStyle: {
    backgroundColor: 'red', // Custom background color for the button
  },
  error: {
    color: 'red',
    fontSize: moderateScale(16),
  },
  categoryContainer: {
    marginBottom: verticalScale(20),
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    margin: 5,
  },
  categoryHeader: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    color: '#333',
  },
  row: {
    justifyContent: 'space-between', // Distribute items evenly in each row
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    width: horizontalScale(400),
    height: verticalScale(80),
  },
  itemName: {
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: moderateScale(14),
    color: '#666',
  },
  customCard: {
    width: horizontalScale(150),
    height: verticalScale(400),
  },
  textInput: {
    height: verticalScale(40),
    fontSize: moderateScale(16),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    marginBottom: verticalScale(20),
    backgroundColor: '#e6e6e6',
  },
});

export default CategoryStyles;
