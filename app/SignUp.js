import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';

const SignUp = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Perform form validation and submission here
    // Navigate back to the Login page on successful submission
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
           <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "Black", color: 'white' },
            headerShadowVisible: false,
            headerTitle: "Sign Up",
          }}
        />
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
      />
      <View style={styles.checkboxContainer}>
        {/* Radio input */}
        <TouchableOpacity style={styles.radio}>
          {/* Add logic to handle radio state */}
          {/* You can use a library like 'react-native-radio-buttons' for this */}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>I have agreed with all terms</Text>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set the background color to black
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    marginRight: 10,
  },
  checkboxText: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUp;
