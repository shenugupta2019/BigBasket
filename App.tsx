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

import HighPerformanceList from './components/HighPerformanceFlatList'
import ProductsScreen from './screens/ProductsScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import Counter from './screens/Counter'
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import the store
import RegisterScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; 



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
        <ErrorBoundary>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <Counter/>  */}
      {/* <HighPerformanceList/> */}
      {/* <RegisterScreen/> */}
      {/* <ProductsScreen/> */}
      <LoginScreen/>
      
    </SafeAreaView>
    </ErrorBoundary>
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
