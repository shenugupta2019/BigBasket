import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Button,StyleSheet} from 'react-native';
import {getProdcuts, ProductList} from '../productServices/productService';
import ProductListData from '../components/ProductListData';
import HighPerformanceList from '../components/HighPerformanceFlatList';
import {postRequest} from '../serviceLayer/apiClient';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchData} from '../redux/slices/fetchDataSlice';
import {RootStackParamList} from '../navigation/NavigationControllerWithTab';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import ReusableModal from '../components/organism/ReusableModal';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../navigation/TabParamsList';
import {HomeStackParamList} from '../navigation/HomeStackParamList';
import QuantitySelector from '../components/molecules/QuantitySelector';

type Props = {
  navigation: HomeScreenNavigationProp;
};
type RootStackParamList = {
  Home: undefined;
  Details: {id: string; name: string};
};

// Define the type for the navigation prop
// Define your Stack Params
// type HomeStackParamList = {
//   Product: undefined;
//   Details: { id: string; name: string };
// };

// type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Product'>;

// Specify the type for navigation prop
type HomeTabNavigationProp = BottomTabNavigationProp<TabParamList, 'HomeTab'>;
type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Product'
>;

const ProductsScreen: React.FC = ({navigation}) => {
  //const navigation = useNavigation<HomeScreenNavigationProp>();
  //const navigation = useNavigation<HomeScreenNavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState<ProductList>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const {data, status, error} = useAppSelector(state => state.data);
  console.log('redux state shenu from redux new ', data);

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

  const handleQuantityChange = (quantity: number) => {
    console.log('Quantity changed:', quantity);
  };


  return (
    <View>
     <QuantitySelector initialQuantity={1} onQuantityChange={handleQuantityChange} buttonStyle={styles.btnStyle} />
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <ReusableModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Hello Modal"
        children={undefined}
      />
      <HighPerformanceList productData={data} navigation={navigation} />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'pink'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  btnStyle:{
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,

  }
});
