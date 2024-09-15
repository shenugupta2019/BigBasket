import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getProdcuts,ProductList } from '../productServices/productService';
import ProductListData from '../components/ProductListData';
import HighPerformanceList from '../components/HighPerformanceFlatList';
import { postRequest } from '../serviceLayer/apiClient';

const ProductsScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductList>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const productsData = await getProdcuts();
        console.log('get the products data shenu length 5555',productsData)
        setProducts(productsData);
      } catch (error) {
        console.error('Failed to fetch users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
     <HighPerformanceList productData={products}/>
    </View>
  );
};

export default ProductsScreen;
