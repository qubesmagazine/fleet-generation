import { Stack, useNavigation } from 'expo-router';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgortenPassword = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
              <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />
      <Text style={styles.headerText}>Reset Password</Text>
      <Text style={styles.warningText}>Warning: This action cannot be undone.</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Enter new password</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="black"
            secureTextEntry={true}
          />
          <Image
            source={require('../assets/icons/eye.png')}
            style={styles.eyeIcon}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Confirm new password</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="black"
            secureTextEntry={true}
          />
          <Image
            source={require('../assets/icons/eye.png')}
            style={styles.eyeIcon}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // White background for the entire page
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: -150
  },
  warningText: {
    fontSize: 16,
    color: 'red', // Red warning text
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    height: 30
  },
  input: {
    flex: 1,
    color: 'black', // Black text input
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  resetButton: {
    backgroundColor: 'black', // Black background for the reset button
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ForgortenPassword;
