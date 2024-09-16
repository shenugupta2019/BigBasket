import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getProdcuts,ProductList } from '../productServices/productService';
import ProductListData from '../components/ProductListData';
import HighPerformanceList from '../components/HighPerformanceFlatList';
import { postRequest } from '../serviceLayer/apiClient';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchData } from '../redux/slices/fetchDataSlice';

const ProductsScreen: React.FC = () => {
  const [products, setProducts] = useState<ProductList>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.data);
  console.log('redux state shenu',data,status,error)

  useEffect(() => {
    dispatch(fetchData());
    // const fetchUsers = async () => {
    //   try {
    //     const productsData = await getProdcuts();
    //     console.log('get the products data shenu length 5555',productsData)
    //     setProducts(productsData);
    //   } catch (error) {
    //     console.error('Failed to fetch users', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchUsers();
  }, [dispatch]);

  if (status === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (status === 'failed') {
    return <Text>Error: {error}</Text>;
  }


  return (
    <View>
     <HighPerformanceList productData={data}/>
    </View>
  );
};

export default ProductsScreen;
