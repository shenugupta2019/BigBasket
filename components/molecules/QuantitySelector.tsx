import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../../redux/slices/fetchDataSlice';
import { RootState, AppDispatch } from '../../redux/store';



interface QuantitySelectorProps {
  initialQuantity?: number; // Optional initial quantity
  onQuantityChange?: (quantity: number) => void; // Callback for quantity changes
  buttonStyle?: ViewStyle;  // Style for the button
  labelStyle?: TextStyle; 
  isQuanitityBtnHide: boolean
  id: string;
  quantity: number;
  categoryId:string
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onQuantityChange,
  buttonStyle,
  labelStyle,
  isQuanitityBtnHide,
  id,
  quantity,
  categoryId

}) => {
  //const [quantity, setQuantity] = useState<number>(initialQuantity);
    // Get the items from the Redux state
    console.log('added qty shenu shenu',categoryId)
    const dispatch = useDispatch<AppDispatch>(); // Use typed dispatch

  const increaseQuantity = () => {
    console.log('added qty shenu',categoryId)
    dispatch(incrementQuantity({ categoryId,productId:id,qty:quantity}));
    // const newQuantity = quantity + 1;
    // setQuantity(newQuantity);
    // onQuantityChange?.(newQuantity); // Call the callback if provided
  };

  const decreaseQuantity = () => {
    console.log('decresed qtu shenu')
    dispatch(decrementQuantity({ categoryId,productId:id,qty:quantity }));
    // const newQuantity = Math.max(quantity - 1, 1);
    // setQuantity(newQuantity);
    // onQuantityChange?.(newQuantity); // Call the callback if provided
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increaseQuantity} style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity> 
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={decreaseQuantity} style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>-</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',       
    alignItems: 'center',
   justifyContent:'space-between',
    backgroundColor:'yellow',
    width:150
  },
  button: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    width:30
  },
  buttonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    alignItems: 'center',
  },
});

export default QuantitySelector;
