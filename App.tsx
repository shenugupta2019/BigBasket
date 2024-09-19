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
import ExampleScreen from './screens/ExampleScreen';
import LoginScreen from './screens/LoginScreen';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; 
import { Alert } from 'react-native';
import RNRestart from 'react-native-restart'; 



function App(): React.JSX.Element {


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
      {/* <LoginScreen/> */}
      <ExampleScreen/>
      
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
