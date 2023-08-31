import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Image, // Import Image component
} from "react-native";


const WelcomeModal = ({ isModalVisible, setModalVisible }) => {
  return (
    
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        
        <ScrollView contentContainerStyle={styles.modalContent}>
          {/* Replace text with image components */}
          <Image
            source={require("../assets/images/Fleetbrand.jpg")} // Replace with your bike icon asset
            style={styles.iconImage}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    marginTop: 100,
    paddingTop: 50,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalCloseText: {
    fontSize: 18,
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
  iconImage: {
    width: 300, // Set the width and height to your desired size
    height: 600,
    marginBottom: 10,
  },
});

export default WelcomeModal;
