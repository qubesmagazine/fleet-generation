

import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./NearbyJobCardcss";
// import { checkImageURL } from "../../../../../utils";

const NearbyJobCard = ({ delivery, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
      <Image
          source={{ uri: delivery.employer_logo }} 
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.deliveryName} numberOfLines={1}>
          {delivery?.job_title}
        </Text>

        <Text style={styles.deliveryType}>{delivery?.job_employment_type}</Text>
        <Text style={styles.deliveryType}>{delivery?.job_city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard ;



