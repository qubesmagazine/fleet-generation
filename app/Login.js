import { Stack } from "expo-router";
import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EvilIcons from "react-native-vector-icons/EvilIcons"



const Login = ({toggleModal}) => {
  const navigation = useNavigation();


  const handleLogin = () => {
    navigation.navigate("Home", { toggleModal }); 
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "grey" },
            headerShadowVisible: false,
            headerTitle: "Login",
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.logoText}>Fleet</Text>


       <View style={styles.inputContainer}>
          <Image
            source={require("../assets/icons/profi.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
          />
        </View>


        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/icons/lock.png")}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
          />
        </View>

      
        <TouchableOpacity
  style={[styles.signInButton, { borderColor: 'red', borderWidth: 3 }]}
  onPress={() => handleLogin()}
>
  <Text style={[styles.signInButtonText, { color: 'red' }]}>Sign In</Text>
</TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate("ForgortenPassword")}>
  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
</TouchableOpacity>


        <TouchableOpacity
  style={[styles.signUpButton, { borderColor: 'blue', borderWidth: 3 }]}
  onPress={() => navigation.navigate("SignUp")}
>
  <Text style={[styles.signUpButtonText, { color: 'blue' }]}>Sign Up</Text>
</TouchableOpacity>


        <View style={styles.socialIconsContainer}>

          <EvilIcons name="sc-facebook" size={50} color="blue" />
          <EvilIcons name="sc-twitter" size={50} color="lightblue" />
          <EvilIcons name="sc-linkedin" size={50} color="blue" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey", 
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, 
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", // Set the background color of the content container to white
    borderTopLeftRadius: 100, // Add rounded corners for the top left and top right
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100, // Add rounded corners for the top left and top right
    borderBottomRightRadius: 100,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 100,
    padding: 20, // Add padding for spacing
  },
  logoText: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 70,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "70%",
    height: 40,
  },
  inputIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "black",
  },
  signInButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 95,
    paddingVertical: 10,
    borderRadius: 50,
    width: 250,
    borderColor: 'red'
  },
  signInButtonText: {
    color: "red",
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "blue",
    textDecorationLine: "underline",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  signUpButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 95,
    paddingVertical: 10,
    borderRadius: 50,
    width: 250,
  },
  signUpButtonText: {
    color: "blue",
    fontWeight: "bold",
  },
  socialIconsContainer: {
    flexDirection: "row",
  },
  socialIcon: {
    width: 32,
    height: 32,
    marginHorizontal: 10,
    marginTop: 50,
  },
});

export default Login;