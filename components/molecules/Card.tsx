// components/Card.tsx
import React,{useState,useCallback,useMemo} from 'react';
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
import ButtonWithIcon from '../molecules/ButtonWithIcon';
import QuantitySelector from '../molecules/QuantitySelector';
import StrikethroughTextExample from '../molecules/StrikethroughTextExample';
import Button from '../atoms/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../redux/slices/quantitySlice';
import {RootState, AppDispatch} from '../../redux/store';
import {Category, Product} from '../../Model/ProductList';

interface CardProps {
  title: string;
  content: string;
  onPress?: () => void; // Optional function for handling press events
  style?: ViewStyle; // Optional custom style for the card container
  titleStyle?: TextStyle; // Optional custom style for the title
  contentStyle?: TextStyle; // Optional custom style for the content
  item: Product;
  categoryId:string
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  onPress,
  style,
  titleStyle,
  contentStyle,
  item,
  categoryId
}) => {
  const [added, setAdded] = useState(false); 
  const [visibleButtons, setVisibleButtons] = useState<{ [key: string]: boolean }>({
    [item.id]: false, // Initialize visibility for this item
  });

  console.log('shenu gupta: qty 54546456', item);
  const dispatch = useDispatch<AppDispatch>(); // Use typed dispatch

  const handleQuantityChange = (quantity: number) => {
    console.log('Quantity changed:', quantity);
  };

   // Toggle visibility for a specific item by its id
   const toggleVisibility = useCallback(() => {
    setVisibleButtons(prevState => ({
      ...prevState,
      [item.id]: !prevState[item.id], // Toggle the visibility
    }));
  }, [item.id]);

  const handleAddPress = () => {
    setAdded(true);
  };
 // Avoid re-rendering by using memoized values
 const isVisible = useMemo(() => visibleButtons[item.id] || false, [visibleButtons, item.id]);
  console.log('track isVisible', isVisible)
  console.log('track isVisible item', item.qty)
 
  return (
    <>
      <View style={[styles.card, style]}>
        <ImageComponent
          // source="https://dummyimage.com/300x200/000/fff"
          width={150}
          height={100}
          borderRadius={10}
        />
        <ImageWithText
          imageSource={require('../../assets/images/image1.png')} // Local image
          title="20%"
          description="This is a description of the sample item."
        />
        <Text numberOfLines={1} style={[styles.content, contentStyle]}>
          {content}
        </Text>
        <Text numberOfLines={1} style={[styles.content, contentStyle]}>
          {content}
        </Text>
        <Text numberOfLines={1} style={[styles.content, contentStyle]}>
          {content}
        </Text>

        {/* <StrikethroughTextExample /> */}
      </View>
      <View style={styles.bottomTab}>
        <ButtonWithIcon
          title={''}
          onPress={function (): void {
            throw new Error('Function not implemented.');
          }}
          iconName={''}
        />
   
        {!isVisible  ? (
          <Button
            title={'Add'}
            onPress={toggleVisibility }
          />
        ) : (
          <QuantitySelector
              initialQuantity={1}
              onQuantityChange={handleQuantityChange}
              isQuanitityBtnHide={true}
              id={item.id}
              quantity={item.qty} categoryId={categoryId}          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 8,
    // padding: 8,
    marginVertical: 18,
    // width: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  bottomTab: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically within the row
    justifyContent: 'space-between', // Adjust horizontal spacing (optional)
    // padding: 10,              // Optional: padding around the items
    backgroundColor: 'orange',
    width: 20,
  },
  imageView: {
    flexDirection: 'row',
    backgroundColor: 'green',
    // width: 40,
    // height: 40,
    marginTop: 0,
    marginBottom: 30,
  },
  imageStyle: {
    position: 'absolute',
    right: 80,
    backgroundColor: 'yellow',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 18,
  },
  content: {
    flex: 1, // Ensures items take up available space evenly
    padding: 10,
    textAlign: 'center', // Align text in the center of each item
  },
});

export default Card;
