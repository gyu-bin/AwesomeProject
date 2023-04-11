import React, { useRef, useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Switch, Modal, Alert, Image, Animated } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: white;
`
const MainView = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
`
const MainText = styled.Text`
  color: black;
  text-align: center;
  font-size: 30px;
`

const SecArea = () => {

  return (
    <Container>
      <MainView>
        <MainText>
         여긴 뭐하지. 추천좀
        </MainText>
      </MainView>

      <View>
        <Text style={{fontSize: 30, textAlign:'center', color: 'black'}}>
          명예의 전당 {'\n'}
          출사지추천{'\n'}
          뭐지
        </Text>
      </View>
    </Container>
  )
}

export default SecArea;
