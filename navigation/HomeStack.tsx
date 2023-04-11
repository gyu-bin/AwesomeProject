import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapFilter from "../screens/MapFilter/MapFilter";
import ImagePage from "../screens/ImagePage";
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
        name="MapFilter"
        component={MapFilter}
      />
      <NativeStack.Screen
        name="ImagePage"
        component={ImagePage}
        options={{
          headerShown: false
        }
        }
      />
    </NativeStack.Navigator>
  )
}

export default HomeStack;
