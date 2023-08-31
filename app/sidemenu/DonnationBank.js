import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';

const DonnationBank = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [amount, setAmount] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  
  
  
    const handleToggleModal = () => {
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
    <View>
      <Text style={styles.header}>Bank Transfer Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={(number) => {
            const numericValue = number.replace(/[^0-9]/g, '');
            setAccountNumber(numericValue);
          }}
          keyboardType="numeric" 
      />
      <TextInput
        style={styles.input}
        placeholder="Bank Name"
        value={bankName}
        onChangeText={(text) => setBankName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={(number) => {
            const numericValue = number.replace(/[^0-9]/g, '');
             setAmount(numericValue);
          }}
          keyboardType="numeric" 
      />
      <Text style={styles.note}>Note: The payment you're about to make will not be reversed.</Text>
      <TouchableOpacity style={styles.paymentButton} onPress={handleToggleModal}>
          <Text style={styles.buttonText}>Submit Payment</Text>
        </TouchableOpacity>
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

      <View>
        <Text style={styles.cautionText}>
          <Text style={styles.cautionTitle}>Credit Card Payment Caution:</Text>{"\n"}
          Paying with a credit card online is convenient, but safety matters. Here's what you need to know:{"\n\n"}

          <Text style={styles.cautionPoint}>Double-Check Everything:</Text> Always review transaction details, like the amount and the seller's name, to avoid surprises.{"\n"}

          <Text style={styles.cautionPoint}>Seek Security:</Text> Look for the padlock symbol and "https://" in the URL when entering card info. Stick to reputable websites.{"\n"}

          <Text style={styles.cautionPoint}>Shop Smart:</Text> Stick with known online stores to dodge scams.{"\n"}

          <Text style={styles.cautionPoint}>Guard Details:</Text> Never share your card info via email or chat. Legit businesses won't ask for it that way.{"\n"}

          <Text style={styles.cautionPoint}>Statement Scan:</Text> Regularly examine card statements for odd or unauthorized transactions. Report issues promptly.{"\n"}

          <Text style={styles.cautionPoint}>Lock It Down:</Text> Use strong, unique passwords for online accounts. A password manager can help.{"\n"}

          <Text style={styles.cautionPoint}>Tech Safeguard:</Text> Keep devices secure with up-to-date antivirus software to fend off malware and phishing.{"\n"}

          <Text style={styles.cautionPoint}>Alert Your Bank:</Text> Notify your card issuer about online shopping plans, especially for international buys.{"\n"}

          <Text style={styles.cautionPoint}>Keep Records:</Text> Save emails, receipts, and transaction info. They're handy for resolving disputes.{"\n"}

          <Text style={styles.cautionPoint}>Report Suspicion:</Text> If you spot fishy card activity, contact your bank right away.{"\n\n"}

          <Text style={styles.cautionTitle}>Bank Transfer Payment Caution:</Text>{"\n"}
          Transferring money is common, but security is key. Take these steps:{"\n\n"}

          <Text style={styles.cautionPoint}>Check Twice:</Text> Verify recipient details, ensuring the account and name are correct.{"\n"}

          <Text style={styles.cautionPoint}>Use Official Channels:</Text> Stick to bank-offered, secure transfer methods; avoid third-party platforms.{"\n"}

          <Text style={styles.cautionPoint}>Save Records:</Text> Keep payment confirmations or receipts as proof.{"\n"}

          <Text style={styles.cautionPoint}>Watch for Scams:</Text> Be cautious of unsolicited requests for banking details.{"\n"}

          <Text style={styles.cautionPoint}>Limit Awareness:</Text> Know your daily or transaction limits to avoid issues.{"\n"}

          <Text style={styles.cautionPoint}>Mind Currency Rates:</Text> Understand conversion rates and fees for international transfers.{"\n"}

          <Text style={styles.cautionPoint}>Secure Credentials:</Text> Keep online banking info confidential and use strong, unique passwords.{"\n"}

          <Text style={styles.cautionPoint}>Two-Factor Verify:</Text> Enable two-factor authentication for added security.{"\n"}

          <Text style={styles.cautionPoint}>Quick Reporting:</Text> Report any suspicious activity to your bank right away.{"\n"}

          <Text style={styles.cautionPoint}>Statement Scan:</Text> Regularly review bank statements to catch discrepancies early.{"\n\n"}

          Transfers are secure when precautions are in place. These steps ensure a smooth and safe process.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  note: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
  toggleModalButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cautionText: {
    fontSize: 16,
    marginTop: 20,
  },
  cautionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  },
  cautionPoint: {
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
paymentButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
});

export default DonnationBank;
