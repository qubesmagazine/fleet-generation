import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons"; 
import {  Stack } from "expo-router";
import * as Animatable from 'react-native-animatable';
import Tab from "./TabsComponent/Tab";
import WelcomeFront from "./TabsComponent/WelcomeFront";
import PopularDelivery from "../components/popular/populardelivery/PopularDelivery";
import { useRouter } from 'expo-router';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Nearbydelivery from "../components/RatedDeliveries/nearby/Nearbydelivery";
import WelcomeModal from "./WelcomeModal";

const Home = ({ navigation, route }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalVisible, setModalVisible] = useState(true);
  const toggleModalFunction = route ? route.toggleModal : null; 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  const toggleModal = () => {
    if (toggleModalFunction) {
      toggleModalFunction(); 
    }
  };
  

  return (
    <ImageBackground
    source={require('../assets/images/original1.jpg')}
    style={styles.backgroundImage}
  >
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#dcdcdc' },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={toggleMenu} style={{ marginLeft: 15 }}>
              <EvilIcons name="navicon" size={30} color="#dc143c" /> 
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/sidemenu/Profile')} style={styles.menuItem}>
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
                style={styles.icon}
              >
              <View>
                <EvilIcons name="user" size={30} color="#dc143c" /> 
              </View>
            </Animatable.View>
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 20 }}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for dispatch riders ....."
              placeholderTextColor="black"
              onChangeText={(text) => setSearchQuery(text)} 
              value={searchQuery} 
            />
            <TouchableOpacity style={styles.searchIcon}>
              <Icon name="magnify" size={35} color="black" />
            </TouchableOpacity>
          </View>
          {searchQuery ? (
            <PopularDelivery searchQuery={searchQuery} /> 
          ) : (
            <>
              <Tab/>
              <WelcomeFront />
         
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.nearbyDeliveryScroll}
              >
                <Nearbydelivery />
              </ScrollView>
            
            </>
          )}
        </View>
      </ScrollView>
 {isMenuOpen && (
        <View style={styles.sideMenu}>

<Animatable.View
                animation="pulse"
                iterationCount="infinite"
             
              >

       
          <TouchableOpacity onPress={() => router.push('/sidemenu/About')} style={styles.menuItem}>
            <View style={styles.menuItemInner}>
              <Icon name="information" size={24} color="#dc143c" style={styles.icon} />
              <Text style={styles.menuText}>About</Text>
            </View>
            <View style={styles.menuItem}>
  <View style={styles.textContainer}> 
    <Text>Our company specializes in providing dispatch rider services.</Text>
  </View>
</View>
          </TouchableOpacity>
          </Animatable.View>


          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
             
              >

          <TouchableOpacity 
          onPress={() => router.push('/sidemenu/Donnation')} 
          
          style={styles.menuItem}>
            <View style={styles.menuItemInner}>
              <EvilIcons name="credit-card" size={24} color="#dc143c"  style={styles.icon} />
              <Text style={styles.menuText}>Payment</Text>
            </View>
            <View style={styles.menuItem}>
  <View style={styles.textContainer}> 
    <Text>Your generous contributions make a meaningful impact on our mission.</Text>
  </View>
</View>
          </TouchableOpacity>

          </Animatable.View>

          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
             
              >

          <TouchableOpacity onPress={() => router.push('/sidemenu/Contact')} style={styles.menuItem}>
            <View style={styles.menuItemInner}>
              <EvilIcons name="envelope" size={24} color="#dc143c"   style={styles.icon} />
              <Text style={styles.menuText}>Contact</Text>
            </View>
            <View style={styles.menuItem}>
  <View style={styles.textContainer}> 
    <Text>Feel free to reach out to us through any of our contact details by clicking the button.</Text>
  </View>
</View>
          </TouchableOpacity>

          </Animatable.View>

          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
             
              >

          <TouchableOpacity onPress={() => router.push('/sidemenu/Profile')} style={styles.menuItem}>
            <View style={styles.menuItemInner}>
              <EvilIcons name="user" size={24} color="#dc143c"  style={styles.icon} />
              <Text style={styles.menuText}>Profile</Text>
            </View>
            <View style={styles.menuItem}>
  <View style={styles.textContainer}> 
    <Text>Creating and editing your profile details is an essential aspect of personalizing your online presence.</Text>
  </View>
</View>
          </TouchableOpacity>

          </Animatable.View>

          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
             
              >

          <TouchableOpacity onPress={() => router.push('/sidemenu/Calender')} style={styles.menuItem}>
            <View style={styles.menuItemInner}>
              <EvilIcons name="calendar" size={24} color="#dc143c"  style={styles.icon} />
              <Text style={styles.menuText}>Calender</Text>
            </View>
            <View style={styles.menuItem}>
  <View style={styles.textContainer}> 
    <Text>Click the button to view important dates and events.</Text>
  </View>
</View>
          </TouchableOpacity>

          </Animatable.View>

          <Animatable.View
                animation="pulse"
                iterationCount="infinite"
             
              >

          <TouchableOpacity onPress={() => router.push('/sidemenu/Settings')} style={styles.menuItem}>
            <View style={styles.menuItemInner}>
              <EvilIcons name="gear" size={24} color="#dc143c"  style={styles.icon} />
              <Text style={styles.menuText}>Settings</Text>
            </View>
            <View style={styles.menuItem}>
  <View style={styles.textContainer}> 
    <Text> Explore more of our settings to customize your experience by visiting Fleet platforms.</Text>
  </View>
</View>
          </TouchableOpacity>

          </Animatable.View>

        </View>
      )}

    
      <WelcomeModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your requirements
  },
  sideMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 400,
    height: 780,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'column',
    alignItems: 'start',
    marginLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  textContainer: { 
    borderWidth: 2, 
    borderColor: '#dc143c',
    borderRadius: 10, 
    padding: 10,
    paddingRight: 10,
    marginRight: 0,
  },
  menuItemInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    
  },
  menuText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  searchContainer: {
    backgroundColor: `#dcdcdc`,
    height: 70,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: 'black',
    paddingHorizontal: 20,
    
  },
  searchIcon: {
    padding: 10,
  },
  nearbyDeliveryScroll: {
    maxHeight: 400, 
  },



});

export default Home;
