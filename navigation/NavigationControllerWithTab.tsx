import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import DetailsScreen from '../screens/DetailsScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { TabParamList } from './TabParamsList'; // Types for tabs
import { HomeStackParamList } from './HomeStackParamList'; // Types for HomeStack
import CategoriesList from '../screens/category/CategoriesList'; // Types for HomeStack
// Screen Components

// TypeScript types for the navigation
export type RootStackParamList = {
  Home: undefined;
};

const SettingsStack = createStackNavigator();
// Tab Navigator
const Tab = createBottomTabNavigator<TabParamList>();
// Stack Navigator for Home Tab
const HomeStack = createStackNavigator<HomeStackParamList>();

// Generic Stack Navigator
const StackNavigator: React.FC = () => (
  <HomeStack.Navigator initialRouteName="Category">
    <HomeStack.Screen name="Category" component={CategoriesList}  options={{ headerShown: false }} />
    <HomeStack.Screen name="Details" component={DetailsScreen} />
  </HomeStack.Navigator>
);

// Generic Stack Navigator
const SettingsNavigator: React.FC = () => (
  <SettingsStack.Navigator initialRouteName="RegistrationScreen">
    <SettingsStack.Screen name="RegistrationScreen" component={ProductsScreen} />
    <SettingsStack.Screen name="ProductsScreen" component={ProductsScreen} />
  </SettingsStack.Navigator>
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
    <Tab.Screen name="Home" component={StackNavigator} />
    <Tab.Screen name="SettingsTab" component={SettingsNavigator} />
  </Tab.Navigator>
);

// The main NavigationController that you can toggle between Stack and Tab navigation
const NavigationControllerWithTab: React.FC<{ useTabs?: boolean }> = ({ useTabs = true }) => {
  return (
    <NavigationContainer>
      {useTabs ? <TabNavigator /> : <StackNavigator />}
    </NavigationContainer>
  );
};

export default NavigationControllerWithTab;
