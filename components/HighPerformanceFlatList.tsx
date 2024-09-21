import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ListRenderItemInfo,
  Dimensions,
  TextInput
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ProductsList, Category, Product} from '../Model/ProductList';
import Card from '../components/molecules/Card';
import CustomSearchBar from '../components/molecules/CustomSearchBar'; 

// Example data
const data = Array.from({length: 10000}, (_, index) => `Item ${index + 1}`);

interface ListItemProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// // Individual list item component
// const ListItem: React.FC<ListItemProps> = React.memo(({ item }) => {
//   return (
//     <View style={styles.productContainer}>
//         <FastImage
//           style={styles.image}
//           source={{
//             uri: item.thumbnailUrl,
//             priority: FastImage.priority.normal,
//           }}
//           resizeMode={FastImage.resizeMode.cover}
//         />
//         <Text style={styles.price}>{item.title}</Text>
//       </View>
//   );
// });

// // Header component
// const renderHeader = () => (
//   <View style={styles.header}>
//     <Text style={styles.headerText}>Shop By Category</Text>
//   </View>
// );

// Main component with FlatList
const HighPerformanceList: React.FC = ({productData, navigation}) => {
  console.log('shenu data categories flat list', productData);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(productData);

  const [categories, setCategories] = useState<Category[]>([]);
  const handleCardPress = (item: any) => {
    // navigation.navigate('Details', { id: item.id, name: item.name })
    console.log('Card pressed!', item.name);
  };
  // const renderItem = ({ item }: ListRenderItemInfo<{}>) => <ListItem item={item} />;

  // Fetch data from API or set it manually for testing
  useEffect(() => {
    setCategories(productData);
    console.log('shenu data categories useeffect', categories);
  }, []);
  // Render each item for a given category
  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.itemContainer}>
      <Card
        title={item.name}
        content={item.name}
        onPress={() =>
          navigation.navigate('Details', {id: item.id, name: item.name})
        }
        style={styles.customCard}
      />
    </View>
  );

 
  // Function to filter data based on the search query
  const searchFilter = (text: string) => {
    console.log('search str', text)
    if (text) {
      const newData = categories.map(category => {
        const filteredItems = category.products.filter(item =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
        if (filteredItems.length > 0) {
          return { ...category, products: filteredItems };
        }
        return null;
      }).filter(category => category !== null);
      setFilteredData(newData );
      setSearch(text);
    } else {
      setFilteredData(categories);
      setSearch(text);
    }
  };

  // Render the entire list, grouped by category
  const renderCategory = ({item}: {item: Category}) => (
    <View style={styles.categoryContainer}>
      {/* Render Category Header */}
      <Text style={styles.categoryHeader}>{item.name}</Text>
       {/* Custom Search Bar */}
    

      {/* Render Items within the Category */}
      <FlatList
        data={item.products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        
      />
    </View>
  );

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }

  return (
    <>
    {/* <CustomSearchBar
    placeholder="Search for fruits..."
    value={search}
    onSearch={(text) => searchFilter(text)}
  /> */}
   <TextInput
        style={styles.textInput}
        value={search}
        placeholder="Search items..."
        onChangeText={(text) => searchFilter(text)}
      />
    
    <FlatList
      data={filteredData}
      keyExtractor={item => item.name}
      renderItem={renderCategory}
    />
    </>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  categoryHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    // flexDirection:'column',
    // padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  customCard: {
    width: 60,
    height: 60,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#e6e6e6',
  },
});
//   return (
//     <FlatList
//     data={productData}
//     renderItem={renderItem}
//     keyExtractor={(item, index) => index.toString()}
//     //initialNumToRender={10}
//     //maxToRenderPerBatch={10}
//     numColumns={4}
//    // windowSize={10}
//     //updateCellsBatchingPeriod={50}
//     removeClippedSubviews={true}
//     ListHeaderComponent={renderHeader} // Specify the header component
//     //  getItemLayout={(data, index) => ({
//     //      length: ITEM_HEIGHT,
//     //       offset: ITEM_HEIGHT * index,
//     //      index,
//     //    })}
//     // numColumns={1} // Adjust based on your layout
//     //   data={productData}
//     //   renderItem={renderItem}
//     //   keyExtractor={(item, index) => index.toString()}
//     //   initialNumToRender={10}
//     //   maxToRenderPerBatch={10}
//     //   windowSize={5}
//     //   updateCellsBatchingPeriod={50}
//     //   removeClippedSubviews={true}
//     //   getItemLayout={(data, index) => ({
//     //     length: ITEM_HEIGHT,
//     //     offset: ITEM_HEIGHT * index,
//     //     index,
//     //   })}
//     />
//   );
// };

// Constants for layout
// const ITEM_HEIGHT = 50;

// const styles = StyleSheet.create({
//     productContainer: {
//       flex: 1,
//       margin: 5,
//       backgroundColor: '#fff',
//       borderRadius: 8,
//       overflow: 'hidden',
//       alignItems: 'center',
//       width:60,
//       height:100
//     },
//     image: {
//       width: 60,
//       height: 60, // Adjust based on the number of columns
//     },
//     name: {
//       marginTop: 8,
//       fontSize: 16,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     header: {
//       backgroundColor: '#6200ee',
//       padding: 16,
//     },
//     headerText: {
//       fontSize: 20,
//       color: 'white',
//       textAlign: 'left',
//     },
//     price: {
//       marginTop: 4,
//       fontSize: 14,
//       color: '#888',
//       textAlign: 'center',
//       marginBottom: 8,
//     },
//   });

export default HighPerformanceList;
