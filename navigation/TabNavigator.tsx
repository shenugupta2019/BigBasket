import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProductsScreen} />
      <Tab.Screen name="DetailScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
