import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./screens/MainPage";
import IntroScreen from "./screens/IntroScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  // const [fontsLoaded, error] = useFonts({
  //   "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  //   "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;