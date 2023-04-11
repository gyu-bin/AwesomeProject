import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImagePage from "../screens/ImagePage";
import ImageSelecter from "../screens/ImageSelecter/ImageSelecter";
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
        name="ImagePage"
        component={ImagePage}
        options={{
          headerShown: false
        }
        }
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
