import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "react-query";
import { Album, AlbumResponse, Gallery, GalleryApi, GalleryResponse } from "../api";
import { album } from "./SampleData/SampleData";

const Container = styled.View`
  flex: 1;
  background-color: black;
`
const MainView = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: white;
`
const MainText = styled.Text`
  color: white;
  text-align: center;
  font-size: 30px;
`

const FolderArea = styled.View`
`
const Home = () => {
  const navigation = useNavigation();

  const {
    isLoading: feedsLoading,
    isRefetching: isRefetchingFeeds,
    data: queryAlbumData,
    refetch: feedsRefetch,
  } = useQuery<AlbumResponse>(["gallery"],GalleryApi.getAlbums, {
    onSuccess: (res) => {
      // console.log(res)
    },
    onError: (error) => {
      // console.log(`API ERROR | getFeeds ${error.code} ${error.status}`);
    },
  });

/*  const ChoiceGally = (galId: Album) =>{
    // console.log(id)
    const galleryId = {
      choiceGallery: {id:galId.id}
    }
    navigation.navigate('HomeStack',{
      screen: "ImagePage",
      parms: galleryId
    })
  }*/
  const ChoiceGally = useCallback((album: any) => {
    navigation.navigate("HomeStack", { screen: "ImagePage", params: { galData: { galData: album} } });
  }, []);

  return (
    <Container>
      <MainView>
        <MainText>
          찰나록 갤러리
        </MainText>
      </MainView>

      <View>
        <Text style={{color: 'white', textAlign: 'center'}}>개인사진 갤러리</Text>
      </View>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{flex:1, flexWrap: 'wrap',justifyContent: 'space-around'}}
      >
        {album.map((item)=>{
          return (
            <TouchableOpacity onPress={()=>ChoiceGally(item)}
                              style={{ marginBottom: 20,justifyContent:'center',alignItems: 'center'}}>
              <AntDesign name="folder1" size={100} color="white" style={{alignItems: 'center'}} />
              <Text style={{color: 'white', width: 100,fontSize: 15, textAlign: 'center',justifyContent:'center',alignItems: 'center'}}>{item.userName}</Text>
            </TouchableOpacity>
          )
        })}
        {/*{queryAlbumData && queryAlbumData.data && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{flex:1, flexWrap: 'wrap',justifyContent: 'space-around'}}
            data={queryAlbumData.data}
            keyExtractor={(item: Gallery,index:number)=>String(index)}
            renderItem={({ item, index }: { item: Gallery,index: number }) => (
              <TouchableOpacity onPress={()=>ChoiceGally(item)}
                                style={{ marginBottom: 20,justifyContent:'center',alignItems: 'center'}}>
                <AntDesign name="folder1" size={100} color="white" style={{alignItems: 'center'}} />
                <Text style={{color: 'white', width: 50,fontSize: 15, textAlign: 'center',justifyContent:'center',alignItems: 'center'}}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        )}*/}
      </ScrollView>

      {/*<View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 20
      }}>
        <TouchableOpacity onPress={ChoiceGally}
                          style={{ marginBottom: 20,justifyContent:'center',alignItems: 'center'}}>
          <AntDesign name="folder1" size={100} color="white" style={{alignItems: 'center'}} />
          <Text style={{color: 'white', fontSize: 15, textAlign: 'center',justifyContent:'center',alignItems: 'center'}}>여의도 한강공원</Text>
        </TouchableOpacity>
      </View>*/}


    </Container>
  )
}

export default Home;
