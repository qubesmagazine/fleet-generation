

import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./NearbyTruckDeliveryCardcss";
// import { checkImageURL } from "../../../../../utils";

const NearbyTruckDeliveryCard = ({ delivery, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
      <Image
          source={{ uri: delivery.company_logo }} 
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.deliveryName} numberOfLines={1}>
          {delivery?.company_title}
        </Text>

        <Text style={styles.deliveryType}>{delivery?.company_employment_type}</Text>
        <Text style={styles.deliveryType}>{delivery?.company_city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyTruckDeliveryCard ;
