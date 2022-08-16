import { View, Text } from "react-native";
import React from "react";
import { MediumButton } from "../MediumButton";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export const GamePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <View>
      <MediumButton theme={theme} colorType="primary" text="Réponse 1" />
      <MediumButton theme={theme} colorType="primary" text="Réponse 2" />
      <MediumButton theme={theme} colorType="primary" text="Réponse 3" />
      <MediumButton theme={theme} colorType="primary" text="Réponse 4" />
    </View>
  );
};
