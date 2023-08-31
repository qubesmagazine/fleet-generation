import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import Material Icons from Expo
import { Stack } from 'expo-router';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Okwudili');
  const [surname, setSurname] = useState('Onyido');
  const [phoneNumber, setPhoneNumber] = useState('444-456-7890');
  const [email, setEmail] = useState('okwud@gmail.com');
  const [password, setPassword] = useState('********');

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic here to save the edited fields to your data source
  };

  return (
    <View style={styles.container}>
     <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Profile",
          headerStyle: { backgroundColor: 'white'},
        }}
      />
      <Image
        source={require('../../assets/images/profilephoto.png')} // Replace with your profile photo source
        style={styles.profilePhoto}
      />

      {/* User Information */}
      <View style={styles.userInfo}>
        <View style={styles.field}>
          <Text style={styles.label}>First Name</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={24} color="#dc143c" style={styles.icon} />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
            ) : (
              <Text style={styles.inputText}>{firstName}</Text>
            )}
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Surname</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={24} color="#dc143c" style={styles.icon} />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={surname}
                onChangeText={(text) => setSurname(text)}
              />
            ) : (
              <Text style={styles.inputText}>{surname}</Text>
            )}
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="phone" size={24} color="#dc143c" style={styles.icon} />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
            ) : (
              <Text style={styles.inputText}>{phoneNumber}</Text>
            )}
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="mail" size={24} color="#dc143c" style={styles.icon} />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            ) : (
              <Text style={styles.inputText}>{email}</Text>
            )}
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color="#dc143c" style={styles.icon} />
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
            ) : (
              <Text style={styles.inputText}>{password}</Text>
            )}
          </View>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton} onPress={isEditing ? handleSave : handleEdit}>
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background color set to black
    alignItems: 'center',
    paddingTop: 20,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make the profile photo circular
  },
  userInfo: {
    width: '80%',
  },
  field: {
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  inputText: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: 'black',
  },
  editButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
