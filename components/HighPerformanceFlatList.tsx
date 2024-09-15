import React from 'react';
import { FlatList, Text, View, StyleSheet, ListRenderItemInfo,Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

// Example data
const data = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

interface ListItemProps {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

// Individual list item component
const ListItem: React.FC<ListItemProps> = React.memo(({ item }) => {
  return (
    <View style={styles.productContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.thumbnailUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.name}>{item.id}</Text>
        <Text style={styles.price}>{item.title}</Text>
      </View>
  );
});

// Main component with FlatList
const HighPerformanceList: React.FC = ({productData}) => {
  const renderItem = ({ item }: ListRenderItemInfo<{}>) => <ListItem item={item} />;

  return (
    <FlatList
    data={productData}
    renderItem={renderItem}
    keyExtractor={(item, index) => index.toString()}
    initialNumToRender={10}
    maxToRenderPerBatch={10}
    windowSize={10}
    updateCellsBatchingPeriod={50}
    removeClippedSubviews={true}
    //  getItemLayout={(data, index) => ({
    //      length: ITEM_HEIGHT,
    //       offset: ITEM_HEIGHT * index,
    //      index,
    //    })}
    // numColumns={1} // Adjust based on your layout
    //   data={productData}
    //   renderItem={renderItem}
    //   keyExtractor={(item, index) => index.toString()}
    //   initialNumToRender={10}
    //   maxToRenderPerBatch={10}
    //   windowSize={5}
    //   updateCellsBatchingPeriod={50}
    //   removeClippedSubviews={true}
    //   getItemLayout={(data, index) => ({
    //     length: ITEM_HEIGHT,
    //     offset: ITEM_HEIGHT * index,
    //     index,
    //   })}
    />
  );
};

// Constants for layout
const ITEM_HEIGHT = 50;

const styles = StyleSheet.create({
    productContainer: {
      flex: 1,
      margin: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: Dimensions.get('window').width / 2 - 10, // Adjust based on the number of columns
    },
    name: {
      marginTop: 8,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    price: {
      marginTop: 4,
      fontSize: 14,
      color: '#888',
      textAlign: 'center',
      marginBottom: 8,
    },
  });

export default HighPerformanceList;
