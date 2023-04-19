import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { album } from "./SampleData/SampleData";
import BackgroundScreen from "../components/BackgroundScreen";
const Container = styled.View`
  flex: 1;
  background-color: white;
`
const MainView = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
  flex-direction: row;
  justify-content: center;
`
const MainText = styled.Text`
  color: black;
  font-size: 30px;
  text-align: center;
`

const Home = () => {

  const [showBackground, setShowBackground] = useState(true);

  const handleTimerComplete = () => {
    setShowBackground(false);
  };

  const navigation = useNavigation();

  const ImageSelector = () => {
    navigation.navigate("HomeStack",{screen: 'ImageSelecter'})
  }

  const ChoiceGally = useCallback((album: any) => {
    navigation.navigate("HomeStack", { screen: "ImagePage", params: { galData: { galData: album} } });
  }, []);

  return (
  <Container>
    {showBackground?(
      <BackgroundScreen onTimerComplete={handleTimerComplete}/>
    ):(
      <View style={{flex:1}}>
        <MainView>
          <MainText>
            찰나록
            <AntDesign name="camera" size={30} color="black" />
          </MainText>
        </MainView>

        <ScrollView
          horizontal={false}
          contentContainerStyle={{justifyContent: 'center',alignItems: 'center'}}
        >
          {album.map((item)=>{
            return (
              <TouchableOpacity onPress={()=>ChoiceGally(item)}
                                style={{ marginBottom: 20,alignItems: 'center'}}>
                <Image style={{width: 350, height: 200}} source={{uri : item.thumbnailImg}}/>
                <Text style={{color: 'black', width: 100,fontSize: 20, textAlign: 'center',justifyContent:'center',alignItems: 'center'}}>{item.title}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )}
  </Container>

  )
}

export default Home;


//api
/*const {
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
});*/

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
