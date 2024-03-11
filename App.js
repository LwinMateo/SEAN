import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./screens/MainPage";
import IntroScreen from "./screens/IntroScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import userOption from "./screens/userOption";

// import the sidebars1.js file
import sidebars1 from "./screens/sidebars1";

import ContactsOptions from "./screens/ContactsOptions";
import GroupsOptions from "./screens/GroupsOptions";

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
            name="userOption"
            component={userOption}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: true, headerTitle: ""}}
          />
          <Stack.Screen
            name="Login"
            component={SignInScreen}
            options={{ headerShown: true , headerTitle: ""}}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="sidebars1"
            component={sidebars1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContactsOptions"
            component={ContactsOptions}
            options={{ headerShown: true, headerTitle: "Contacts", headerStyle: { backgroundColor: "#74b9ff"}}}
            
          />
          <Stack.Screen
            name="GroupsOptions"
            component={GroupsOptions}
            options={{ headerShown: true, headerStyle: { backgroundColor: "#74b9ff"}}}
          />
        </Stack.Navigator>
      ) : null}

    </NavigationContainer>
  );
};

export default App;