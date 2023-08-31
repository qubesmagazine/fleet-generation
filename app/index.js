import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";


const WelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const translateY = new Animated.Value(-200);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    if (!isLoading) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isLoading]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Stack.Screen
            options={{
              headerStyle: { backgroundColor: "black" },
              headerShadowVisible: false,
              headerTitle: "",
            }}
          />
          <ActivityIndicator size="large" color="red" />
          <Text style={styles.loadingText}>Welcome To Fleet</Text>
        </View>
      ) : (
        <>
          <Animated.View style={[styles.iconContainer, { transform: [{ translateY }] }]}>
            <Icon name="bike-fast" size={40} color="red" style={styles.icon} />
          </Animated.View>
          <Text style={styles.welcomeText}>Fleet</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate("WelcomeNext")}
          >
            <Text style={styles.buttonText}>
              Get Started
              </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 40,
    backgroundColor: 'black',
  },
  welcomeText: {
    fontSize: 80,
    color: 'white',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 45,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  loadingText: {
    marginTop: 10,
    color: 'white',
    fontWeight: "bold",
    fontSize: 30
  },
});

export default WelcomeScreen;






