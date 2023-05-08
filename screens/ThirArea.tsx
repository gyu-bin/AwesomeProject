import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import MapView, { Marker } from 'react-native-maps';
import { TouchableOpacity, View } from "react-native";
import Geolocation from '@react-native-community/geolocation';


const ThirArea = () => {
  const [selectedCityId, setSelectedCityId] = useState(null);

  const handleCityPress = (event) => {
    console.log('handleCityPress')
    const id = event?.properties?.id;
    setSelectedCityId(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.5636,
          longitude: 126.8297,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <TouchableOpacity onPress={handleCityPress}>
          <Marker
            coordinate={{ latitude: 37.5636, longitude: 126.8297 }}
            pinColor={selectedCityId === null ? '#6C63FF' : '#FF6C63'}
          />
        </TouchableOpacity>

      </MapView>
    </View>
  )
}
// Lat: 37.5716 Lon: 126.8390 집
// Lat: 37.5636 Lon: 126.8297 회사
export default ThirArea;
