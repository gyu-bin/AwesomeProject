import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Portal } from "react-native-portalize";
import HomeStack from "../../navigation/HomeStack";
import { Modalize } from "react-native-modalize";

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

  const handleMenuClick = (index) => {
    console.log(index)
    setIsClicked(prevState => prevState.map((value, i) => i === index ? !value : value));
  };

  const menuItems = [
    { text: '중식', isClicked: false },
    { text: '일식', isClicked: false },
    { text: '양식', isClicked: false },
    { text: '한식', isClicked: false },
    { text: '카페', isClicked: false },
  ];

  const [isClicked, setIsClicked] = React.useState(menuItems.map((item) => item.isClicked));
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  }
  return (
    <Portal>
      <Modalize ref={modalizeRef} modalStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      handlePosition="inside"
      modalHeight={500}
      {...{HomeStack}}
      >
      <View><Text>제가 먹고싶은 음식을 골라줄께요.우선 먹기싫은 종류를 골라주세요</Text></View>
      {menuItems.map((item, index) => (
        <MenuArea key={index} onPress={() => handleMenuClick(index)} isClicked={isClicked[index]}>
          <MenuText isClicked={isClicked[index]}>{item.text}</MenuText>
        </MenuArea>
      ))}
      <TouchableOpacity style={{top: 30}}>
        <Text>다음-{">"}</Text>
      </TouchableOpacity>
      </Modalize>
    </Portal>
  )
}

export default MyConditionMenu;
