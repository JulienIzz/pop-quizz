import { View, Text } from "react-native";
import React from "react";
import { MediumButton } from "../MediumButton";
import { SmallRoundButton } from "../SmallRoundButton";
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
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
            width: "90%",
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
          marginVertical: 8,
        }}
      >
        <SmallRoundButton theme={theme} colorType="tertiary" text="Suite" />
      </View>
    </View>
  );
};
