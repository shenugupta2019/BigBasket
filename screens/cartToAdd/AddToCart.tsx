import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/NavigationControllerWithTab';
import ImageComponent from '../../components/atoms/image/ImageComponent';
import { globalStyles } from '../../components/GlobalStyles/GlobalStyles';  // Import global styles
import StyledContainer from '../../components/GlobalStyles/StylesContainer';
import Card from '../../components/molecules/Card';
import ProductDetail from '../../components/organism/productDetails/ProductDetails';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const AddToCart: React.FC<Props> = ({ navigation }) => {
    const handleCardPress = () => {
        console.log('Card pressed!');
      };
      return (
        <SafeAreaView>
          <ProductDetail
            name="Awesome Headphones"
            imageUrl="https://example.com/product-image.jpg"
            description="High-quality wireless headphones with noise cancellation."
            price={299.99}
            onAddToCart={handleCardPress}
          />
        </SafeAreaView>
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
