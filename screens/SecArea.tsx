import React, { useRef, useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, Modal, Alert, Image, Animated } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
`
const MainView = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: white;
`
const MainText = styled.Text`
  color: white;
  text-align: center;
  font-size: 30px;
`

const SecArea = () => {

  return (
    <Container>
      <MainView>
        <MainText>
          전시가 좋아
        </MainText>
      </MainView>
    </Container>
  )
}

export default SecArea;
