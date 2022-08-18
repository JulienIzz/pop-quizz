import { View, Text } from "react-native";
import React from "react";
import { SmallRoundButton } from "../SmallRoundButton";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { HeaderApp } from "../HeaderApp";
import { LargeButton } from "../LargeButton";

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
          marginTop: 50,
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
        <LargeButton
          theme={theme}
          colorType="primary"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <LargeButton
          theme={theme}
          colorType="primary"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <LargeButton
          theme={theme}
          colorType="primary"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <LargeButton
          theme={theme}
          colorType="primary"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 0.4,
        }}
      >
        <SmallRoundButton theme={theme} colorType="tertiary" text="Suite" />
      </View>
    </View>
  );
};
