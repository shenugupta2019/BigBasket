import React from 'react';
import { View } from 'react-native';
import HighPerformanceList from '../../components/HighPerformanceFlatList';
import {Product} from '../../Model/ProductList';


const DetailsScreen = ({ navigation,route }) => {
  const { products } = route.params; // Assuming productsData is passed as an array
  const { id } = route.params;
  console.log('shenu detail screen products',products)

  // Extract products array from the productsData
  const productsData: Product[] = products[0].products;
  console.log('shenu detail screen products',products)
  console.log('shenu detail screen products category id',id)

  return (
    <View >
        <HighPerformanceList productData={productsData} navigation={navigation} categoryId ={id} />
    </View>
  );
};

export default DetailsScreen;
