import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';

const Tab = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: "bike-fast", section: "DeliveryOne" },
    { icon: "truck-delivery", section: "DeliveryTwo" },
    { icon: "briefcase", section: "JobAvailability" },
  ];

  const renderItem = ({ item, index }) => {
    const isActive = index === activeTab;
  
    return (
      <TouchableOpacity
        style={[styles.tab, isActive ? styles.activeTab : {}]}
        onPress={() => {
          setActiveTab(index);
          router.push(`/TabsComponent/${item.section}`);
        }}
      >
        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          style={styles.tabIconContainer}
        >
          <Icon
            name={item.icon}
            size={30}
            color={isActive ? "white" : "black"}
            style={styles.tabIcon}
          />
        </Animatable.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use index as the key
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 1,
  },
  tab: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "transparent",
    width: 120,
    borderColor: 'red',
    borderWidth: 3,
    marginLeft: 5,
  },
  tabIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 30,
    height: 30,
  },
  activeTab: {
    backgroundColor: "#dc143c",
  },
});

export default Tab;
