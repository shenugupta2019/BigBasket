// Counter.tsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);
  console.log('shenu gupta latest counter val',count)

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
    </View>
  );
};

export default Counter;
