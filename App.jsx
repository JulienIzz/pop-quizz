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
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Themes" component={ThemePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContextComp>
  );
}
