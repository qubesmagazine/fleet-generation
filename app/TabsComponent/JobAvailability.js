import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Stack } from "expo-router";
import Nearbyjobs from "../../components/jobAvailable/nearbyjobavailable/nearbyjob/NearbyJob";
import PopularJobs from "../../components/jobAvailable/popularjob/popularjobavailable/PopularJobs";
import WelcomeJob from "./WelcomeJob";


const DeliveryThree = () => {
  const [searchQuery, setSearchQuery] = useState(""); 

  return (
    <ImageBackground
    source={require('../../assets/images/original3.jpg')}
    style={styles.backgroundImage}
  >
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#dcdcdc' },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search For Job...."
              placeholderTextColor="white"
              onChangeText={(text) => setSearchQuery(text)} 
              value={searchQuery} 
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Icon name="magnify" size={30} color="white" />
            </TouchableOpacity>
          </View>
          {searchQuery ? (
            <PopularJobs searchQuery={searchQuery} /> 
          ) : (
            <View>
            <WelcomeJob/>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.nearbyDeliveryScroll}
              >
                <Nearbyjobs />
              </ScrollView>
   
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'black',
    height: 70,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your requirements
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 20,
  },
  searchIcon: {
    padding: 10,
  },
  contentContainer: {
    marginTop: 20, // Adjust this margin as needed
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nearbyDeliveryScroll: {
    maxHeight: 900, // Set a maximum height for the Nearbydelivery ScrollView
  },
});

export default DeliveryThree;
