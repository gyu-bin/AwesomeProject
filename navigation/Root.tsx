import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
// import { useNavigation } from "@react-navigation/native";
import { Host } from "react-native-portalize";

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
                </Nav.Navigator>
            }
        ></Host>
    );
};
export default Root;
