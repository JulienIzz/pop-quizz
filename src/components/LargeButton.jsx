import { TouchableOpacity, Text } from "react-native";

export const LargeButton = ({ theme, text, pressFunction, colorType }) => {
  var ButtonBackgrounColor = theme[colorType];
  return (
    <TouchableOpacity
      style={{
        margin: 4,
        height: 70,
        width: "80%",
        maxWidth: 500,
        minWidth: 50,
        elevation: 8,
        backgroundColor: ButtonBackgrounColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        justifyContent: "center",
      }}
      onPress={pressFunction}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
