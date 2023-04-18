import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {View} from "react-native";
import Root from "./navigation/Root";
import { QueryClient, QueryClientProvider } from "react-query";

const RootNavigation = () => {
  return (
    <View style={{ flex: 1 }} >
       <Root />
    </View>
  );
}


function App () {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer independent={true}>
      <RootNavigation />
    </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
