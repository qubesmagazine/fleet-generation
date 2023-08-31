
import React, { useState, useCallback } from "react";
import { View, Text, SafeAreaView, ActivityIndicator, RefreshControl, TouchableOpacity, Linking, ScrollView  } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import Company from "../../deliverydetails/companyjob/Company";
import Tabs from "../../deliverydetails/tabs/Tabs";
import Specifics from "../../deliverydetails/specifics/Specifics";
import About from "../../deliverydetails/about/About";
import Footer from "../../deliverydetails/footer/Footer";





const tabs = ["About", "Qualifications", "Responsibilities"];


const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const itemId = params.id;


  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data, isLoading, error, refetch } = useFetch("job", {
    _id: itemId,
  });


  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const selectedCompany = data.find((item) => item._id === itemId);


  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <About info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, borderRadius: 50 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: true,
          headerTitle: "",
        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
            companyLogo={selectedCompany.employer_logo}
            companyTitle={selectedCompany.job_title}
            companyName={selectedCompany.employer_name}
            location={selectedCompany.job_country}
          />
            
            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <Footer url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;

