import React, { useState, useEffect, useRef} from 'react';
import { TouchableOpacity, ActivityIndicator, Platform, Linking, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import  * as Location from 'expo-location';

// Configurações fixas - locais
const SCHOOL = {
  id: 'school',
  nome:'Etec Comendador João Rays',
  coordinate: { latitude: -22.48920319894633, longitude: -48.546424930007085},
  address: 'Rua Ludovico Victório, 2140, Barra Bonita - SP'
};

const BUS_STOPS = [
  {
    id: 'stop_1',
    name: 'Autoescola Muriano',
    address: ' R. Geraldo Fazzio, 484',
    coordinate: {latitude: -22.484253248572397,longitude: -48.56484098641651},
    lines: ['Nova Barra'],
  }
]

// distancia Haversine (metros)
function getDistance(c1, c2) {

}

function formatDistance(m) {
  return m < 1000 ? `${Math.round(m)} m` : `${(m/1000).toFixed(1)} km`;
}

// HTML do Lwadflet (OpenStreetMap - sem chave)
function buildLeafletHTML( userCoord, nearesStopId, selectedStopId){
  const stopsJSON = JSON.stringify(BUS_STOPS);
  const schoolJSON = JSON.stringify(SCHOOL);
  const userJSON = userCoord ? JSON.stringify(userCoord) : 'null';

  return ``;

}

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Teste Olá mundo </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
