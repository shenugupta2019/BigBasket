import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

const ProductList: React.FC = ({productData}) => {
console.log('the flat list data empty',productData)

    const renderItem = ({ item }: { item: { id: string, name: string, price: string, imageUrl: string } }) => (
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
  
    return (
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjust based on your layout
      />
    );
  };
  
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
  
  export default ProductList;
  