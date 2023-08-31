import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';

const NotificationSection = () => {
  // Define state variables for notification settings
  const [bikeDeliveryEnabled, setBikeDeliveryEnabled] = useState(false);
  const [vanDeliveryEnabled, setVanDeliveryEnabled] = useState(false);
  const [jobSearchEnabled, setJobSearchEnabled] = useState(false);

  // Function to toggle notification settings
  const toggleBikeDelivery = () => {
    setBikeDeliveryEnabled(!bikeDeliveryEnabled);
  };

  const toggleVanDelivery = () => {
    setVanDeliveryEnabled(!vanDeliveryEnabled);
  };

  const toggleJobSearch = () => {
    setJobSearchEnabled(!jobSearchEnabled);
  };

  return (
    <View style={styles.container}>
         <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#f5f5f5' },
        }}
      />
      <Text style={styles.title}>Notification Settings</Text>

      <View style={styles.notificationOption}>
        <Text style={styles.optionText}>Bike Delivery</Text>
        <Switch
          value={bikeDeliveryEnabled}
          onValueChange={toggleBikeDelivery}
        />
      </View>

      <View style={styles.notificationOption}>
        <Text style={styles.optionText}>Van Delivery</Text>
        <Switch
          value={vanDeliveryEnabled}
          onValueChange={toggleVanDelivery}
        />
      </View>

      <View style={styles.notificationOption}>
        <Text style={styles.optionText}>Job Search</Text>
        <Switch
          value={jobSearchEnabled}
          onValueChange={toggleJobSearch}
        />
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          // Save notification settings to the server or device storage
          // You can implement the saving logic here
          alert('Notification settings saved');
        }}
      >
        <Text style={styles.saveButtonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default NotificationSection;
