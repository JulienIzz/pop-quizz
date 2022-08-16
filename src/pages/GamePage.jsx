import { View, Text } from "react-native";
import React from "react";
import { MediumButton } from "../MediumButton";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { HeaderApp } from "../HeaderApp";

export const GamePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <HeaderApp />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginHorizontal: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor ?
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MediumButton theme={theme} colorType="primary" text="Réponse 1" />
        <MediumButton theme={theme} colorType="primary" text="Réponse 2" />
        <MediumButton theme={theme} colorType="primary" text="Réponse 3" />
        <MediumButton theme={theme} colorType="primary" text="Réponse 4" />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 0.5,
        }}
      ></View>
    </View>
  );
};
