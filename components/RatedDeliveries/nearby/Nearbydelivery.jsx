

import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import styles from "./nearbydelivery.style"
import {COLORS} from "../../../constants"
import NearbyDeliveryCard from '../nearbycard/NearbyDeliveryCard'
import useFetch from '../../../hook/useFetch'




const Nearbydelivery = () => {
  const router = useRouter();


  const { data, isLoading, error } = useFetch("search", {
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
<NearbyDeliveryCard 
delivery={delivery}
key={`nearby-delivery-${delivery?._id}`}
handleNavigate={() => router.push(`/delivery-details/${delivery._id}`)} />
))
)}

</View>
    </View>
    
  )
}

export default Nearbydelivery 