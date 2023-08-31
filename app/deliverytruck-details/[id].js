

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import DeliveryTruckSection from './deliveryTruckSection'; // Import your API key
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Animated, {
  Easing,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
} from 'react-native-reanimated';
import { GOOGLE_MAPS_API_KEY } from './secrets';
import { Stack } from 'expo-router';

const MapTruckScreen = () => {
  const navigation = useNavigation();

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(100);

  // Start the animations when the component mounts
  useEffect(() => {
    // Animate opacity with a timing function
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.ease });

    // Animate translateY with a spring function after a delay
    translateY.value = withSequence(
      withTiming(0, { duration: 1000 }),
      withSpring(0, { damping: 2, stiffness: 80 })
    );
  }, []);

  // Define animated styles
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <View style={styles.container}>
       <Stack.Screen
        options={{
            headerShown: false,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        provider={MapView.PROVIDER_GOOGLE} // Use Google Maps provider
        // Pass your API key here
        apiKey={GOOGLE_MAPS_API_KEY}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
        {/* Add more markers as needed */}
      </MapView>

   
      <Animated.View style={[styles.deliveryDetailsContainer, animatedStyle, ]}>
        <DeliveryTruckSection />
      </Animated.View>

      {/* Button for "Picked Up" */}
      <TouchableOpacity
        style={styles.pickUpButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="chevron-left" size={20} color="white" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  deliveryDetailsContainer: {
    position: 'absolute',
    zIndex: 2, // Higher z-index to appear in front of the map
    top: 350, // Adjust top margin as needed
    left: 20, // Adjust left margin as needed
    right: 20, // Adjust right margin as needed
    bottom: 50, // Adjust bottom margin as needed
    borderRadius: 50,
  },
  pickUpButton: {
    position: 'absolute',
    top: 100, // Adjust top margin as needed
    right: 290, // Adjust right margin as needed
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 10,
    width: 80,
    alignItems: 'center'
  },
});

export default MapTruckScreen;




