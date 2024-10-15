import React, {useEffect, useState} from 'react';
import {View,StyleSheet,Alert} from 'react-native';
import { ProductList} from '../productServices/productService';
import HighPerformanceList from '../components/HighPerformanceFlatList';
import {postRequest} from '../serviceLayer/apiClient';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchData} from '../redux/slices/fetchDataSlice';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../navigation/TabParamsList';
import {HomeStackParamList} from '../navigation/HomeStackParamList';



type Props = {
  navigation: HomeScreenNavigationProp;
};
type RootStackParamList = {
  Home: undefined;
  Details: {id: string; name: string};
};


const ProductsScreen: React.FC = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState<ProductList>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const {categories} = useAppSelector(state => state.data);
  console.log('redux state shenu from redux new ', categories);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleQuantityChange = (quantity: number) => {
    console.log('Quantity changed:', quantity);
  };
  const handlePress = () => {
    Alert.alert('Button Pressed');
  };


  return (
    <View>
      <HighPerformanceList productData={categories} navigation={navigation} />
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
  },
  customButtonStyle: {
    backgroundColor: 'red',  // Custom background color for the button
  },
});
