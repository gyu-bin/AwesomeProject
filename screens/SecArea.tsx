import React from 'react';
import {View,Text} from "react-native";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex: 1;
`

const HomeText = styled.Text`
  margin: auto;
  font-size: 20px;
  color: black;
`

const SecArea = () => {
  return (
    <Container>
      <HomeText>지도를 부를까</HomeText>
    </Container>
  )
}

export default SecArea;
