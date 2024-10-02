import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/ProductDetailsScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Product" component={ProductsScreen} />
      <Tab.Screen name="Register" component={RegistrationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
