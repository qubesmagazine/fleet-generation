import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import Axios for making HTTP requests
import { Stack } from 'expo-router';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      setError(null);

      if (!name || !surname || !phoneNumber || !email || !password) {
        setError('All fields are mandatory.');
        return;
      }

      const response = await axios.post(
        'https://fleet-deliveryapi.onrender.com/api/users/register',
        {
          username: `${name} ${surname}`,
          email,
          password,
        }
      );

      if (response.status === 201) {
        navigation.navigate('Login'); // Navigate to the login page after successful registration
      } else {
        setError('Registration failed. Please check your details.');
      }
    } catch (error) {
      setError('An error occurred while registering. Please try again later.');
      console.error('Error registering:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'Black', color: 'white' },
          headerShadowVisible: false,
          headerTitle: 'Sign Up',
        }}
      />
      <Text style={styles.heading}>Sign Up</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        placeholderTextColor="black"
        value={surname}
        onChangeText={(text) => setSurname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor="black"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    padding: 15
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 40,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    alignSelf: 'center',
  },
});

export default SignUp;







// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Stack } from 'expo-router';

// const SignUp = () => {
//   const navigation = useNavigation();

//   const handleSubmit = () => {
//     // Perform form validation and submission here
//     // Navigate back to the Login page on successful submission
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.container}>
//            <Stack.Screen
//           options={{
//             headerStyle: { backgroundColor: "Black", color: 'white' },
//             headerShadowVisible: false,
//             headerTitle: "Sign Up",
//           }}
//         />
//       <Text style={styles.heading}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor="black"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Surname"
//         placeholderTextColor="black"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone number"
//         placeholderTextColor="black"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="black"
//       />
//       <View style={styles.checkboxContainer}>
//         {/* Radio input */}
//         <TouchableOpacity style={styles.radio}>
//           {/* Add logic to handle radio state */}
//           {/* You can use a library like 'react-native-radio-buttons' for this */}
//         </TouchableOpacity>
//         <Text style={styles.checkboxText}>I have agreed with all terms</Text>
//       </View>
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black', // Set the background color to black
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 40,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingLeft: 10,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   radio: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderColor: 'white',
//     borderWidth: 1,
//     marginRight: 10,
//   },
//   checkboxText: {
//     color: 'white',
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     paddingHorizontal: 70,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default SignUp;
