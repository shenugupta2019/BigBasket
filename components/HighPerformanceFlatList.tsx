import React,{useState,useEffect} from 'react';
import { FlatList, Text, View, StyleSheet, ListRenderItemInfo,Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import {ProductsList,Category,Product} from '../Model/ProductList'
import Card from '../components/molecules/Card';

// Example data
const data = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

interface ListItemProps {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
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
const HighPerformanceList: React.FC = ({productData}) => {

  console.log('shenu data categories flat list',productData)

  const [categories, setCategories] = useState<Category[]>([]);
  const handleCardPress = () => {
    console.log('Card pressed!');
  };
  // const renderItem = ({ item }: ListRenderItemInfo<{}>) => <ListItem item={item} />;

   // Fetch data from API or set it manually for testing
   useEffect(() => {
    setCategories(productData); 
    console.log('shenu data categories useeffect',categories)
  }, [productData]);
   // Render each item for a given category
   const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <Card
        title={item.name}
        content={item.description}
        onPress={handleCardPress}
        style={styles.customCard}
      />
    </View>
  );

   // Render the entire list, grouped by category
   const renderCategory = ({ item }: { item: Category }) => (
    <View style={styles.categoryContainer}>
      {/* Render Category Header */}
      <Text style={styles.categoryHeader}>{item.name}</Text>

      {/* Render Items within the Category */}
      <FlatList
        data={item.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );

  // if (loading) {
  //   return <ActivityIndicator size="large" color="#0000ff" />;
  // }


  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.name}
      renderItem={renderCategory}
    />
  );
}

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
  customCard:{
    width:60,
    height:60
    }
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
