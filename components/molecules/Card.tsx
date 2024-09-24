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
import ImageWithText from '../molecules/ImageWithText';
import StrikethroughTextExample from '../molecules/StrikethroughTextExample';

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
    <>
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
    
    <View style={styles.imageView}>
      <ImageComponent
       // source="https://dummyimage.com/300x200/000/fff"
        width={75}
        height={75}
        borderRadius={10}
      />
    {/* <ImageWithText
          imageSource={require('../../assets/images/image1.png')}  // Local image
          title="20%"
          description="This is a description of the sample item."
        /> */}
      </View>
    

      
   
    </TouchableOpacity>
    <Text numberOfLines={1} style={[styles.content, contentStyle]}>
        {content}
      </Text>
      <Text numberOfLines={1} style={[styles.content, contentStyle]}>
        {content}
      </Text>
      <Text numberOfLines={1} style={[styles.content, contentStyle]}>
        {content}
      </Text>
     
     
     
     <StrikethroughTextExample />
     </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: 'yellow',
    borderRadius: 8,
   // padding: 8,
    marginVertical: 18,
    height: 20,
    width: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  imageView:{
    flexDirection:'row',
    backgroundColor:'green',
   width: 40,
    height: 40,
    marginTop:0,
    marginBottom:30

  },
  imageStyle:{
  position:'absolute',
  right:80,
  backgroundColor:'yellow',
  marginBottom:30
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 18,
  },
  content: {
    fontSize: 10,
    color: 'black',
    marginTop: 30,
    width: 300,
    height: 20,
  },
});

export default Card;
