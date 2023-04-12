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
import { useNavigation } from "@react-navigation/native";
import { album, ImageData } from "../SampleData/SampleData";
import { GalleryApi } from "../../api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
const PhotoArea = styled.ScrollView`
  margin: auto;
`

const PhotoImage = styled.Image`
  width: 380px;
  height: 400px;
  margin-bottom: 10px;
`

const ImageSelecter:React.FC<NativeStackScreenProps<any,'ImageSelecter'>>  = ({
                         navigation: { setOptions },
                       }) => {
  const navigation = useNavigation();
  const [imageURLs, setImageURLs] = useState([]);
  const [thumbNail, setThumbNail] = useState([]);
  const toast = useToast();
  const [content, setContent] = useState<string>("");


  useLayoutEffect(() => {
    setOptions({
      headerRight: () =>
        <TouchableOpacity disabled={imageURLs.length<1} onPress={ImageDone}>
          <Text>다음</Text>
        </TouchableOpacity>
    });
  }, [imageURLs,content,album,ImageData]);

  useEffect(()=>{
  },[imageURLs,thumbNail])

  const thumbNailImage = async () =>{
    try {
      const thumbImg = await ImagePicker.openPicker({
        mediaType: "photo",
        multiple: false,
        minFiles: 1,
        maxFiles: 1,
      });
      setThumbNail(thumbImg.path);
    } catch (e) {
      console.log(e)
    }
  }

  const selectImage = async () => {
    try {
      const newImages = await ImagePicker.openPicker({
        mediaType: "photo",
        multiple: true,
        minFiles: 1,
        maxFiles: 10,
      });

      // console.log(newImages.map((image) => image.path))
      if (imageURLs.length + newImages.length > 10) {
        toast.show(`이미지는 10개까지 선택할 수 있습니다.`, { type: "warning" });
        return;
      }
      setImageURLs(newImages.map((image) => image.path));
      // console.log(imageURLs+'imageURLs')
    } catch (e) {
      console.log(e)
    }
  };

  const addImage = async () =>{
    try {
      const newImages = await ImagePicker.openPicker({
        mediaType: "photo",
        multiple: true,
        minFiles: 1,
        maxFiles: 10,
      });

      // console.log(newImages.map((image) => image.path))
      if (imageURLs.length + newImages.length > 10) {
        toast.show(`이미지는 10개까지 선택할 수 있습니다.`, { type: "warning" });
        return;
      }
      setImageURLs((prev)=>[...prev, ...newImages.map((image) => image.path)]);
      // console.log(imageURLs+'imageURLs')
    } catch (e) {
      console.log(e)
    }
  }

  const newAlbumId = ImageData.length+ 1;

   const ImageDone = () =>{
     for(let i=0; i<imageURLs.length; i++) {
       album.push({
         userName: 'content',
         albumId: newAlbumId,
         title: content,
         thumbnailImg: 'https://i.pinimg.com/564x/83/c2/f0/83c2f0737c76b93917fe37f6c2c70ead.jpg'
         // thumbnailImg: thumbNail[i].replace("file:/", "https:"),
       })
       ImageData.push({
           albumId: newAlbumId,
           id: newAlbumId+1,
           uri: 'https://i.pinimg.com/564x/83/c2/f0/83c2f0737c76b93917fe37f6c2c70ead.jpg'
           // uri: imageURLs[i].replace("file:/", "https:"),
         }
       );
     }
     console.log(album)
     console.log(ImageData)
    navigation.navigate("HomeStack",{screen: 'Home'})
  }

  return (
    <Container>
      <View>
        <TextInput
          placeholder='앨범명'
          style={{backgroundColor:'lightgray', fontSize: 15, paddingLeft: 10}}
          value={content}
          onChangeText={(content: string) => setContent(content)}
          onEndEditing={() => setContent((prev) => prev.trim())}
        />
      </View>

      <View>
        <TouchableOpacity onPress={thumbNailImage}><Text>썸네일 이미지 선택</Text></TouchableOpacity>
        {thumbNail.length>0?
          <Image
            style={{width: 100,height:100}}
            source={{uri: thumbNail}}
          />: null
        }
      </View>
      {imageURLs.length < 1?
      <TouchableOpacity onPress={selectImage}>
        <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}>사진선택</Text>
      </TouchableOpacity>
          :
        <TouchableOpacity onPress={addImage}>
          <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}>사진추가선택</Text>
        </TouchableOpacity>
        }



      <PhotoArea>
        {imageURLs.map((imageURL, index) => (
          imageURL ? (
            <PhotoImage
              key={index}
              style={{ width: 370, height: 400 }}
              source={{ uri: imageURL }}
            />
          ) : null
        ))}
      </PhotoArea>
    </Container>
  )
}

export default ImageSelecter;
