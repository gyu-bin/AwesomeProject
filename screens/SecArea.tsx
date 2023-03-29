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
`

const SecArea = () => {
  return (
    <Container>
      <HomeText>SecArea</HomeText>
    </Container>
  )
}

export default SecArea;
