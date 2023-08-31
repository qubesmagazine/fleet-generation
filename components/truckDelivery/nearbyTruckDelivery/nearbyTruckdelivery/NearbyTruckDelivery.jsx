

import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import styles from "./NearbyTruckDeliverycss"
import {COLORS} from "../../../../constants"

import useFetch from '../../../../hook/useFetch'
import NearbyTruckDeliveryCard from "../nearbydeliverycard/NearbyTruckDeliveryCard";




const NearbyTruckDelivery = () => {
  const router = useRouter();


  const { data, isLoading, error } = useFetch("truck", {
    query: 'Delivery',
    num_pages: 1,
  });

// console.log(data)

  return (

    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headerTitle}>Dispatch Riders</Text>
    <TouchableOpacity>
      <Text style={styles.headerBtn}>Show all</Text>
    </TouchableOpacity>
    </View>
<View style={styles.cardsContainer}>
{isLoading ? (
<ActivityIndicator size="large" colors={COLORS.primary}/>
) : error ? (

<Text>Something went wrong</Text>

) : (
data?.map((delivery) => (
<NearbyTruckDeliveryCard
delivery={delivery}
key={`nearby-delivery-${delivery?._id}`}
handleNavigate={() => router.push(`/deliverytruck-details/${delivery._id}`)} />
))
)}

</View>
    </View>
    
  )
}

export default NearbyTruckDelivery 