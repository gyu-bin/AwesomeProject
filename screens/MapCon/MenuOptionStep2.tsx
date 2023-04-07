import React, { useRef } from "react";
import { Platform, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import styled from "styled-components/native";
import HomeStack from "../../navigation/HomeStack";

const ModalContainer = styled.View`
  flex: 1;
  height: 100%;
  margin: 30px;
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
const MenuOptionStep2  = () => {
  const menuItems = [
    { text: '중식', isClicked: false },
    { text: '일식', isClicked: false },
    { text: '양식', isClicked: false },
    { text: '한식', isClicked: false },
    { text: '카페', isClicked: false },
    { text: '중식', isClicked: false },
  ];
  const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };


  const onClose = () => {
    modalizeRef.current?.close();
  }

  const handleMenuClick = (index) => {
    console.log(index)
    setIsClicked(prevState => prevState.map((value, i) => i === index ? !value : value));
  };
  const [isClicked, setIsClicked] = React.useState(menuItems.map((item) => item.isClicked));
  return (
    <Portal>
      <Modalize ref={modalizeRef} modalStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                handlePosition="inside"
                modalHeight={500}
                {...{HomeStack}}
      >
        <ModalContainer>
          <View>
            <TouchableOpacity onPress={onClose}><Text style={{textAlign:'right', fontSize: 20}}>X</Text></TouchableOpacity>
            <Text>제가 먹고싶은 음식을 골라줄께요.우선 먹기싫은 종류를 골라주세요</Text>
          </View>
          {menuItems.map((item, index) => (
            <MenuArea key={index} onPress={() => handleMenuClick(index)} isClicked={isClicked[index]}>
              <MenuText isClicked={isClicked[index]}>{item.text}</MenuText>
            </MenuArea>
          ))}
          <TouchableOpacity style={{top: 30}}>
            <Text>다음-{">"}</Text>
          </TouchableOpacity>
        </ModalContainer>
      </Modalize>
    </Portal>
  );
};
export default MenuOptionStep2;
