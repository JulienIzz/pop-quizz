import { TouchableOpacity, Text } from "react-native";

export const SmallRoundButton = ({
  theme,
  text,
  pressFunction,
  colorType,
  state,
}) => {
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
        opacity: state[1],
      }}
      onPress={pressFunction}
      disabled={state[0]}
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
