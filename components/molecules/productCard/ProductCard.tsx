// components/Card.tsx
import React, {useState, useCallback, useMemo} from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import ImageComponent from '../../atoms/image/ImageComponent';
import QuantitySelector from '../QuantitySelector';
import Button from '../../atoms/button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
} from '../../../redux/slices/quantitySlice';
import {RootState, AppDispatch} from '../../../redux/store';
import {Category, Product} from '../../../Model/ProductList';
import Typography from '../../atoms/Typography';
import productCardStyles from './ProductCard.styles';

interface CardProps {
  title: string;
  content: string;
  onPress?: () => void; // Optional function for handling press events
  style?: ViewStyle; // Optional custom style for the card container
  titleStyle?: TextStyle; // Optional custom style for the title
  contentStyle?: TextStyle; // Optional custom style for the content
  item: Product;
  categoryId?: string;
}

const ProductCard: React.FC<CardProps> = ({
  title,
  content,
  onPress,
  style,
  titleStyle,
  contentStyle,
  item,
  categoryId,
}) => {
  const [added, setAdded] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState<{
    [key: string]: boolean;
  }>({
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
  const isVisible = useMemo(
    () => visibleButtons[item.id] || false,
    [visibleButtons, item.id],
  );
  console.log('track isVisible', isVisible);
  console.log('track isVisible item', item.qty);

  return (
    <>
      <View style={[productCardStyles.card, style]}>
        <ImageComponent
          source="https://dummyimage.com/300x200/000/fff"
          width={150}
          height={100}
          borderRadius={10}
        />
        <View style={productCardStyles.rowContainer}>
          <Typography variant="caption" color="black" align="left">
            {content}
          </Typography>
          <Typography variant="caption" color="black" align="left">
            {content}
          </Typography>
        </View>

        <View style={productCardStyles.bottomTab}>
          {!isVisible ? (
            <Button title={'Add'} onPress={toggleVisibility} />
          ) : (
            <QuantitySelector
              initialQuantity={1}
              onQuantityChange={handleQuantityChange}
              isQuanitityBtnHide={true}
              id={item.id}
              quantity={item.qty}
              categoryId={categoryId}
            />
          )}
        </View>

        {/* <StrikethroughTextExample /> */}
      </View>
    </>
  );
};

export default ProductCard;
