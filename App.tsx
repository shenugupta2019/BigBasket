/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavigationController from './navigation/NavigationControllerWithTab';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import NavigationControllerWithTab from './navigation/NavigationControllerWithTab';


import HighPerformanceList from './components/HighPerformanceFlatList'
import CategoriesList from './screens/category/CategoriesList'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import Counter from './screens/Counter'
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import the store
import RegisterScreen from './screens/RegistrationScreen';
import ExampleScreen from './screens/ExampleScreen';
import LoginScreen from './screens/LoginScreen';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; 
import { Alert } from 'react-native';
import RNRestart from 'react-native-restart'; 
import TodoListScreen from './screens/TodoListScreen';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function App(): React.JSX.Element {

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
  
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  const HomeStack = createNativeStackNavigator();
  
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={CategoriesList} />
        <HomeStack.Screen name="Details" component={ProductDetailsScreen} />
      </HomeStack.Navigator>
    );
  }
  
  const SettingsStack = createNativeStackNavigator();
  
  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
        <SettingsStack.Screen name="Details" component={DetailsScreen} />
      </SettingsStack.Navigator>
    );
  }
  
  const Tab = createBottomTabNavigator();


// Set the global error handler
ErrorUtils.setGlobalHandler((error, isFatal) => {
  console.error("Global error caught:", error);

  if (isFatal) {
    // Show an alert for fatal errors
    Alert.alert(
      'Unexpected error occurred',
      `
        Error: ${(error as Error).message}
        The app will be restarted to fix this issue.
      `,
      [
        {
          text: 'Restart',
          onPress: () => {
            // Optionally restart the app (you can use RNRestart for this)
            RNRestart.Restart();
          },
        },
      ]
    );
  } else {
    // For non-fatal errors, just log the error or handle it in another way
    console.warn("Non-fatal error:", error);
  }
});
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // process.on('unhandledRejection', (reason, promise) => {
  //   console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  //   // Optionally log or send this to a remote error monitoring service
  // });
  
  return (
    <Provider store={store}>
        {/* <ErrorBoundary> */}
      {/* <NavigationControllerWithTab useTabs={true}/> */}
      <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="SettingsStack" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  
    {/* </ErrorBoundary> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
