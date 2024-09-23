import { HomeStackParamList } from './HomeStackParamList'; // Define the HomeStack params elsewhere

// // Define Tab Navigator param list with HomeTab and nested stack
// export type TabParamList = {
//   HomeTab: {
//     screen: keyof HomeStackParamList; // Allows navigating to any screen in HomeStack
//     params: HomeStackParamList[keyof HomeStackParamList]; // Pass params for that screen
//   };
//   SettingsTab: undefined;  // Settings tab doesn't have params
// };

// Tab navigator
export type TabParamList = {
    HomeTab: undefined; // HomeTab does not require parameters
    SettingsTab: undefined; // SettingsTab does not require parameters
  };
