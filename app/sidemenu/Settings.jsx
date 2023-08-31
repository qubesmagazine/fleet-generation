import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Stack, useNavigation, useRouter } from 'expo-router';



const Settings = () => {
  const router = useRouter();
  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
            headerShown: true,
          headerShadowVisible: false,
          headerTitle: "Settings",
          headerStyle: { backgroundColor: 'white' },
        }}
      />
      <View style={styles.section}>
        <TouchableOpacity style={styles.option} onPress={() => router.push('/sidemenu/Profile')} >
          <Ionicons name="person" size={24} color="#dc143c" style={styles.icon} />
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.option} onPress={() => router.push('/settingspage/NotificationSection')} >
          <Ionicons name="notifications" size={24} color="#dc143c" style={styles.icon} />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity onPress={() => router.push('/settingspage/PrivacySection')}  style={styles.option}>
          <Ionicons name="lock-closed" size={24} color="#dc143c" style={styles.icon} />
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="language" size={24} color="#dc143c" style={styles.icon} />
          <Text style={styles.optionText}>Language</Text>
        </TouchableOpacity>
        <View style={styles.line}></View> 

        <TouchableOpacity style={styles.option}>
          <Ionicons name="help-circle" size={24} color="#dc143c" style={styles.icon} />
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("Login")}>
          <Ionicons name="log-out" size={24} color="#dc143c" style={styles.icon} />
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
        <View style={styles.line}></View> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 18,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});

export default Settings;
