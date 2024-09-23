import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface QuantitySelectorProps {
  initialQuantity?: number; // Optional initial quantity
  onQuantityChange?: (quantity: number) => void; // Callback for quantity changes
  buttonStyle?: ViewStyle;  // Style for the button
  labelStyle?: TextStyle; 
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  onQuantityChange,
  buttonStyle,
  labelStyle,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity); // Call the callback if provided
  };

  const decreaseQuantity = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity); // Call the callback if provided
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseQuantity} style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={increaseQuantity} style={[styles.button, buttonStyle]}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
  },
});

export default QuantitySelector;
