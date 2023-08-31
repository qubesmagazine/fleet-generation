import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image } from 'react-native'; // Import Image component
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';



const About = () => {
  
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "About",
        }}
      />

        <View style={styles.iconContainer}>
          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
            <Icon name="bike-fast" size={30} color="#dc143c" />
          </Animatable.View>

          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
            <Icon name="truck-delivery" size={40} color="#dc143c" />
          </Animatable.View>

          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
            <Icon name="briefcase" size={30} color="#dc143c" />
          </Animatable.View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Fleet is your go-to delivery hub app where you can easily search for dispatch riders, dispatch companies, and delivery vans. We also provide a platform for job availability in the delivery sector.
          </Text>
          <Text style={styles.description}>
            With our intuitive icons, you can effortlessly locate bikes, vans, and available delivery jobs in your vicinity:
          </Text>

          <View style={styles.iconDescription}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
            >
              <Icon name="bike-fast" size={30} color="black" />
            </Animatable.View>
            <Text style={styles.iconText}>- Dispatch Riders</Text>
          </View>

          <View style={styles.iconDescription}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
            >
              <Icon name="truck-delivery" size={40} color="black" />
            </Animatable.View>
            <Text style={styles.iconText}>- Dispatch Companies and Delivery Vans</Text>
          </View>

          <View style={styles.iconDescription}>
            <Animatable.View
              animation="pulse"
              iterationCount="infinite"
            >
              <Icon name="briefcase" size={30} color="black" />
            </Animatable.View>
            <Text style={styles.iconText}>- Job Availability</Text>
          </View>

          <Text style={styles.description}>
            Fleet simplifies transportation by allowing you to locate and connect with dispatch riders and companies through Google Maps. 🗺 
            This means you can conveniently pick up and deliver goods to your preferred destinations.
          </Text>

          <Text style={styles.description}>
            Say goodbye to relying on a single delivery option when you can easily find all delivery companies near you. Fleet makes transportation a breeze!
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 10
  },
 
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color: 'black',
    borderWidth: 2,
    padding: 10,
    borderColor: '#dc143c'
  },
  imageContainer: {
    alignItems: 'center', // Center the image horizontally
    marginTop: 20,
  },
  centeredImage: {
    width: 150, // Adjust the width and height as needed
    height: 150,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
  iconDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
});

export default About;
