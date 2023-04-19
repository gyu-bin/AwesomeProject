import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const AlbumHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
`
const AlubmText =styled.Text`
  font-size: 35px;;
`

const PhotoImage = styled.Image``

const ImageArea = styled.ScrollView``

const AlbumSelector = ({
                         navigation: { setOptions,goBack },
                       }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  const ImageLook = () => {
    navigation.navigate("HomeStack",{screen: 'ImageLook'})
  }

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () =>
        <TouchableOpacity onPress={goBack}>
          <Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>,
      headerTitle: '앨범명',
      headerTitleStyle: {fontSize: 20},
      headerRight: () =>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{textAlign: 'right'}}>별표들어갈 자리</Text>
        </View>
    });

  }, []);

  return (
    <View style={{ height: windowHeight }}>

     {/* <AlbumHeader>
        <AlubmText>앨범명</AlubmText>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{textAlign: 'right'}}>별표들어갈 자리</Text>
        </View>
      </AlbumHeader>*/}

      <ScrollView contentContainerStyle={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/a2/9a/41/a29a41347ae4abcf95ed61cf2eecfc3d.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/cb/66/9f/cb669f75dceb59029a632b1e83219ae6.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/8e/40/ee/8e40ee99aeeb106deb96286e9b36e4a6.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/67/c5/17/67c517a94b2a89a3f82de095a855f665.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/ee/28/e3/ee28e3128e05c1584709392ef66153e3.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/6b/f3/4d/6bf34dff6e8e49a73f3e757d83ef0bce.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/79/72/79/797279d3b8df1327aa5e0af96bc21669.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/c1/12/be/c112be6d209a2c5f3425c3bbc3858f5e.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/d3/8e/00/d38e00059438082215a0d1b3dbc1c61b.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/c9/32/bf/c932bfa7a67a855e8bcbf4004cf36c65.jpg'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={ImageLook}>
          <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}} source={{ uri:'https://i.pinimg.com/564x/88/74/e7/8874e782500c3fff2f44e23ed267f3ea.jpg'}} />
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default AlbumSelector;
