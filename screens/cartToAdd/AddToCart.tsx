import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/NavigationControllerWithTab';
import ImageComponent from '../../components/atoms/image/ImageComponent';
import { globalStyles } from '../../components/GlobalStyles/GlobalStyles';  // Import global styles
import StyledContainer from '../../components/GlobalStyles/StylesContainer';
import Card from '../../components/molecules/Card';
import HighPerformanceList from '../../components/HighPerformanceFlatList';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const AddToCart: React.FC<Props> = ({ navigation }) => {
    const handleCardPress = () => {
        console.log('Card pressed!');
      };
  return (
    <View style={styles.container}>
   
   <StyledContainer justifyContent='flex-start' flexDirection='column' style={styles.container}>
      </StyledContainer>
      <Text>Add to Cart Screen</Text> 
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
  },
  text: {
    color:'red'
  },
  customCard:{
  width:60,
  height:60
  }
});

export default AddToCart;
