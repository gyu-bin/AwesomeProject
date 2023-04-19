import React, { useState } from 'react';
import styled from "styled-components/native";
import MapView, { Marker } from 'react-native-maps';
import { View } from "react-native";


const ThirArea = () => {
  const [selectedCityId, setSelectedCityId] = useState(null);

  const handleCityPress = (event) => {
    const { id } = event.properties;
    setSelectedCityId(id);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.9780,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.5665, longitude: 126.9780 }}
          pinColor={selectedCityId === null ? '#6C63FF' : '#FF6C63'}
          onPress={handleCityPress}
        />
      </MapView>
    </View>
  )
}

export default ThirArea;
