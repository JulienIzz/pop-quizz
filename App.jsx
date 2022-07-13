import { HomePage } from "./src/pages/HomePage";
import { ThemePage } from "./src/pages/ThemePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContextComp } from "./src/Contexts/ThemeContext";
import { StatusBar } from "expo-status-bar";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeContextComp>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name="Themes"
            component={ThemePage}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextComp>
  );
}

const config = {
  animation: "spring",
  config: {
    stiffness: 10,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
