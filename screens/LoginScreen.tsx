import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authslice'; // Path to your authSlice
import { RootState } from '../redux/store'; // Path to your store

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state: RootState) => state.auth);

  interface UserLogin {
    email: string;
    password: string;

  }



  const handleLogin = async () => {
    try {
        const payload: UserLogin = {
            email: 'emilys',
            password: 'emilyspass',
          };
       
      await dispatch(loginUser(payload)).unwrap();
      Alert.alert('Login Successful', 'You are now logged in!');
    } catch (err) {
      Alert.alert('Login Failed', error || 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title={status === 'loading' ? 'Logging in...' : 'Login'}
        // onPress={handleLogin}
        onPress={() => {
            throw new Error("Simulated Error!");
          }}
        disabled={status === 'loading'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'pink'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
