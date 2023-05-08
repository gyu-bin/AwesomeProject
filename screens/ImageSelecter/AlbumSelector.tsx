import React, { useCallback, useLayoutEffect } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { ImageData } from "../SampleData/SampleData";

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
                          route:{params:{galData}}
                       }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const queryGalleryData = ImageData;

  const albumNm = galData.galData.title;

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () =>
        <TouchableOpacity onPress={goBack}>
          <Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>,
      headerTitle: albumNm,
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

  const ImageLook = useCallback((album: any) => {
    navigation.navigate("HomeStack",{screen: 'ImageLook', params:{galData:{galData:album}}})
  },[]);

  return (
    <ScrollView horizontal={false} contentContainerStyle={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
      {ImageData.filter(item => item.albumId === galData.galData.albumId).map((item)=>{
        return(
          <TouchableOpacity onPress={()=>ImageLook(item)}>
            <PhotoImage style={{width: windowWidth/3, height: windowHeight/4.5}}
                        source={{ uri: item.uri}} />
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
};

export default AlbumSelector;
{/* <AlbumHeader>
        <AlubmText>앨범명</AlubmText>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{textAlign: 'right'}}>별표들어갈 자리</Text>
        </View>
      </AlbumHeader>*/}
