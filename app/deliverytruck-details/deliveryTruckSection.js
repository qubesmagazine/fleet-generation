

import React, { useState, useCallback } from "react";
import { View, Text, SafeAreaView, ActivityIndicator, RefreshControl, TouchableOpacity, Linking  } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';
import ScreenHeaderBtn from "../../components/header/ScreenHeaderBtn";
import Company from "../../deliverydetails/company/Company";


const DeliveryTruckSection = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const itemId = params.id;



  const { data, isLoading, error, refetch } = useFetch("truck", {
    _id: itemId,
  });


  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const selectedCompany = data.find((item) => item._id === itemId);

  const handleButtonClick = () => {
    // Use the Linking API to open the phone dialer with the phone number
    Linking.openURL(`tel:${"09067561649"}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, borderRadius: 50 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />
      <View
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 || !selectedCompany ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                   <Company
            companyLogo={selectedCompany.company_logo}
            companyTitle={selectedCompany.company_title}
            companyName={selectedCompany.company_name}
            location={selectedCompany.company_country}
          />
            <View style={{ flexDirection: 'column', alignItems: 'center', borderColor: '#dc143c' }}>
           
            <View style={{ padding: 10, borderWidth: 3 }}>
  
  <Text style={{fontSize: 14}}>This logistics company offers international and 
  domestic door-to-door shipping services for 
  both businesses and individuals. Their services encompass customs clearance, supply chain management, 
  freight forwarding, air and sea cargo shipping. Their services encompass customs clearance, supply chain management, 
  freight forwarding, air and sea cargo shipping. 
  .</Text>
  <Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
              <View>
              <Icon name="truck-delivery" size={50} color="green" /> 
              </View>
            </Animatable.View>
  </View>
</View>


            <TouchableOpacity
              style={{ backgroundColor: 'transparent', padding: 10, alignItems: 'center', margin: 20, borderRadius: 50, marginTop: 30, borderWidth: 5 }}
              onPress={handleButtonClick}
            >
       <Icon name="phone" size={30} color="red" /> 
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DeliveryTruckSection;
