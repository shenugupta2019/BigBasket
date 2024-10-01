import React,{useEffect} from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ navigation,route }) => {
  console.log('routes params shenu',route.params)
  const { id, name } = route.params;

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    // Cleanup to show the tab bar again when navigating away
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details for: {name}</Text>
      <Text>Item ID: {id}</Text>
    </View>
  );
};

export default DetailsScreen;
