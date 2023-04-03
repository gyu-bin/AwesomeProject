import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapFilter from "../screens/MapFilter/MapFilter";
import MyConditionMenu from "../screens/MapCon/MyConditionMenu";
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
        name="MyConditionMenu"
        component={MyConditionMenu}
        options={{
          headerShown: false
        }
        }
      />
    </NativeStack.Navigator>
  )
}

export default HomeStack;
