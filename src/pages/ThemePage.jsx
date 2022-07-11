import { View } from "react-native";
import { MediumButton } from "../MediumButton";
import { Theme_Blue, Theme_Colorful, Theme_Beige } from "../colors";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export const ThemePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MediumButton
          theme={theme}
          setTheme={setTheme}
          colorType="primary"
          text={Theme_Colorful.name}
          pressFunction={() => {
            setTheme(Theme_Colorful);
          }}
        />
        <MediumButton
          theme={theme}
          setTheme={setTheme}
          colorType="secondary"
          text={Theme_Blue.name}
          pressFunction={() => {
            setTheme(Theme_Blue);
          }}
        />
        <MediumButton
          theme={theme}
          setTheme={setTheme}
          colorType="tertiary"
          text={Theme_Beige.name}
          pressFunction={() => {
            setTheme(Theme_Beige);
          }}
        />
      </View>
    </View>
  );
};
