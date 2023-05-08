import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { ImageSlider } from "react-native-image-slider-banner";
import { album, ImageData } from "../SampleData/SampleData";

const Container = styled.View`
  flex: 1;
  width: 100%;
`

const AlbumHeader = styled.View`
  padding: 5px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: black;
  text-align: center
`
const AlubmText =styled.Text`
  font-size: 35px;
  text-align: center;
  color: black;
`

const HeartArea = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: center;
`

const ImageLook= ({
                    navigation: { setOptions,goBack },
                    route:{params:{galData}}
                  }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isHeartFull, setIsHeartFull] = useState<boolean>(false);

  const [like,setLike] = useState([...ImageData])


  const handlePress = (index) => {
    // increase the like count by 1
    const updatedItem = {...like[index], likeCount: like[index].likeCount + 1};
    setLike(like.map((item, idx) => idx === index ? updatedItem : item));
    setIsHeartFull(true);
  };

  const LikeCancle = (index) => {
    // decrease the like count by 1
    const updatedItem = {...like[index], likeCount: like[index].likeCount - 1};
    setLike(like.map((item, idx) => idx === index ? updatedItem : item));
    setIsHeartFull(false);
  };

  useLayoutEffect(() => {
    {album.filter(item => item.albumId === galData.galData.albumId).map((item)=>{
      setOptions({
        headerLeft: () =>
          <TouchableOpacity onPress={goBack}>
            <Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>,
        headerTitle: item.title,
        headerTitleStyle: {fontSize: 20},
      });
    })}
  }, []);

  return (
    <Container>
      <ScrollView style={{height: '80%'}}>
        {like.filter(item => item.albumId === galData.galData.albumId).map((item,index)=>{
          return(
            <View>
              <ImageSlider
                data={[
                  {img: item.uri}
                ]}
                caroselImageStyle={{width: windowWidth, height: windowHeight-150, resizeMode: 'cover'}}
                showIndicator={false}
                preview={false}
              />
              <HeartArea>
                <TouchableOpacity onPress={()=>(isHeartFull? LikeCancle(index):handlePress(index))}>
                  {item.likeYn? (
                    <Ionicons
                      name={isHeartFull ? "heart-outline" : "heart"}
                      size={25}
                      color="#FF551F"
                      style={{ marginLeft: -2, marginRight: -2 }}
                    />
                  ):(
                    <Ionicons
                      name={isHeartFull ? "heart" : "heart-outline"}
                      size={25}
                      color="#FF551F"
                      style={{ marginLeft: -2, marginRight: -2 }}
                    />
                  )}
                </TouchableOpacity>
                <Text style={{paddingLeft: 7, fontSize: 20}}>{item.likeCount}</Text>
              </HeartArea>
            </View>
          )
        })}

      </ScrollView>

    </Container>
  );
};

export default ImageLook;

{/*<FlatList
                automaticallyAdjustContentInsets={false}
                contentContainerStyle={{ paddingHorizontal: offset + gap == 0 ? 0 : (offset + gap) / 2 }}
                data={pages}
                decelerationRate="fast"
                horizontal
                keyExtractor={(item: any) => `page__${item.color}`}
                onScroll={onScroll}
                pagingEnabled
                renderItem={({ item, index }: { item: string; index: number }) => (
                  <Pinchable>
                    <Image style={{width: windowWidth, height: windowHeight-150}}
                           source={{ uri: item }}
                    />
                  </Pinchable>
                )}
                snapToInterval={pageWidth + gap}
                snapToAlignment="start"
                showsHorizontalScrollIndicator={false}
              />*/}
{/* <Carousel
                pages={item.uri}
                pageWidth={windowWidth}
                gap={0}
                offset={0}
                initialScrollIndex={0}
                keyExtractor={(item: string, index: number) => String(index)}
                showIndicator={(item.uri?.length ?? 0) > 1}
                renderItem={({ item, index }: { item: string; index: number }) => (
                  <Pinchable>
                    <Image style={{width: windowWidth, height: windowHeight-150}} source={{uri: 'https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg'}}/>
                  </Pinchable>
                )}
              />*/}
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
{/*<ImageSlider
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
      />*/}
