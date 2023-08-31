import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [country, setCountry] = useState('');

  // Function to fetch the user's country based on their IP address (requires an external API)
  const fetchUserCountry = async () => {
    try {
      const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=YOUR_API_KEY');
      const data = await response.json();
      setCountry(data.country_name);
    } catch (error) {
      console.error('Error fetching user country:', error);
    }
  };

  useEffect(() => {
    // Fetch the user's country when the component mounts
    fetchUserCountry();

    // Update the current date and time every second
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <ImageBackground
      source={require('../../assets/images/About.jpg')}
      style={styles.container}
    >
         <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Calender",
        }}
      />
      <View style={styles.content}>
        <Text style={styles.headerText}>Calendar</Text>
        <Text style={styles.infoText}>Date: {formattedDate}</Text>
        <Text style={styles.infoText}>Time: {formattedTime}</Text>
        <Text style={styles.infoText}>Nigeria {country}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    height: '80%',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Calendar;
