import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import styles from "./Popularjob";
import { COLORS } from "../../../../constants";
import axios from "axios";
import PopularJobCard from "../popularjobcard/PopularJobCard";


const PopularJobs = ({ searchQuery }) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get("https://fleet-deliveryapi.onrender.com/api/job", {
          params: {
            query: 'job',
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
        (delivery.job_city || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (delivery.job_state || '').toLowerCase().includes(searchQuery.toLowerCase())
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
          <PopularJobCard
            delivery={delivery}
            key={`nearby-delivery-${delivery?._id}`}
            handleNavigate={() => router.push(`/job-details/${delivery._id}`)}
          />
        ))}
      </View>
    </View>
  );
}

export default PopularJobs;

