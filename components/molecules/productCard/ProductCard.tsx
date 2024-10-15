import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import ImageComponent from '../../atoms/image/ImageComponent';
import QuantitySelector from '../QuantitySelector';
import Button from '../../atoms/button/Button';
import { useAppSelector} from '../../../redux/hooks';

import {RootState, AppDispatch} from '../../../redux/store';
import {Product} from '../../../Model/ProductList';
import Typography from '../../atoms/Typography';
import productCardStyles from './ProductCard.styles';
import { addItemToCart } from '../../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


interface CardProps {
  title: string;
  content: string;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  contentStyle?: TextStyle;
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
  const [visibleButtons, setVisibleButtons] = useState<{ [key: string]: boolean }>({
    [item.id]: false,
  });
  const dispatch = useDispatch<AppDispatch>(); // Use typed dispatch
  console.log('shenu gupta content ProductCard qty', item);
  //const dispatch = AppDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log('shenu gupta cartItems', cartItems);


  const handleQuantityChange = (quantity: number) => {
    console.log('Quantity changed:', quantity);
  };

  // Select the specific product from Redux
  const product = useAppSelector((state: RootState) =>
    state.data.categories
      .find((category) => category.id === categoryId)
      ?.products.find((prod) => prod.id === item.id) // Compare with item.id
  );

  // Local state to track previous values
  const [previousQty, setPreviousQty] = useState(product ? product.qty : 0);

  // Detect changes in product quantity
  useEffect(() => {
    if (product && product.qty !== previousQty) {
      console.log(`Product ${product.name} quantity changed from ${previousQty} to ${product.qty}`);
      setPreviousQty(product.qty);
    }
  }, [product, previousQty]);

  // Toggle visibility for a specific item by its id
  const toggleVisibility = useCallback(() => {
    if (product) {
      dispatch(addItemToCart(product));
    } else {
      console.error("Product is undefined");
    }
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
      <View style={[productCardStyles.card]}>
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
            {item.price}
          </Typography>
        </View>

        <View style={productCardStyles.bottomTab}>
          {!isVisible && product && product.qty===0  ? (
            <Button title={'Add'} onPress={toggleVisibility} />
          ) : (
            <QuantitySelector
              initialQuantity={1}
              onQuantityChange={handleQuantityChange}
              isQuanitityBtnHide={true}
              id={item.id}
              quantity={product ? product.qty : 0} // Ensure quantity exists
              categoryId={categoryId}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default ProductCard;
