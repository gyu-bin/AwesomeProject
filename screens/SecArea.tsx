import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Modal, Alert } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';

const Container = styled.View`
  display: flex;
  flex: 1;
`

const HomeText = styled.Text`
  margin: auto;
  font-size: 20px;
  color: black;
`

const SearchArea = styled.View`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`

const SearchTextInput = styled.TextInput`
  padding-left: 20px;
  width: 80%;
`

const SerchBtn = styled.TouchableOpacity`
  margin: auto;
`

const RecArea = styled.View`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const RecFilter = styled.View`
  display: flex;
  flex-direction: row;;
`

const RecFilterText = styled.TouchableOpacity`
  padding-left: 10px;
`
const OpenBtn = styled.Text`
  border: 1px solid black;
  border-radius: 50px;
  padding: 2px;
`

const ListArea = styled.View`
  
`
const ModalContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: peachpuff;
  margin-top: -100px; /* move the modal up by 100px */
`

const ModalContent = styled.View`
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rosybrown;
`
const SecArea = () => {
  const [content, setContent] = useState<string>('');
  const navigation = useNavigation();

  const MyConditionMenu = () => {
    navigation.navigate("HomeStack",{screen: 'MyConditionMenu'})
  }

  return (
    <Container>
      <SearchArea>
        <SearchTextInput
          value={content}
          onChangeText={(content: string) => setContent(content)}
          placeholder="검색하세요..."
        />
        <SerchBtn >
          <Text>Btn</Text>
        </SerchBtn>
      </SearchArea>

      <RecArea>
        <TouchableOpacity onPress={MyConditionMenu}>
          <Text>오늘의 추천맛집</Text>
        </TouchableOpacity>

        <RecFilter>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <RecFilterText>
              <OpenBtn>영업중</OpenBtn>
            </RecFilterText>
          </View>
          <RecFilterText >
            <Ionicons name="settings" size={24} color="black" />
          </RecFilterText>

        </RecFilter>
      </RecArea>

    </Container>
  )
}

export default SecArea;
