import React, { useRef, useState,useEffect, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Modal,
  Alert,
  Image,
  Animated,
  TextInput,
  ScrollView
} from "react-native";
import styled from "styled-components/native";
import { useToast } from "react-native-toast-notifications";
import ImagePicker, { openPicker } from "react-native-image-crop-picker";

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
const ImageFolderNameView = styled.View`
  background-color: #f3f3f3;
`

const ImageFolderName = styled.TextInput`
  width: 100%;
  font-size: 14px;
`
const ImageSelecter = ({
                         navigation: { setOptions },
                       }) => {

  const [imageURLs, setImageURLs] = useState([]);
  const toast = useToast();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () =>
        <TouchableOpacity>
          <Text>다음</Text>
        </TouchableOpacity>
    });
  }, []);


  const selectImage = async () => {
    try {
      const newImages = await ImagePicker.openPicker({
        mediaType: "photo",
        multiple: true,
        minFiles: 1,
        maxFiles: 10,
      });

      if (imageURLs.length + newImages.length > 10) {
        toast.show(`이미지는 10개까지 선택할 수 있습니다.`, { type: "warning" });
        return;
      }
      setImageURLs([...imageURLs, ...newImages.map((image) => image.path)]);
    } catch (e) {}
  };

  return (
    <Container>
      <TouchableOpacity onPress={selectImage}>
      <Text>앨범</Text>
      </TouchableOpacity>

      <ScrollView>
        {imageURLs.map((imageURL, index) => (
          <Image
            key={index}
            style={{ width: 300, height: 300 }}
            source={{ uri: imageURL }}
          />
        ))}
      </ScrollView>

    </Container>
  )
}

export default ImageSelecter;
