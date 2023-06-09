import React, { useEffect, useRef, useState } from "react";
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import SecArea from "../screens/SecArea";
import ThirArea from "../screens/ThirArea";
import { Ionicons } from "@expo/vector-icons";
import styled from 'styled-components/native';
import {MainBottomTabParamList} from "../types/type";
import { Animated, DeviceEventEmitter, Platform, useWindowDimensions, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import BackgroundScreen from "../components/BackgroundScreen";
const Container = styled.View`
  height: ${Platform.OS === "ios" ? 70 : 60}px;
`;

const TabBarContainer = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  width: 100%;
  height: ${Platform.OS === "ios" ? 70 : 60}px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const ShadowBox = styled.View`
  position: absolute;
  width: 100%;
  height: ${Platform.OS === "ios" ? 70 : 60}px;
  background-color: white;
  box-shadow: 1px 1px 3px gray;
`;

const SlidingTabContainer = styled.View<{ tabWidth: number }>`
  position: absolute;
  width: ${(props: any) => props.tabWidth}px;
  left: 0;
  align-items: center;
  box-shadow: 1px 1px 3px gray;
`;

const Circle = styled.View<{ tabWidth: number }>`
  width: ${(props: any) => props.tabWidth * 1.8}px;
  height: ${(props: any) => props.tabWidth * 1.9}px;
  bottom: ${Platform.OS === "ios" ? 18 : 16}px;
  border-radius: ${(props: any) => props.tabWidth}px;
  background-color: white;
`;

const IconButton = styled.TouchableOpacity`
  align-items: center;
`;

const SlidingTab = Animated.createAnimatedComponent(View);
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const TAB_WIDTH = SCREEN_WIDTH / 3;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateTab = (index: number) => {
        Animated.spring(translateX, {
            toValue: index * TAB_WIDTH,
            useNativeDriver: true,
            restSpeedThreshold: 5,
        }).start();
    };

    useEffect(() => {
        translateTab(state.index);
    }, [state.index, SCREEN_WIDTH]);


   /* const [showBackground, setShowBackground] = useState(true);
    const handleTimerComplete = () => {
        setShowBackground(false);
    };*/

    return (
        <>
            <Container>
                {/*{showBackground?(
                  <BackgroundScreen onTimerComplete={handleTimerComplete}/>
                ):(
                  <View>*/}
                      <Shadow distance={3}>
                          <ShadowBox />
                      </Shadow>
                      <TabBarContainer>
                          {state.routes.map((route, index) => {
                              const { options } = descriptors[route.key];

                              const isFocused = state.index === index;

                              const onPress = () => {
                                  const event = navigation.emit({
                                      type: "tabPress",
                                      target: route.key,
                                      canPreventDefault: true,
                                  });

                                  if (isFocused && route.name === "Home") DeviceEventEmitter.emit("HomeFeedScrollToTop");
                                  if (isFocused && route.name === "SecArea") DeviceEventEmitter.emit("ClubListScrollToTop");

                                  if (!isFocused && !event.defaultPrevented) {
                                      // The `merge: true` option makes sure that the params inside the tab screen are preserved
                                      navigation.navigate({ name: route.name, merge: true });
                                  }
                              };

                              return (
                                <IconButton key={index} accessibilityRole="button" accessibilityState={isFocused ? { selected: true } : {}} accessibilityLabel={options.tabBarAccessibilityLabel} onPress={onPress}>
                                    <AnimatedIcon
                                      name={isFocused ? route.params.activeIcon : route.params.inActiveIcon}
                                      size={24}
                                      color={isFocused ? "black" : "gray"}
                                      style={{ bottom: Platform.OS === "ios" ? 6 : 0, padding: 10 }}
                                    />
                                </IconButton>
                              );
                          })}
                      </TabBarContainer>
                  {/*</View>*/}
                    {/*)}*/}
            </Container>
        </>
    );
};

const Tabs = () => (
    <Tab.Navigator
        initialRouteName="SecArea"
        sceneContainerStyle={{ backgroundColor: "white" }}
        screenOptions={{ tabBarShowLabel: false, headerShown: false }}
        tabBar={(props: any) => <CustomTabBar {...props} />}
    >
        <Tab.Screen name="Home" component={Home} initialParams={{ activeIcon: "people", inActiveIcon: "people-outline" }} options={{ headerShown: false }} />
        <Tab.Screen name="SecArea" component={SecArea} initialParams={{ activeIcon: "image", inActiveIcon: "image-outline" }} options={{}} />
        <Tab.Screen name="ThirArea" component={ThirArea} initialParams={{ activeIcon: "map", inActiveIcon: "map-outline" }} options={{}} />
    </Tab.Navigator>
);

export default Tabs;
