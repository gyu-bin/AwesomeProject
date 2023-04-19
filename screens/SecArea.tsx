import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Modal,
  Alert,
  Image,
  Animated,
  Dimensions,
  ScrollView, Button, ImageBackground
} from "react-native";
import styled from "styled-components/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import BackgroundScreen from "../components/BackgroundScreen";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  background-color: white;
`
const MainView = styled.View`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`
const ProfileImg = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  margin: 10px;
`

const BannerBack = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`

const MyProfile = styled.View``
const MyContent = styled.Text`
  font-size: 25px;
  color: black;
  padding: 5px 0 0 10px;
`

const MyAlbum = styled.TouchableOpacity`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px 0;
`
const MyAlbumDay = styled.Text`
  align-items: center;
  font-size: 25px;
  text-align: center;
`
const FloatingArea = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: 16px;
`

const FloatingBtn = styled.View`
    background-color: cornflowerblue;
  width: 45px;
  height: 45px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
  elevation: 2;
`
const FloatingText = styled.Text`
  color: white;
  font-size: 30px;
`
const MyAlbumTumb = styled.Image``
const SecArea =() => {


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [showBackground, setShowBackground] = useState(true);

  const handleTimerComplete = () => {
    setShowBackground(false);
  };
  const navigation = useNavigation();

  const ImageSelector = () => {
    navigation.navigate("HomeStack",{screen: 'ImageSelecter'})
  }

  const AlbumSelector = () => {
    navigation.navigate("HomeStack",{screen: 'AlbumSelector'})
  }

  return (
    <Container>
      {showBackground?(
        <BackgroundScreen onTimerComplete={handleTimerComplete}/>
      ):(
        <ScrollView>
          <MainView>
            {/*<BannerBack source={{uri: 'https://i.pinimg.com/564x/a3/77/b1/a377b17b484d6d509861d451ff76e22b.jpg'}}>*/}
            <ProfileImg source={{uri: 'https://velog.velcdn.com/images/protine/post/8327a477-7d09-483a-91f6-70c3133c5e1c/image.jpeg'}}/>
            <MyProfile>
              <MyContent>누구누구의 앨범</MyContent>
            </MyProfile>
            <TouchableOpacity>
                  <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
            {/*</BannerBack>*/}
          </MainView>

          {/*<MyProfile>
            <MyContent>이름: 문규빈</MyContent>
            <MyContent>자기소개: 사진찍는거 좋아함</MyContent>
          </MyProfile>*/}

          <MyAlbum onPress={AlbumSelector}>
            <MyAlbumDay>2023{`\n`}4.10</MyAlbumDay>
            <MyAlbumTumb
              style={{width: windowWidth-45, height: 150}}
              source={{uri: 'https://i.pinimg.com/564x/a3/77/b1/a377b17b484d6d509861d451ff76e22b.jpg'}}/>
          </MyAlbum>

          <MyAlbum onPress={AlbumSelector}>
            <MyAlbumDay>2023{`\n`}4.10</MyAlbumDay>
            <MyAlbumTumb
              style={{width: windowWidth-45, height: 150}}
              source={{uri: 'https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg'}}/>
          </MyAlbum>

          <MyAlbum onPress={AlbumSelector}>
            <MyAlbumDay>2023{`\n`}4.10</MyAlbumDay>
            <MyAlbumTumb
              style={{width: windowWidth-45, height: 150}}
              source={{uri: 'https://i.pinimg.com/564x/a2/9a/41/a29a41347ae4abcf95ed61cf2eecfc3d.jpg'}}/>
          </MyAlbum>

          <MyAlbum onPress={AlbumSelector}>
            <MyAlbumDay>2023{`\n`}4.10</MyAlbumDay>
            <MyAlbumTumb
              style={{width: windowWidth-45, height: 150}}
              source={{uri: 'https://velog.velcdn.com/images/protine/post/8327a477-7d09-483a-91f6-70c3133c5e1c/image.jpeg'}}/>
          </MyAlbum>
        </ScrollView>
        )}

      {showBackground? null :(
        <FloatingArea onPress={ImageSelector}>
          <FloatingBtn>
            <FloatingText><AntDesign name="plus" size={24} color="white" /></FloatingText>
          </FloatingBtn>
        </FloatingArea>
      )}


    </Container>
  )
}

export default SecArea;
