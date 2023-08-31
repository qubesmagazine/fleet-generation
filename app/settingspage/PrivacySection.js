import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
        <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
          headerStyle: { backgroundColor: '#f5f5f5' },
        }}
      />
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.section}>Last Updated: [Date]</Text>

      <Text style={styles.subtitle}>1. Information We Collect</Text>
      <Text style={styles.paragraph}>
        We may collect and store the following information when you use our mobile app:
        - Personal information such as name, email address, and phone number.
        - Location data for delivery services.
        - Usage data, including app activity and interactions.
      </Text>

      <Text style={styles.subtitle}>2. How We Use Your Information</Text>
      <Text style={styles.paragraph}>
        We use the collected information for various purposes, including:
        - Providing and maintaining our services.
        - Personalizing your experience.
        - Analytics and monitoring app usage.
      </Text>

      <Text style={styles.subtitle}>3. Sharing Your Information</Text>
      <Text style={styles.paragraph}>
        We may share your information with third parties for purposes such as:
        - Delivery services (bike delivery, van delivery).
        - Employment opportunities (job search).
        - Legal requirements and law enforcement.
      </Text>

      <Text style={styles.subtitle}>4. Your Choices</Text>
      <Text style={styles.paragraph}>
        You can manage your personal information and privacy settings in the app's settings.
      </Text>

      <Text style={styles.subtitle}>5. Security</Text>
      <Text style={styles.paragraph}>
        We take security measures to protect your information. However, no method of transmission over the internet or electronic storage is entirely secure.
      </Text>

      <Text style={styles.subtitle}>6. Changes to This Privacy Policy</Text>
      <Text style={styles.paragraph}>
        We may update our privacy policy from time to time. Check for updates in the app.
      </Text>

      <Text style={styles.subtitle}>7. Contact Us</Text>
      <Text style={styles.paragraph}>
        If you have any questions or concerns about this privacy policy, please contact us at fleet@customer.com.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red'
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default PrivacyPolicy;
