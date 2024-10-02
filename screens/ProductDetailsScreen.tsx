import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import ProductCard from '../components/molecules/productCard/ProductCard';
import HighPerformanceList from '../components/HighPerformanceFlatList';


const DetailsScreen = ({ navigation,route }) => {
  //console.log('routes params shenu',route.params)
  const { products } = route.params;
  console.log('shenu gupta prodcuts fefdsfs',products)

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    // Cleanup to show the tab bar again when navigating away
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HighPerformanceList productData={products} navigation={navigation} />
      {/* <ProductCard title={''} content={name} item={{}}/> */}
      {/* <Text>Details for: {name}</Text>
      <Text>Item ID: {id}</Text> */}
    </View>
  );
};

export default DetailsScreen;
