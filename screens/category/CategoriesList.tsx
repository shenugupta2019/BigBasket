import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {View, FlatList, Alert, ActivityIndicator} from 'react-native';
import {ProductList} from '../../productServices/productService';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchData} from '../../redux/slices/fetchDataSlice';
import {StackNavigationProp} from '@react-navigation/stack';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../../navigation/TabParamsList';
import {HomeStackParamList} from '../../navigation/HomeStackParamList';

import CategoryCard from '../../components/molecules/categoryCard/CategoryCard';
import categoryStyles from './Category.styles';
import Typography from '../../components/atoms/Typography';
import CustomSearchBar from '../../components/molecules/CustomSearchBar';

type Props = {
  navigation: HomeScreenNavigationProp;
};
type RootStackParamList = {
  Home: undefined;
  Details: {id: string; name: string};
};

// Specify the type for navigation prop
type HomeTabNavigationProp = BottomTabNavigationProp<TabParamList, 'HomeTab'>;
type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Category'
>;

const CategoriesList: React.FC = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState<ProductList>();
  const dispatch = useAppDispatch();
  const {categories, loading, error} = useAppSelector(state => state.data);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(categories);
  const [searchText, setSearchText] = useState<string>(''); // State for search text


  console.log('redux state shenu from redux new 4567667 ', categories);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // Filter categories based on search input
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Memoize the key extractor to improve performance
  const keyExtractor = useMemo(() => item => item.id.toString(), []);

  const handleItemPress = useCallback(item => {
    navigation.navigate('Details', {id: item.id, name: item.name});
  }, []);

  const renderCategory = useCallback(
    ({item}) => (
      <View style={categoryStyles.itemContainer}>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        {error && (
          <Typography style={categoryStyles.error}>Error: {error}</Typography>
        )}
        <CategoryCard
          title={item.name ? item.name : 'new item'}
          onPress={() => handleItemPress(item)}
          style={categoryStyles.customCard}
          item={item}
        />
      </View>
    ),
    [handleItemPress],
  );

  return (
    <View style={categoryStyles.categoryContainer}>
      {/* Render Category Header */}
      <CustomSearchBar
        placeholder="Search for Categories..."
        value={searchText}
        onSearch={setSearchText} // Update search text on change
      />

      {/* Render Items within the Category */}
      <FlatList
        data={filteredCategories}
        keyExtractor={keyExtractor}
        renderItem={item => renderCategory(item)}
      />
    </View>
  );
};

export default CategoriesList;
