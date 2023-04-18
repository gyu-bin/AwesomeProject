// BackgroundScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Image, Dimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``

const BackgroundScreen = ({ onTimerComplete }) => {
  const [timerFinished, setTimerFinished] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerFinished(true);
      onTimerComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      {timerFinished ? null : (
        <Container>
          <Image style={{width: windowWidth, height: windowHeight, position: 'absolute'}}
                 source={{uri: 'https://i.pinimg.com/564x/16/5c/e4/165ce439fa23a0b458f8fe06b9e4ae50.jpg'}}/>
          <Image style={{width: windowWidth, height: windowHeight, position: 'absolute'}}
                 source={{uri: 'https://velog.velcdn.com/images/protine/post/22c3036c-79f2-4373-8150-bb003ea9695a/image.png'}}/>
        </Container>
      )}
    </View>
  );
};

export default BackgroundScreen;
