import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as Animatable from 'react-native-animatable'; // Import Animatable
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const slides = [
  {
    key: 1,
    title: "Welcome to FLeEeT",
    text: "Locate Dispatch Riders",
  },
  {
    key: 2,
    title: "Title 2",
    text: "Locate Dispatch Companies",
    backgroundColor: "white",
  },
  {
    key: 3,
    title: "Rocket guy",
    text: "Search For Delivery Jobs",
    backgroundColor: "white",
  },
];export default function WelcomeNext() {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSlide < 2) {
        setActiveSlide(activeSlide + 1);
      } else {
        setLoading(false); // Stop loading when all slides have been shown
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, [activeSlide]);

  const renderItem = ({ item }) => (
    <View style={[styles.container, { backgroundColor: item.backgroundColor || "white" }]}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View style={styles.main}>
        {loading ? ( 
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="blue" />
            <Text style={styles.loadingText}>Let's Get Started</Text>
          </View>
        ) : (
          <>
            <View style={styles.titleContainer}>
              <Animatable.View
                animation="pulse" 
                iterationCount="infinite" 
                style={styles.icon}
              >
                <Text style={styles.text}> 
                  {item.text}
                  <Icon name="arrow-right" size={20} color="blue" />
                </Text>
              </Animatable.View>
            </View>
          
            {item.key === 3 ? (
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            ) : null}
          </>
        )}
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      showNextButton={false}
      showDoneButton={false}
      activeDotStyle={{ backgroundColor: "red" }}
      dotStyle={{ backgroundColor: "gray" }}
      onSlideChange={(index) => setActiveSlide(index)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  nextButton: {
    position: "absolute",
    bottom: 300,
    left: 27,
    backgroundColor: "black", // Set the background color you prefer
    paddingVertical: 11,
    paddingHorizontal: 100,
    borderRadius: 50,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    fontSize: 24,           // Adjust the font size as needed
    marginLeft: 10,         // Add space between the text and icon
    textAlign: "center",    // Center the text horizontally
  },

  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  
  loadingText: {
    fontSize: 18,
    marginTop: 10, // Add space between the ActivityIndicator and text
  },

});




