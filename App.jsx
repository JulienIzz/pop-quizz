import { HomePage } from "./src/pages/HomePage";
import { ThemePage } from "./src/pages/ThemePage";
import { GamePage } from "./src/pages/GamePage";
import { EndPage } from "./src/pages/EndPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContextComp } from "./src/contexts/ThemeContext";
import { ScoreContextComp } from "./src/contexts/ScoreContext";
import { StatusBar } from "expo-status-bar";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeContextComp>
      <ScoreContextComp>
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
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="Themes"
              component={ThemePage}
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="Game"
              component={GamePage}
              options={{ animation: "fade" }}
            />
            <Stack.Screen
              name="End"
              component={EndPage}
              options={{ animation: "fade" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ScoreContextComp>
    </ThemeContextComp>
  );
}
