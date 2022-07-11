import { HomePage } from "./src/pages/HomePage";
import { ThemePage } from "./src/pages/ThemePage";
import { HeaderApp } from "./src/HeaderApp";
import React, { useState } from "react";
import { Theme_Colorful, Theme_Blue } from "./src/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const ThemeContext = React.createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  const [theme, setTheme] = useState(Theme_Colorful);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Themes" component={ThemePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
