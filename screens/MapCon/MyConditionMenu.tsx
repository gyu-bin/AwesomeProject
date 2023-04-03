import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";
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
const MenuArea = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  background-color: ${({ isClicked }) => isClicked ? 'darkgray' : 'white'};
  border-radius: 50px;
  border: 1px solid ${({ isClicked }) => isClicked ? 'white' : 'darkgray'};
`;

const MenuText = styled.Text`
  color: ${({ isClicked }) => isClicked ? 'gray' : 'black'};
  text-align: center;
  line-height: 30px;
`;

const MyConditionMenu = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Container>
      <View><Text>제가 먹고싶은 음식을 골라줄께요.우선 먹기싫은 종류를 골라주세요</Text></View>
      <MenuArea onPress={handleClick} isClicked={isClicked}>
        <MenuText isClicked={isClicked}>중식</MenuText>
      </MenuArea>
      <MenuArea onPress={handleClick} isClicked={isClicked}>
        <MenuText isClicked={isClicked}>일식</MenuText>
      </MenuArea>
      <MenuArea onPress={handleClick} isClicked={isClicked}>
        <MenuText isClicked={isClicked}>양식</MenuText>
      </MenuArea>
      <MenuArea onPress={handleClick} isClicked={isClicked}>
      <MenuText isClicked={isClicked}>한식</MenuText>
    </MenuArea>

    </Container>
  )
}

export default MyConditionMenu;
