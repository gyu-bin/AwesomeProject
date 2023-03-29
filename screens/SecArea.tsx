import React, { useState } from 'react';
import {View,Text,TouchableOpacity} from "react-native";
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

const SecArea = () => {
  const [content, setContent] = useState<string>('');
  return (
    <Container>
      <SearchArea>
        <SearchTextInput
          value={content}
          onChangeText={(content: string) => setContent(content)}
          placeholder="검색하세요..."
        />
        <SerchBtn>
          <Text>Btn</Text>
        </SerchBtn>
      </SearchArea>

      <View>
        <View>
          <Text>1</Text>
          <Text>2</Text>
        </View>

      </View>

    </Container>
  )
}

export default SecArea;
