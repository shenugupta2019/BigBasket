import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import ProductCard from '../components/molecules/productCard/ProductCard';
import HighPerformanceList from '../components/HighPerformanceFlatList';
import {ProductsList, Category, Product} from '../Model/ProductList';


const DetailsScreen = ({ navigation,route }) => {
  //console.log('routes params shenu',route.params)
  const { products } = route.params; // Assuming productsData is passed as an array
  console.log('shenu detail screen products',products)

  // Extract products array from the productsData
  const productsData: Product[] = products[0].products;
  console.log('shenu detail screen products',products)

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    // Cleanup to show the tab bar again when navigating away
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <View >
        <HighPerformanceList productData={productsData} navigation={navigation} />
      {/* <ProductCard title={''} content={name} item={{}}/> */}
      {/* <Text>Details for: {name}</Text>
      <Text>Item ID: {id}</Text> */}
    </View>
  );
};

export default DetailsScreen;
