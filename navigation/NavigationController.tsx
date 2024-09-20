import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';

// Screen Components

// TypeScript types for the navigation
export type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Generic Stack Navigator
const StackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Product">
    <Stack.Screen name="Product" component={ProductsScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

// Generic Tab Navigator
const TabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string = 'home';
        if (route.name === 'Details') iconName = 'list';
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="ProductsScreen" component={ProductsScreen} />
    <Tab.Screen name="DetailsScreen" component={DetailsScreen} />
  </Tab.Navigator>
);

// The main NavigationController that you can toggle between Stack and Tab navigation
const NavigationController: React.FC<{ useTabs?: boolean }> = ({ useTabs = true }) => {
  return (
    <NavigationContainer>
      {useTabs ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
};

export default NavigationController;
