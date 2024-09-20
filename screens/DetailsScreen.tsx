import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  console.log('routes params shenu',route.params)
  const { id, name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details for: {name}</Text>
      <Text>Item ID: {id}</Text>
    </View>
  );
};

export default DetailsScreen;
