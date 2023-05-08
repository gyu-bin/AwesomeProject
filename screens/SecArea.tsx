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
import { album, User } from "./SampleData/SampleData";

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
`

const MyProfile = styled.View``
const MyContent = styled.Text`
  font-size: 30px;
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

const MyAlbumInfo =styled.View`
  max-width: 60px;
`
const MyAlbumDay = styled.Text`
  align-items: center;
  font-size: 25px;
  text-align: center;
`

const MyAlbumTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
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

  const AlbumSelector = useCallback((album: any) => {
    navigation.navigate("HomeStack",{screen: 'AlbumSelector', params:{galData:{galData:album}}})
  },[]);

   return (
    <Container>
      {showBackground?(
        <BackgroundScreen onTimerComplete={handleTimerComplete}/>
      ):(
        <ScrollView>
            {/*뒷배경*/}
            {User.map((item,index)=>{
              return(
                // <BannerBack source={{uri: item.backImage}}>
                <MainView key={index}>
                  <ProfileImg source={{uri: item.profile}}/>
                  <MyProfile>
                    <MyContent>{item.name}</MyContent>
                  </MyProfile>
                  <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                  </TouchableOpacity>
                </MainView>
                // </BannerBack>
              )
            })}

          <ScrollView>
            {album.map((item,index)=>{
              return(
                <MyAlbum onPress={()=>AlbumSelector(item)} key={index}>
                  <MyAlbumInfo>
                    <MyAlbumDay>{item.year}{`\n`}{item.date}{`\n`}</MyAlbumDay>
                    <MyAlbumTitle>{item.title}</MyAlbumTitle>
                  </MyAlbumInfo>
                  <MyAlbumTumb
                    style={{width: windowWidth-45, height: 150,  }}
                    source={{uri: item.thumbnailImg}}/>
                </MyAlbum>
              )
            })}
          </ScrollView>

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
