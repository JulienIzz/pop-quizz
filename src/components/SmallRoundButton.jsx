import { TouchableOpacity, Text } from "react-native";

export const SmallRoundButton = ({ theme, text, pressFunction, colorType }) => {
  var ButtonBackgrounColor = theme[colorType];
  return (
    <TouchableOpacity
      style={{
        margin: 8,
        height: 60,
        width: 60,
        maxWidth: 200,
        minWidth: 50,
        elevation: 8,
        backgroundColor: ButtonBackgrounColor,
        borderRadius: 30,
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
          fontSize: 14,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
