// components/Card.tsx
import React from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import ImageComponent from '../../atoms/ImageComponent';
import {Product} from '../../../Model/ProductList';
import CategoryCardStyles from './CategoryCard.styles';
import {
    TouchableOpacity,
  } from 'react-native';

import Typography from '../../atoms/Typography';


interface CardProps {
  title: string;
  onPress?: () => void; // Optional function for handling press events
  style?: ViewStyle; // Optional custom style for the card container
  titleStyle?: TextStyle; // Optional custom style for the title
  contentStyle?: TextStyle; // Optional custom style for the content
  item: Product;
  categoryId?: string;
}

const CategoryCard: React.FC<CardProps> = ({title, onPress, item}) => {
  return (
    <TouchableOpacity style={CategoryCardStyles.container} onPress={onPress}>
      <ImageComponent
        source="https://dummyimage.com/300x200/000/fff"
        width={40}
        height={40}
        borderRadius={10}
      />
        <Typography variant="caption" color="black" align="left">
       {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default CategoryCard;
