import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from 'expo-router';
import styles from "./NearbyJobcss"
import {COLORS} from "../../../../constants"
import useFetch from '../../../../hook/useFetch'
import NearbyJobCard from "../nearbyjobcard/NearbyJobCard";





const Nearbyjobs = () => {
  const router = useRouter();


  const { data, isLoading, error } = useFetch("job", {
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
<NearbyJobCard
delivery={delivery}
key={`nearby-delivery-${delivery?._id}`}
handleNavigate={() => router.push(`/job-details/${delivery._id}`)} />
))
)}

</View>
    </View>
    
  )
}

export default Nearbyjobs



















