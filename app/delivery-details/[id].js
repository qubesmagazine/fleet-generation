

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from './secrets'; // Import your API key
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import DeliveryDetails from './deliverySection';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
  Easing,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
} from 'react-native-reanimated';
import { Stack } from 'expo-router';

const MapScreen = () => {
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
        <DeliveryDetails />
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
  }
});

export default MapScreen;












// import React, { useState, useCallback } from "react";
// import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native";
// import { Stack, useRouter, useSearchParams } from "expo-router";
// import { COLORS, icons, SIZES } from "../../constants";
// import { Company, DeliveryAbout, DeliveryFooter, DeliveryTabs, Specifics, ScreenHeaderBtn } from "../../components";
// import useFetch from "../../hook/useFetch";

// const tabs = ["About", "Qualifications", "Responsibilities"];

// const DeliveryDetails = () => {
//   const params = useSearchParams();
//   const router = useRouter();
//   const itemId = params.id; // Get the item ID from route params

//   const { data, isLoading, error, refetch } = useFetch("search", {
//     _id: itemId,
//   });

//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     refetch();
//     setRefreshing(false);
//   }, []);

//   const selectedCompany = data.find((item) => item._id === itemId);

//   const displayTabContent = () => {
//     switch (activeTab) {
//       case "Qualifications":
//         return (
//           <Specifics
//             title='Qualifications'
//             points={selectedCompany?.company_highlights?.Qualifications ?? ["N/A"]}
//           />
//         );

//       case "About":
//         return (
//           <DeliveryAbout info={selectedCompany?.company_description ?? "No data provided"} />
//         );

//       case "Responsibilities":
//         return (
//           <Specifics
//             title='Responsibilities'
//             points={selectedCompany?.company_highlights?.Responsibilities ?? ["N/A"]}
//           />
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
//     <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerLeft: () => (
//             <ScreenHeaderBtn
//               iconUrl={icons.left}
//               dimension='60%'
//               handlePress={() => router.back()}
//             />
//           ),
//           headerRight: () => (
//             <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
//           ),
//           headerTitle: "",
//         }}
//       />

//       <>
//         <ScrollView showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//         >
//         {isLoading ? (
//           <ActivityIndicator size="large" color={COLORS.primary} />
//         ) : error ? (
//           <Text>Something went wrong</Text>
//         ) : data.length === 0 || !selectedCompany ? (
//           <Text>No data available</Text>
//         ) : (
//           <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
//             <Company
//             companyLogo={selectedCompany.company_logo}
//             companyTitle={selectedCompany.company_title}
//             companyName={selectedCompany.company_name}
//             location={selectedCompany.company_country}
//           />
//             <DeliveryTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
//             {displayTabContent()}
//           </View>
//         )}
//         </ScrollView>
//  <DeliveryFooter url={data[0]?.company_google_link ?? 'https://careers.google.com/jobs/results/'} />
//       </>
//     </SafeAreaView>
//   );
// };

// export default DeliveryDetails;






// import { Stack, useRouter, useSearchParams } from "expo-router";
// import { useCallback, useState } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   ActivityIndicator,
//   RefreshControl,
// } from "react-native";

// import {
//   Company,
//   DeliveryAbout,
//   DeliveryFooter,
//   DeliveryTabs,
//   ScreenHeaderBtn,
//   Specifics,
// } from "../../components";
// import { COLORS, icons, SIZES } from "../../constants";
// import useFetch from "../../hook/useFetch";


// const tabs = ["About", "Qualifications", "Responsibilities"];

// const DeliveryDetails = () => {
//   const params = useSearchParams();
//   const router = useRouter();

//   const { data, isLoading, error, refetch } = useFetch("search", {
//     company_id: params.id,
//   });

//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     refetch()
//     setRefreshing(false)
//   }, []);

//   const selectedCompany = data.find(item => item._id === params.id);

//   const displayTabContent = () => {
//     switch (activeTab) {
//       case "Qualifications":
//         return (
//           <Specifics
//             title='Qualifications'
//             points={selectedCompany?.company_highlights?.Qualifications ?? ["N/A"]}
//           />
//         );

//       case "About":
//         return (
//           <DeliveryAbout info={selectedCompany?.company_description ?? "No data provided"} />
//         );

//       case "Responsibilities":
//         return (
//           <Specifics
//             title='Responsibilities'
//             points={selectedCompany?.company_highlights?.Responsibilities ?? ["N/A"]}
//           />
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>


//  <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerLeft: () => (
//             <ScreenHeaderBtn
//               iconUrl={icons.left}
//               dimension='60%'
//               handlePress={() => router.back()}
//             />
//           ),
//           headerRight: () => (
//             <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
//           ),
//           headerTitle: "",
//         }}
//       />

//       <>
//         <ScrollView showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//         >
      
//       {isLoading ? (
//         <ActivityIndicator size='large' color={COLORS.primary} />
//       ) : error ? (
//         <Text>Something went wrong</Text>
//       ) : data.length === 0 || !selectedCompany ? (
//         <Text>No data available</Text>
//       ) : (
//         <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
//           <Company
//             companyLogo={selectedCompany.company_logo}
//             companyTitle={selectedCompany.company_title}
//             companyName={selectedCompany.company_name}
//             location={selectedCompany.company_country}
//           />

//           <DeliveryTabs
//             tabs={tabs}
//             activeTab={activeTab}
//             setActiveTab={setActiveTab}
//           />

//           {displayTabContent()}
//         </View>
//       )}
// </ScrollView>

//  <DeliveryFooter url={data[0]?.company_google_link ?? 'https://careers.google.com/jobs/results/'} />
//  </>
//     </SafeAreaView>
//   );
// };

// export default DeliveryDetails;





















// import { Stack, useRouter, useSearchParams } from "expo-router";
// import { useCallback, useState } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   ActivityIndicator,
//   RefreshControl,
// } from "react-native";

// import {
//   Company,
//   DeliveryAbout,
//   DeliveryFooter,
//   DeliveryTabs,
//   ScreenHeaderBtn,
//   Specifics,
// } from "../../components";
// import { COLORS, icons, SIZES } from "../../constants";
// import useFetch from "../../hook/useFetch";


// const tabs = ["About", "Qualifications", "Responsibilities"];

// const DeliveryDetails = () => {
//   const params = useSearchParams();
//   const router = useRouter();

//   const { data, isLoading, error, refetch } = useFetch("search", {
//     company_id: params.id,
//   });

//   console.log(data);

//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [refreshing, setRefreshing] = useState(false);

//   const onRefresh = useCallback(() => {
//     setRefreshing(true);
//     refetch()
//     setRefreshing(false)
//   }, []);


//   const displayTabContent = () => {
//     switch (activeTab) {
//       case "Qualifications":
//         return (
//           <Specifics
//             title='Qualifications'
//             points={data[0].company_highlights?.Qualifications ?? ["N/A"]}
//           />
//         );

//       case "About":
//         return (
//           <DeliveryAbout info={data[0].company_description ?? "No data provided"} />
//         );

//       case "Responsibilities":
//         return (
//           <Specifics
//             title='Responsibilities'
//             points={data[0].company_highlights?.Responsibilities ?? ["N/A"]}
//           />
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
//       <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           headerBackVisible: false,
//           headerLeft: () => (
//             <ScreenHeaderBtn
//               iconUrl={icons.left}
//               dimension='60%'
//               handlePress={() => router.back()}
//             />
//           ),
//           headerRight: () => (
//             <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
//           ),
//           headerTitle: "",
//         }}
//       />

//       <>
//         <ScrollView showsVerticalScrollIndicator={false}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//         >
//           {isLoading ? (
//             <ActivityIndicator size='large' color={COLORS.primary} />
//           ) : error ? (
//             <Text>Something went wrong</Text>
//           ) : data.length === 0 ? (
//             <Text>No data available</Text>
//           ) : (
//             <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
//               <Company
//                 companyLogo={data[0].company_logo}
//                 companyTitle={data[0].company_title}
//                 companyName={data[0].company_name}
//                 location={data[0].company_country}
//               />

//               <DeliveryTabs
//                 tabs={tabs}
//                 activeTab={activeTab}
//                 setActiveTab={setActiveTab}
//               />

//               {displayTabContent()}
//             </View>
//           )}
//         </ScrollView>

//         <DeliveryFooter url={data[0]?.company_google_link ?? 'https://careers.google.com/jobs/results/'} />
//       </>
//     </SafeAreaView>
//   );
// };

// export default DeliveryDetails;