import { View } from "react-native";
import { MediumButton } from "../MediumButton";
import { THEME_COLORFUL, THEME_BLUE, THEME_BEIGE } from "../colors";
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
          text={THEME_COLORFUL.name}
          pressFunction={() => {
            setTheme(THEME_COLORFUL);
          }}
        />
        <MediumButton
          theme={theme}
          setTheme={setTheme}
          colorType="secondary"
          text={THEME_BLUE.name}
          pressFunction={() => {
            setTheme(THEME_BLUE);
          }}
        />
        <MediumButton
          theme={theme}
          setTheme={setTheme}
          colorType="tertiary"
          text={THEME_BEIGE.name}
          pressFunction={() => {
            setTheme(THEME_BEIGE);
          }}
        />
      </View>
    </View>
  );
};
