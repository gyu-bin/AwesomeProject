import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImagePage from "../screens/ImagePage";
import ImageSelecter from "../screens/ImageSelecter/ImageSelecter";
import AlbumSelector from "../screens/ImageSelecter/AlbumSelector";
import ImageLook from "../screens/ImageSelecter/ImageLook";
import Home from "../screens/Home";
const NativeStack = createNativeStackNavigator();

const HomeStack = () => {
  return(
    <NativeStack.Navigator
      screenOptions={{
        presentation: "card",
        contentStyle: { backgroundColor: "white" },
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "NotoSansKR-Medium", fontSize: 16 },
      }}
    >
      <NativeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }
        }
      />
      <NativeStack.Screen
        name="ImagePage"
        component={ImagePage}
      />
      <NativeStack.Screen
        name="AlbumSelector"
        component={AlbumSelector}
 /*       options={{
          headerShown: false
        }}*/
      />
      <NativeStack.Screen
        name="ImageLook"
        component={ImageLook}
        options={{
          headerShown: false
        }}
      />
      <NativeStack.Screen
        name="ImageSelecter"
        component={ImageSelecter}
        options={{title: '게시글 작성'}}
      />
    </NativeStack.Navigator>
  )
}

export default HomeStack;
