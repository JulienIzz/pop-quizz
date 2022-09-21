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
              cardStyleInterpolator: forFade,
            }}
          >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Themes" component={ThemePage} />
            <Stack.Screen name="Game" component={GamePage} />
            <Stack.Screen name="End" component={EndPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScoreContextComp>
    </ThemeContextComp>
  );
}
