import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {View, FlatList, Alert, ActivityIndicator} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchData} from '../../redux/slices/fetchDataSlice';
import {StackNavigationProp} from '@react-navigation/stack';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../../navigation/TabParamsList';
import {HomeStackParamList} from '../../navigation/HomeStackParamList';

import CategoryCard from '../../components/molecules/categoryCard/CategoryCard';
import categoryStyles from './Category.styles';
import Typography from '../../components/atoms/Typography';
import CustomSearchBar from '../../components/molecules/searchbar/CustomSearchBar';

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
  const dispatch = useAppDispatch();
  const {categories, loading, error} = useAppSelector(state => state.data);
    // Access the categories from Redux state
  const [searchText, setSearchText] = useState<string>(''); // State for search text


  console.log('redux state shenu from redux new testing redux ', categories[0].products);

  useEffect(() => {
    console.log('redux state shenu from redux new testing redux useEffect ', categories[0].products);

    dispatch(fetchData());
  }, []);

  // Filter categories based on search input
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Memoize the key extractor to improve performance
  const keyExtractor = useMemo(() => item => item.id.toString(), []);

  const handleItemPress = useCallback((item: any) => {
  // Check if the item is an array or a single object
  if (Array.isArray(item)) {
    const extractedProducts = extractProducts(item);  // Extract if it's an array of categories
    console.log('shenu gupta products of categories', extractedProducts);
  } else {
    // Handle single category object
    console.log('shenu gupta products of a single category', item.products);
    console.log('shenu gupta products of a single category id new', item.id);
    // Assuming item is a single category object, log the products
    const extractedProducts = extractProducts([item]);  // Convert single object to array
    navigation.navigate('Details', { products: extractedProducts,id: item.id});
    console.log('extracted single category', extractedProducts);
  }

  }, []);

// Extract products from each category
const extractProducts = (data: any[]) => {
  console.log('extracts data 4544', data);
  
  // Check if data is undefined or not an array
  if (!Array.isArray(data)) {
    console.error('extractProducts expects an array, received:', data);
    return [];  // Return an empty array to avoid errors
  }

  return data.map(category => {
    return {
      products: category.products
    };
  });
};

const renderCategory = useCallback(
  ({ item }) => {
    console.log('category refresh',item.products); // Logging before the return

    return (
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
    );
  },
  [handleItemPress] // Dependencies array
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
        data={categories}
        keyExtractor={keyExtractor}
        renderItem={item => renderCategory(item)}
      />
    </View>
  );
};

export default CategoriesList;
