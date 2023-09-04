import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal
} from "react-native";
import React, { useState } from "react";
import Icons from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import { Stack, useRouter } from "expo-router";

const windowHeight = Dimensions.get("window").height;

const Wallet = () => {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [transModalVisible, setranstModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const transtoggleModal = () => {
    setranstModalVisible(!transModalVisible);
  };



  return (
    <ScrollView style={styles.root}>
   <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#154ee7' },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />

      <View style={styles.header}>
        {/* item Header */}

        <View style={styles.headerItems}>
          <TouchableOpacity style={styles.headerItems_item}>
            <Icons
              name="wallet"
              size={30}
              color="red"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.headerItems_text}>Portfolio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerItems_item_inactive}>
            <Icons
              name="wallet"
              size={30}
              color="red"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.headerItems_text_unactive}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Amount  */}
        <View style={styles.accountView}>
          <Text
            style={{
              marginRight: 5,
              fontSize: 40,
              color: "white",
            }}
          >
            {"\u20A6"}
          </Text>
          <Text style={styles.accountText}>2000.00</Text>
        </View>
      </View>

      {/* Top Container */}

      <View style={styles.topViewContainer}>
        <View style={styles.topCard}>
          <View style={styles.topCardRow}>
          <TouchableOpacity style={styles.topCardRow_item} onPress={toggleModal}>
  <Icons name="pluscircleo" size={30} color="#0e39c8" />
  <Text style={styles.topCardRow_item_text}>Deposit</Text>
</TouchableOpacity>
            <TouchableOpacity style={styles.topCardRow_item}  onPress={transtoggleModal}>
              <Icon name="exchange" size={30} color="#0e39c8" />
              <Text style={styles.topCardRow_item_text}>Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* complete transaction */}

      <View style={styles.accountTextContainer}>
        <Text style={styles.accountTextContainer_text}>Transfers</Text>
      </View>

      {/* list of transactions */}

      <View>
        <TouchableOpacity style={styles.accountList_item}>
          <View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dpfu0vwqa/image/upload/t_Profile/v1693674441/bank1_vaid1a.png",
              }}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View style={{ marginLeft: -100 }}>
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              Account Name
            </Text>
            <Text>Description on transaction</Text>
          </View>

          <Icons name="arrowright" size={20} color="#0e39c8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountList_item}>
          <View>
            <Image
              source={{
                uri: "https://res.cloudinary.com/dpfu0vwqa/image/upload/t_Profile/v1693674441/bank4_cyh50e.png",
              }}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <View style={{ marginLeft: -100 }}>
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              Account Name
            </Text>
            <Text>Description on transaction</Text>
          </View>

          <Icons name="arrowright" size={20} color="#0e39c8" />
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <TouchableOpacity style={styles.createAccountContainer_icon_text}>
            <Icons
              name="plus"
              size={20}
              color="#edf1f2"
              style={{ marginRight: 5 }}
            />
            <Text>Deposit Transactions</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.accountTextContainer}>
        <Text style={styles.accountTextContainer_text}>Transactions</Text>
      </View>
<View>
  <TouchableOpacity style={styles.lastTransactionItem}>
<View>
<Text style={styles.lastTransactionItem_text}>Payment</Text>
<Text>{"\u20A6"} 3200</Text>
</View>
<Icons  name='arrowright' color='#154ee7' size={20}/>
  </TouchableOpacity>
</View>
<View>
  <TouchableOpacity style={styles.lastTransactionItem}>
<View>
<Text style={styles.lastTransactionItem_text}>Payment</Text>
<Text>{"\u20A6"} 1700</Text>
</View>
<Icons  name='arrowright' color='#154ee7' size={20}/>
  </TouchableOpacity>
</View>
<View>
  <TouchableOpacity style={styles.lastTransactionItem}>
<View>
<Text style={styles.lastTransactionItem_text}>Payment</Text>
<Text>{"\u20A6"} 2000</Text>
</View>
<Icons  name='arrowright' color='#154ee7' size={20}/>
  </TouchableOpacity>
</View>
<Modal
  animationType="slide"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={toggleModal}
>
  <View style={styles.modalContainer}>
    {/* Content of your modal */}
    <Text style={styles.modalText}>USER ACCOUNT INFO</Text>
    <Text style={{fontWeight: 'bold'}}>Account No: 456788909</Text>
    <Text style={{fontWeight: 'bold'}}>Bank Name: AppBank</Text>
    <Text style={{fontWeight: 'bold'}}>Account Name: Okwudi Danami</Text>
    <Text style={{fontWeight: 'bold'}}>Phone: 09067561649</Text>

    <TouchableOpacity
      style={styles.closeButton}
      onPress={toggleModal}
    >
      <Text style={styles.closeButtonText}>Close</Text>
    </TouchableOpacity>
  </View>
</Modal>

<Modal
  animationType="slide"
  transparent={true}
  visible={transModalVisible}
  onRequestClose={transtoggleModal}
>
  <View style={styles.modalContainerTwo}>
    {/* Content of your modal */}
    <Text style={styles.modalTextTwo}>Transfer</Text>
    <Text style={{ marginBottom: 10 }}>
      Please note that all transfers made through our banking app to accounts
      outside of AppBank will be considered unofficial transactions. Only
      transactions within AppBank can be officially processed. By proceeding
      with this transaction, you agree to these terms and confirm that you are
      initiating a payment to the recipient.
    </Text>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.closeButtontwo} onPress={transtoggleModal}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.transferButton}
        onPress={() => {
          router.push(`/sidemenu/Donnation}`);
        }}
      >
        <Text style={styles.transferButtonText}>Transfer</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>


    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#edf1f2",
  },
  header: {
    backgroundColor: "#154ee7",
    height: windowHeight * 0.3,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20,
  },
  headerItems: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  headerItems_item: {
    flexDirection: "row",
    backgroundColor: "#1d50b1",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,
  },

  headerItems_item_inactive: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginRight: 5,
    borderRadius: 15,
  },

  headerItems_text: {
    color: "#fff",
    paddingTop: 5,
  },

  headerItems_text_unactive: {
    color: "#eee",
    paddingTop: 5,
  },

  accountView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  accountText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },

  topViewContainer: { left: 0, right: 0, height: 90, marginTop: -45 },
  topCard: {
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  topCardRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  topCardRow_item: {
    justifyContent: "center",
    alignItems: "center",
  },
  topCardRow_item_text: {
    fontWeight: "bold",
  },

  accountTextContainer: {
    padding: 15,
    marginTop: 15,
  },

  accountTextContainer_text: {
    color: "#000",
    fontWeight: "bold",
  },

  accountList_item: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#edf1f2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
 
  createAccountContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#edf1f2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },

  createAccountContainer_icon_text: {
   borderWidth: 1,
   borderColor: '#edf1f2',
   flexDirection: 'row',
   padding: 12,
   borderRadius: 30
  },

  lastTransactionItem: {
   backgroundColor: '#fff',
   paddingHorizontal: 15,
   paddingVertical: 15,
   borderBottomWidth: 1,
   borderBottomColor: "#edf1f2",
   flexDirection: "row",
   justifyContent: "space-between",
   alignItems: "center",
  },
  lastTransactionItem_text: {
    fontWeight: 'bold',
    color: '#000'

  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  closeButton: {
    backgroundColor: "#0e39c8",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
  },
  
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  closeButtontwo: {
    backgroundColor: "#0e39c8",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  closeButtonText: {
    color: "white",
    textAlign: "center",
  },
  transferButton: {
    backgroundColor: "#0e39c8",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  transferButtonText: {
    color: "white",
    textAlign: "center",
  },
  modalContainerTwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },  
  
  modalTextTwo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },


});
