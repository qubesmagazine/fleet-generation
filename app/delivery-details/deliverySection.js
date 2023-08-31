

import React, { useState, useCallback } from "react";
import { View, Text, SafeAreaView, ActivityIndicator, RefreshControl, TouchableOpacity, Linking  } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import ScreenHeaderBtn from "../../components/header/ScreenHeaderBtn";
import Company from '../../deliverydetails/company/Company'
import EvilIcons from "react-native-vector-icons/EvilIcons"; 
import * as Animatable from 'react-native-animatable';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DeliveryDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const itemId = params.id;

  const { data, isLoading, error, refetch } = useFetch("search", {
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
            <View style={{ flexDirection: 'row', alignItems: 'center' , marginTop: 0, justifyContent: 'between'}}>
            <Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
              <View>
              <EvilIcons name="location" size={30} color="green" /> 
              </View>
            </Animatable.View>
  
  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ikotun - Ijaniki - N2400</Text>
</View>




<View style={{ flexDirection: 'row', alignItems: 'center' , marginTop: 9, justifyContent: 'between'}}>

<Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
              <View>
              <EvilIcons name="location" size={30} color="green" /> 
              </View>
            </Animatable.View>

  
  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ikotun - Ajah - N2400</Text>
</View>


<View style={{ flexDirection: 'row', alignItems: 'center' , marginTop: 9, paddingTop: 5}}>
<Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
              <View>
              <EvilIcons name="location" size={30} color="green" /> 
              </View>
            </Animatable.View>
  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ikotun - Ijaniki - N2400</Text>
</View>

<View style={{ flexDirection: 'row', paddingTop: 2, paddingBottom: 2, paddingRight: 10, paddingLeft: 10 , borderWidth: 3, marginTop: 10, borderColor: '#dc143c' }}>
<Animatable.View
                animation="pulse"
                iterationCount="infinite"
              >
              <View style={{marginTop: 19}}>
              <Icon name="bike-fast" size={30} color="green" /> 
              </View>
            </Animatable.View>
            <View style={{padding: 14}}>
  
  <Text style={{fontSize: 14}}>This logistics company offers 
  domestic door-to-door shipping services 
  .</Text>
  </View>
  </View>

<TouchableOpacity
              style={{ backgroundColor: 'transparent', padding: 10, alignItems: 'center', margin: 20, borderRadius: 50, marginTop: 25, borderWidth: 5 }}
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

export default DeliveryDetails;
