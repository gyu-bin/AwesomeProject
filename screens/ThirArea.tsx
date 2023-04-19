import React, { useState } from 'react';
import styled from "styled-components/native";
import MapView, { Geojson } from 'react-native-maps';
import { View } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: white;
`

const ThirArea = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(null);

  const handleRegionPress = (event) => {
    const { id } = event.properties;
    setSelectedRegionId(id);
  };

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { id: 1 },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [126.978, 37.566],
              [126.977, 37.567],
              [126.976, 37.566],
              [126.977, 37.565],
              [126.978, 37.566],
            ],
          ],
        },
      },
      {
        type: 'Feature',
        properties: { id: 2 },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [126.977, 37.565],
              [126.976, 37.566],
              [126.975, 37.565],
              [126.976, 37.564],
              [126.977, 37.565],
            ],
          ],
        },
      },
    ],
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
        <Geojson
          geojson={geojson}
          fillColor={selectedRegionId === null ? '#6C63FF' : '#FF6C63'}
          strokeColor="#6C63FF"
          strokeWidth={2}
          onPress={handleRegionPress}
        />
      </MapView>
    </View>
  )
}

export default ThirArea;
