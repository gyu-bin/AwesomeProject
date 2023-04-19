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
  ScrollView, Platform
} from "react-native";
import styled from "styled-components/native";
import { useToast } from "react-native-toast-notifications";
import ImagePicker, { openPicker } from "react-native-image-crop-picker";
import { useNavigation } from "@react-navigation/native";
import { album, ImageData } from "../SampleData/SampleData";
import { GalleryApi } from "../../api";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Calendar } from "react-native-calendars";
import moment from 'moment-timezone';
import { FontAwesome } from "@expo/vector-icons";

const Container = styled.ScrollView`
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

const ThumbNailArea = styled.View`
  height: 150px;
  align-items: center;
  margin-bottom: 20px;
`

const ThumbnaimImg = styled.Image`
  width: 150px;
  height: 150px;
`

const PhotoImage = styled.Image`
  width: 200px;
  height: 200px;
  margin: 10px;
  
`
const ItemView = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

//DataPicker
const CalendarHeader = styled.View`
  align-items: center;
  padding: 10px 0;
`;

const LocationArea = styled.View`
  flex-direction: row;
  flex: 1;
  height: 100%;
  padding: 0px 10px;
  align-items: center;
`
const LocationText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const LocationTextInput = styled.TextInput`
  flex: 1;
  height: 50px;
  padding-left: 15px;
  text-align: center;
`

const StarArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`

const StarText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

const Star = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  width: 100%;
`
const ImageSelecter:React.FC<NativeStackScreenProps<any,'ImageSelecter'>>  = ({
                         navigation: { navigate,setOptions },
                       }) => {
  const navigation = useNavigation();
  const [imageURLs, setImageURLs] = useState([]);
  const [thumbNail, setThumbNail] = useState([]);
  const toast = useToast();
  const [content, setContent] = useState<string>("");
  const [Location, setLocation] = useState<string>("");
  //datePicker
  const [selectedDate, setSelectedDate] = useState<string>("");
  const markedDate = { [selectedDate]: { selected: true } };

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
        maxFiles: 12,
      });

      if (imageURLs.length + newImages.length > 12) {
        toast.show(`이미지는 12개까지 선택할 수 있습니다.`, { type: "warning" });
        return;
      }

      setImageURLs([...imageURLs, ...newImages.map((image) => image.path)]);
    } catch (e) {
      console.log(e);
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

  const ImageDone = () => {
    if (imageURLs.length === 0) {
      toast.show(`이미지를 선택해주세요.`, { type: "warning" });
      return;
    }

    const newAlbumId = ImageData.length + 1; // Calculate newAlbumId each time

    /*for (let i = 0; i < imageURLs.length; i++) {
      album.push({
        userName: 'content',
        albumId: newAlbumId,
        title: content,
        thumbnailImg: 'https://i.pinimg.com/564x/83/c2/f0/83c2f0737c76b93917fe37f6c2c70ead.jpg'
        // thumbnailImg: thumbNail[i].replace("file:/", "https:"),
      });

      ImageData.push({
        albumId: newAlbumId,
        id: newAlbumId + i + 1,
        uri: 'https://i.pinimg.com/564x/83/c2/f0/83c2f0737c76b93917fe37f6c2c70ead.jpg'
        // uri: imageURLs[i].replace("file:/", "https:"),
      });
    }*/

   /* console.log(album);
    console.log(ImageData);*/
    console.log(selectedDate,rating)
    navigate("Tabs", { screen: 'SecArea' });
  };

  //별점
  const [ratingChange, setRatingChange]=useState();
    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
      setRatingChange && setRatingChange(newRating);
    };

    const handleMouseEnter = (newRating) => {
      setHoveredRating(newRating);
    };

    const handleMouseLeave = () => {
      setHoveredRating(null);
    };

    const handleStarClick = (newRating) => {
      handleRatingChange(newRating);
    };

    const [hoveredRating, setHoveredRating] = useState(null);

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= (hoveredRating || rating);
      const starIcon = filled ? "star" : "star-o";
      const starColor = filled ? "#FFD700" : "#D3D3D3";
      stars.push(
        <FontAwesome
          key={i}
          name={starIcon}
          size={30}
          color={starColor}
          onPress={() => handleStarClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        />
      );
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
        <Text style={{textAlign: 'center', fontSize: 20}}>여행날짜선택</Text>
        <Calendar
          theme={{
            arrowColor: "#6F6F6F",
            dotColor: "#FF6534",
            selectedDayBackgroundColor: "#FF6534",
            todayTextColor: "#FF6534",
          }}
          minDate={moment.tz("Asia/Seoul").subtract(1, 'year').format("YYYY-MM-DD")}
          context={{ date: "" }}
          markedDates={markedDate}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          renderHeader={(date) => (
            <CalendarHeader>
              <Text style={{ fontFamily: "NotoSansKR-Bold", fontSize: 18, lineHeight: 24 }}>{date.getMonth() + 1}</Text>
              <Text style={{ fontSize: 12, color: "#737373" }}>{date.getFullYear()}</Text>
            </CalendarHeader>
          )}
        />
      </View>

      <ThumbNailArea>
        <TouchableOpacity onPress={thumbNailImage}><Text style={{textAlign: 'center'}}>썸네일 이미지 선택</Text></TouchableOpacity>
        {thumbNail.length>0?
          <ThumbnaimImg source={{uri: thumbNail}}
          />: null
        }
      </ThumbNailArea>

      {imageURLs.length < 1?
        <TouchableOpacity onPress={selectImage}>
          <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}>사진선택</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={addImage}>
          <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}>사진추가선택</Text>
        </TouchableOpacity>
      }

      <ScrollView horizontal contentContainerStyle={{height: 220, backgroundColor: 'lightgray'}}>
        {imageURLs.map((imageURL, index) => (
          imageURL ? (
            <PhotoImage
              key={index}
              source={{ uri: imageURL }}
            />
          ) : null
        ))}
      </ScrollView>

      <LocationArea>
        <LocationText>장소</LocationText>
        <LocationTextInput
          value={Location}
          placeholderTextColor="#B0B0B0"
          placeholder="장소를 입력하세요"
        />
      </LocationArea>

      <StarArea>
        <LocationText>별점</LocationText>
        <Star>
          {stars}
          <Text style={{fontSize: 20}}>{rating} / 5</Text>
        </Star>
      </StarArea>

    </Container>
  )
}

export default ImageSelecter;
