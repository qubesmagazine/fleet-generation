import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
} from 'react-native';
import DonnationBank from './DonnationBank';
import { Stack } from 'expo-router';

const Donation = ({
  setAccountNumber,
  setBankName,
  setAmount,
  handleToggleModal,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [Number, setNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);



  const handleSubmit = () => {
    setIsPaymentProcessing(true);

    // Simulate payment processing for 5 seconds
    setTimeout(() => {
      setIsPaymentProcessing(false);
      setIsModalVisible(true);
    }, 500);
  };

  // Use useEffect to automatically close the modal after 5 seconds
  useEffect(() => {
    if (isModalVisible) {
      const modalTimer = setTimeout(() => {
        setIsModalVisible(false);
      }, 5000);

      return () => clearTimeout(modalTimer);
    }
  }, [isModalVisible]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Payment",
          headerStyle: { backgroundColor: '#f5f5f5' },
        }}
      />
      <View style={styles.halfContainer}>
     

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={Number}
            onChangeText={(number) => {
              // Use regular expression to remove non-numeric characters
              const numericValue = number.replace(/[^0-9]/g, '');
              setNumber(numericValue); // Update the Number state variable
            }}
            keyboardType="numeric" // This restricts the input to only accept numeric values
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <View style={styles.cardNumberContainer}>
          <Image source={require('../../assets/images/credit-card.png')} style={styles.cardIcon} />
          <TextInput
          style={styles.cardInput}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric" // This restricts the keyboard to show only numbers
        />
        </View>
        <View style={styles.cvvContainer}>
          <Image source={require('../../assets/images/credit-card.png')} style={styles.cardIcon} />
          <TextInput
          style={styles.cardInput}
          placeholder="CVV"
          value={cvv}
          onChangeText={(text) => setCvv(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
        />
        </View>
        <View style={styles.cardExpContainer}>
          <Text style={styles.expText}>Exp Date </Text>
          <TextInput
            style={styles.cardInput}
            placeholder="MM"
            value={expiryMonth}
            onChangeText={(text) => setExpiryMonth(text.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.cardInput}
            placeholder="YY"
            value={expiryYear}
            onChangeText={(text) => setExpiryYear(text.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.cardImages}>
          <Image source={require('../../assets/images/visa.png')} style={styles.cardImage} />
          <Image source={require('../../assets/images/mastercard.png')} style={styles.cardImage} />
          <Image source={require('../../assets/images/paypal.png')} style={styles.cardImage} />
        </View>

        <TouchableOpacity style={styles.paymentButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Payment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.halfContainer}>
      <DonnationBank
  setAccountNumber={setAccountNumber}
  setBankName={setBankName}
  setAmount={setAmount}
  handleToggleModal={handleToggleModal}
/>

      </View>

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {isPaymentProcessing ? (
            <ActivityIndicator size="large" color="green" />
          ) : (
            <View>
              <Text style={styles.modalText}>
                Payment confirmation will be sent to your email.
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Use flexGrow to allow content to exceed the screen height and make scrolling work
    flexDirection: 'column',
  },
  halfContainer: {
    flex: 1,
    padding: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    height: 50, // Increase the height for better usability
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cvvContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardExpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expText: {
    fontSize: 18,
  },
  cardIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  cardInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cardImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardImage: {
    width: 50,
    height: 30,
  },
  paymentButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Donation;

