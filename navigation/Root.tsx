import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
// import { useNavigation } from "@react-navigation/native";
import { Host } from "react-native-portalize";
import HomeStack from "./HomeStack";

const Nav = createNativeStackNavigator();

const Root = () => {
      // const navigation = useNavigation();

    return (
        <Host
            children={
                <Nav.Navigator
                    screenOptions={{
                        presentation: "card",
                        headerShown: false,
                    }}
                >
                  <Nav.Screen name="Tabs" component={Tabs} />
                  <Nav.Screen name="HomeStack" component={HomeStack} />
                </Nav.Navigator>
            }
        ></Host>
    );
};
export default Root;
