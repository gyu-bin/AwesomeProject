import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Modal,
  Alert,
  Image,
  Animated,
  ScrollView,
  FlatList, Dimensions
} from "react-native";
import styled from "styled-components/native";
import { useInfiniteQuery, useMutation, useQuery,useQueryClient } from "react-query";
import { Gallery, GalleryApi, GalleryResponse } from "../api";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { album,ImageData } from "./SampleData/SampleData";
import Pinchable from "react-native-pinchable";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider } from "react-native-image-slider-banner";
const Container = styled.SafeAreaView`
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
const PhotoImage = styled.Image`
  width: 380px;
  height: 400px;
`

//Heart
const HeartArea = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: center;
`
const ImagePage:React.FC<NativeStackScreenProps<any,'ImagePage'>>  = ({
                   route: {
                     params: { galData },
                   },
                  navigation: { setOptions,goBack },
                 }) => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isHeartFull, setIsHeartFull] = useState(false);

  const handlePress = () => {
    setIsHeartFull(!isHeartFull);
  };
  useLayoutEffect(() => {
    setOptions({
      headerLeft: () =>
        <TouchableOpacity onPress={goBack}>
          <Entypo name="chevron-thin-left" size={20} color="black" />
        </TouchableOpacity>,
      headerTitle: '여행지명',
      // headerTitle: galData.galData.title,
      headerTitleStyle: {fontSize: 20}
    });
  }, []);

   return (
    <View>
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

  )
}

export default ImagePage;



/*<Container>
  <ScrollView
    horizontal={false}
    contentContainerStyle={{justifyContent: 'center',alignItems: 'center'}}
  >
    {ImageData.filter(item => item.albumId === galData.galData.albumId).map((item)=>{
      return (
        <View style={{ marginBottom: 20}}>
            <Pinchable>
            <PhotoImage source={{ uri: item. uri}} />
            </Pinchable>
            <View>
              <TouchableOpacity style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                <Ionicons name="heart-outline" size={20} color="#FF551F" style={{ marginLeft: -2, marginRight: -2 }}/>
                <Text style={{paddingLeft: 5}}>{item.id}</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
    })}
  </ScrollView>
</Container>*/

//api 연동
/* const {
   isLoading: feedsLoading,
   isRefetching: isRefetchingFeeds,
   data: queryGalleryData,
   refetch: feedsRefetch,
 } = useQuery<GalleryResponse>(["gallery",galData.galData.id],GalleryApi.getGallery, {
   onSuccess: (res) => {
     // setData(res.data)
   },
   onError: (error) => {
     // console.log(`API ERROR | getFeeds ${error.code} ${error.status}`);
   },
 });*/

{/*{queryGalleryData && queryGalleryData.data && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{flex:1, flexWrap: 'wrap',justifyContent: 'space-around'}}
            data={queryGalleryData.data}
            keyExtractor={(item: Gallery,index:number)=>String(index)}
            renderItem={({ item, index }: { item: Gallery,index: number }) => (
              <TouchableOpacity key={index}>

                <PhotoImage source={{ uri: item.url }} />
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
                    <Ionicons name="heart-outline" size={20} color="#FF551F" style={{ marginLeft: -2, marginRight: -2 }}/>
                    <Text style={{paddingLeft: 5}}>{item.id}</Text>
                  </TouchableOpacity>
                  <Text style={{paddingBottom: 10}}>{item.id}</Text>
                </View>


              </TouchableOpacity>
            )}
          />
        )}*/}

{/* <TouchableOpacity>
          <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/a3/77/b1/a377b17b484d6d509861d451ff76e22b.jpg'}} />
        </TouchableOpacity>*/}
{/* <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg'}} />
        <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/a2/9a/41/a29a41347ae4abcf95ed61cf2eecfc3d.jpg'}} />
        <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/1b/57/52/1b5752a2a91f594e1a4f4f33b6eb0fbc.jpg'}} />
        <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/82/f2/af/82f2afb0a206a32d9f7278e37d3b777e.jpg'}} />
        <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/cb/42/06/cb4206289f3ab96330f2068600cdff2a.jpg'}} />
        <PhotoImage source={{ uri: 'https://i.pinimg.com/564x/83/c2/f0/83c2f0737c76b93917fe37f6c2c70ead.jpg'}} />*/}
