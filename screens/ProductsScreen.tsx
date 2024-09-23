import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator,Button } from 'react-native';
import { getProdcuts,ProductList } from '../productServices/productService';
import ProductListData from '../components/ProductListData';
import HighPerformanceList from '../components/HighPerformanceFlatList';
import { postRequest } from '../serviceLayer/apiClient';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchData } from '../redux/slices/fetchDataSlice';
import { RootStackParamList } from '../navigation/NavigationController';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import ReusableModal from '../components/organism/ReusableModal';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
type RootStackParamList = {
  Home: undefined;
  Details: { id: string; name: string; };
};

// Define the type for the navigation prop



const ProductsScreen: React.FC<Props> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState<ProductList>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.data);
  console.log('redux state shenu from redux new ',data)


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
       <Button title="Open Modal" onPress={() => setModalVisible(true)} />
       <ReusableModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Hello Modal" children={undefined}       
      />
     <HighPerformanceList productData={data} navigation={navigation}/>
    </View>
  );
};

export default ProductsScreen;
