// src/components/ProductDetail.tsx

import React from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';
import ImageComponent from '../../atoms/image/ImageComponent';
import Typography from '../../atoms/Typography';
import QuantitySelector from '../../molecules/QuantitySelector';
import productDetailStyles from './ProductDetails.styles';

interface ProductDetailProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  imageUrl,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <View style={productDetailStyles.container}>
      <View style={productDetailStyles.rowContainer}>
        {/* Product Image */}
        <ImageComponent
          source="https://dummyimage.com/300x200/000/fff"
          width={150}
          height={100}
          borderRadius={10}
          style={productDetailStyles.imageStyle}
        />
        <View style={productDetailStyles.titleView}>
          <Typography variant="caption" color="black" align="left">
            {name}
          </Typography>

          <Typography variant="caption" color="black" align="left">
            ${price.toFixed(2)}
          </Typography>
        </View>
      </View>
      <View  style={productDetailStyles.quantitySelectorStyle}>
      <QuantitySelector
        initialQuantity={1}
        isQuanitityBtnHide={true}
        id={'4'}
        quantity={4} // Ensure quantity exists
        categoryId={'2'}
      />
      </View>
    </View>
  );
};


export default ProductDetail;
