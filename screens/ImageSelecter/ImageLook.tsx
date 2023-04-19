import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { ImageSlider } from "react-native-image-slider-banner";
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

const HeartArea = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: center;
`
const ImageLook = () => {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isHeartFull, setIsHeartFull] = useState(false);

  const handlePress = () => {
    setIsHeartFull(!isHeartFull);
  };

/*  const images = [
    "https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg",
    "https://i.pinimg.com/564x/a2/9a/41/a29a41347ae4abcf95ed61cf2eecfc3d.jpg",
    "https://i.pinimg.com/564x/cb/66/9f/cb669f75dceb59029a632b1e83219ae6.jpg",
    "https://i.pinimg.com/564x/8e/40/ee/8e40ee99aeeb106deb96286e9b36e4a6.jpg",
    "https://i.pinimg.com/564x/67/c5/17/67c517a94b2a89a3f82de095a855f665.jpg",
    "https://i.pinimg.com/564x/ee/28/e3/ee28e3128e05c1584709392ef66153e3.jpg",
    "https://i.pinimg.com/564x/6b/f3/4d/6bf34dff6e8e49a73f3e757d83ef0bce.jpg",
    "https://i.pinimg.com/564x/79/72/79/797279d3b8df1327aa5e0af96bc21669.jpg",
    "https://i.pinimg.com/564x/c1/12/be/c112be6d209a2c5f3425c3bbc3858f5e.jpg",
    "https://i.pinimg.com/564x/d3/8e/00/d38e00059438082215a0d1b3dbc1c61b.jpg",
    "https://i.pinimg.com/564x/c9/32/bf/c932bfa7a67a855e8bcbf4004cf36c65.jpg",
    "https://i.pinimg.com/564x/88/74/e7/8874e782500c3fff2f44e23ed267f3ea.jpg",
    "https://i.pinimg.com/564x/7e/02/16/7e02163ce5313d8ad24c59417a0c6216.jpg"
  ]*/

  return (
    <View>
      <AlbumHeader>
        <AlubmText>앨범명</AlubmText>
        <Text style={{textAlign: 'right'}}>별표들어갈 자리</Text>
      </AlbumHeader>

      <ImageSlider
        data={[
          {img:"https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg"},
          {img:"https://i.pinimg.com/564x/a2/9a/41/a29a41347ae4abcf95ed61cf2eecfc3d.jpg"},
          {img:"https://i.pinimg.com/564x/cb/66/9f/cb669f75dceb59029a632b1e83219ae6.jpg"},
          {img:"https://i.pinimg.com/564x/8e/40/ee/8e40ee99aeeb106deb96286e9b36e4a6.jpg"},
          {img:"https://i.pinimg.com/564x/67/c5/17/67c517a94b2a89a3f82de095a855f665.jpg"},
          {img:"https://i.pinimg.com/564x/ee/28/e3/ee28e3128e05c1584709392ef66153e3.jpg"},
          {img:"https://i.pinimg.com/564x/6b/f3/4d/6bf34dff6e8e49a73f3e757d83ef0bce.jpg"},
          {img:"https://i.pinimg.com/564x/79/72/79/797279d3b8df1327aa5e0af96bc21669.jpg"},
          {img:"https://i.pinimg.com/564x/c1/12/be/c112be6d209a2c5f3425c3bbc3858f5e.jpg"},
          {img:"https://i.pinimg.com/564x/d3/8e/00/d38e00059438082215a0d1b3dbc1c61b.jpg"},
          {img:"https://i.pinimg.com/564x/c9/32/bf/c932bfa7a67a855e8bcbf4004cf36c65.jpg"},
          {img:"https://i.pinimg.com/564x/88/74/e7/8874e782500c3fff2f44e23ed267f3ea.jpg"},
          {img:"https://i.pinimg.com/564x/7e/02/16/7e02163ce5313d8ad24c59417a0c6216.jpg"}
        ]}
        preview={true}
        caroselImageStyle={{width: windowWidth, height: windowHeight-150, resizeMode: 'cover'}}
        activeIndicatorStyle={{top: 30, backgroundColor: 'orange'}}
        inActiveIndicatorStyle={{top:30, width: 5, height:5}}
        previewImageStyle={{width: windowWidth-45, height: windowHeight, resizeMode: 'cover'}}
        closeIconColor={'white'}
      />

      <HeartArea>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons
            name={isHeartFull ? "heart" : "heart-outline"}
            size={25}
            color="#FF551F"
            style={{ marginLeft: -2, marginRight: -2 }}
          />
        </TouchableOpacity>
        <Text style={{paddingLeft: 7, fontSize: 20}}>23</Text>
      </HeartArea>
    </View>
  );
};

export default ImageLook;
