import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import database from '@react-native-firebase/database';

function App(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [realTimeData, setRealTimeData] = useState({ 
    temperature: 0, 
    humidity: 0, 
    soilMoisture: 0, 
    nitrogen: 0, 
    phosphorus: 0, 
    potassium: 0, 
    pH: 0 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData({
        temperature: parseFloat((20 + Math.random() * 10).toFixed(1)),
        humidity: parseFloat((50 + Math.random() * 10).toFixed(1)),
        soilMoisture: parseFloat((30 + Math.random() * 10).toFixed(1)),
        nitrogen: parseFloat((1 + Math.random() * 5).toFixed(2)),
        phosphorus: parseFloat((1 + Math.random() * 5).toFixed(2)),
        potassium: parseFloat((1 + Math.random() * 5).toFixed(2)),
        pH: parseFloat((5.5 + Math.random() * 2).toFixed(2)),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }
    alert('Login successful!');
    setSelectedSection('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#6a994e" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Tea Plantation Dashboard</Text>
        <View style={styles.loginBar}>
          <TextInput style={styles.loginInput} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
          <TextInput style={styles.loginInput} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton} onPress={() => setMenuOpen(!menuOpen)}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.sidebar}>
          <TouchableOpacity onPress={() => setSelectedSection('Home')}><Text style={styles.sidebarItem}>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection('About')}><Text style={styles.sidebarItem}>About</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection('E-Learning')}><Text style={styles.sidebarItem}>E-Learning</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection('Chat Support')}><Text style={styles.sidebarItem}>Chat Support</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedSection('E-Commerce')}><Text style={styles.sidebarItem}>E-Commerce</Text></TouchableOpacity>
        </View>
      )}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <Image source={{ uri: 'https://www.dokonatural.com/cdn/shop/articles/Assam_Tea_Estate.jpg?v=1698903967' }} style={styles.teaGardenImage} />
          <View style={styles.container}>
            <Text style={styles.dataTitle}>Parameters of Tea Farm</Text>
            <View style={styles.dataBox}><Text style={styles.dataText}>🌡 Temperature: {realTimeData.temperature}°C</Text></View>
            <View style={styles.dataBox}><Text style={styles.dataText}>💧 Humidity: {realTimeData.humidity}%</Text></View>
            <View style={styles.dataBox}><Text style={styles.dataText}>🌱 Soil Moisture: {realTimeData.soilMoisture}%</Text></View>
            <View style={styles.dataBox}><Text style={styles.dataText}>🧪 Nitrogen  ges: {realTimeData.nitrogen} mg/kg</Text></View>
            <View style={styles.dataBox}><Text style={styles.dataText}>🧪 Phosphorus: {realTimeData.phosphorus} mg/kg</Text></View>
            <View style={styles.dataBox}><Text style={styles.dataText}>🧪 Potassium: {realTimeData.potassium} mg/kg</Text></View>
            <View style={styles.dataBox}><Text style={styles.dataText}>🧪 pH Level: {realTimeData.pH}</Text></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
``
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f1ea' },
  header: { backgroundColor: '#6a994e', padding: 20, alignItems: 'center', paddingTop: 50, zIndex: 3 },
  headerText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  dataTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#333' },
  dataBox: { backgroundColor: '#fff', padding: 10, marginVertical: 5, borderRadius: 5, elevation: 3 },
  dataText: { fontSize: 16, color: '#333' },
  loginBar: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  loginInput: { backgroundColor: '#fff', padding: 5, marginHorizontal: 5, borderRadius: 5, width: 100 },
  loginButton: { backgroundColor: '#4a7c59', padding: 5, borderRadius: 5 },
  loginButtonText: { color: '#fff', fontSize: 14 },
  menuButton: { position: 'absolute', top: 55, right: 15, backgroundColor: '#6a994e', padding: 10, borderRadius: 5, zIndex: 4 },
  menuText: { fontSize: 20, color: '#fff' },
  sidebar: { position: 'absolute', top: 80, right: 10, backgroundColor: '#fff', padding: 10, borderRadius: 5, zIndex: 5 },
  sidebarItem: { fontSize: 16, paddingVertical: 10, paddingHorizontal: 10, color: '#6a994e' },
  scrollViewContent: { paddingBottom: 50 },
  teaGardenImage: { width: '100%', height: 200, marginTop: 10 }
});

export default App;

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
