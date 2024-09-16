import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

// Define form validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface UserRegistration {
    firstName: string;
    lastName: string;
    age:number
  }

// Define types for the form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

const RegisterScreen: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Function to handle the form submission
  const onSubmit = async (data: FormData) => {
    try {
        const payload: UserRegistration = {
            firstName: 'shenu',
            lastName: 'gupta',
            age:24
          };
        
      const response = await axios.post('https://dummyjson.com/users/add', payload); 
      console.log('the registration flow successfull')
      // Replace with your API URL
      console.log('User registered successfully', response.data);
      // Handle success (e.g., navigate to login screen or dashboard)
    } catch (error) {
        console.log('the registration flow failed')
      console.error('Error registering user', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <View style={{ margin:0,backgroundColor:'red' }}>
      <Button  title="Register" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor:'green'
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
  btnStyle:{
    marginTop:50
  }
});

export default RegisterScreen;

