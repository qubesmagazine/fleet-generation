import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import styles from "./PopularTruckDeliverycss";
import { COLORS } from "../../../../constants";
import axios from "axios";
import PopularTruckDeliveryCard from "../popularTruckdeliverycard/PopularTruckDeliveryCard";

const PopularTruckDelivery = ({ searchQuery }) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("https://fleet-deliveryapi.onrender.com/api/truck", {
          params: {
            query: 'Delivery',
            num_pages: 1,
          },
        });
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Check if data is undefined or null before filtering
  const filteredData = data
  ? data.filter((delivery) =>
      (
        (delivery.company_city || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (delivery.company_state || '').toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  : [];


  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all Available</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {filteredData.map((delivery) => (
          <PopularTruckDeliveryCard
            delivery={delivery}
            key={`nearby-delivery-${delivery?._id}`}
            handleNavigate={() => router.push(`/deliverytruck-details/${delivery._id}`)}
          />
        ))}
      </View>
    </View>
  );
}

export default PopularTruckDelivery;
