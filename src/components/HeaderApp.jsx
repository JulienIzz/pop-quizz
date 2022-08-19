import { View, TouchableOpacity, Image } from "react-native";
import { Alert } from "react-native";

export const HeaderApp = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 75,
        justifyContent: "space-evenly",
        marginTop: 60,
        marginBottom: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: "64%",
          marginHorizontal: 5,
        }}
        onPress={() => Alert.alert("C'est trop pipou", "Charline je t'aime")}
      >
        <Image
          style={{
            width: null,
            height: 75,
            resizeMode: "contain",
          }}
          source={require("../img/GameName.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
