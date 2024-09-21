// components/Card.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import ImageComponent from '../atoms/ImageComponent';

interface CardProps {
  title: string;
  content: string;
  onPress?: () => void; // Optional function for handling press events
  style?: ViewStyle; // Optional custom style for the card container
  titleStyle?: TextStyle; // Optional custom style for the title
  contentStyle?: TextStyle; // Optional custom style for the content
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  onPress,
  style,
  titleStyle,
  contentStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <ImageComponent
        source="https://dummyimage.com/300x200/000/fff"
        width={75}
        height={75}
        borderRadius={10}
      />
      <Text numberOfLines={2} style={[styles.content, contentStyle]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginVertical: 18,
    height: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 18,
  },
  content: {
    fontSize: 10,
    color: '#333',
    marginTop: 6,
    width: 300,
    height: 20,
  },
});

export default Card;
