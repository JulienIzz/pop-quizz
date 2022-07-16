import { View, Text } from "react-native";
import { MediumButton } from "../MediumButton";
import { HeaderApp } from "../HeaderApp";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";

export const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}
    >
      <HeaderApp theme={theme} setTheme={setTheme}></HeaderApp>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MediumButton theme={theme} colorType="primary" text="JOUER" />
        <MediumButton
          theme={theme}
          colorType="secondary"
          text="THEMES"
          pressFunction={() => navigation.navigate("Themes")}
        />
        <MediumButton
          theme={theme}
          colorType="tertiary"
          text="AIDE"
          pressFunction={() => setModalVisible(!modalVisible)}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
              width: "70%",
              padding: 10,
              backgroundColor: theme.primary,
              borderRadius: 12,
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
                backgroundColor: theme.grey,
                borderRadius: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 28,
                  fontWeight: "bold",
                }}
              >
                BONJOUR
              </Text>
              <Text style={{ textAlign: "center", fontSize: 18, margin: 10 }}>
                Ceci est un jeu de quizz dans lequel vous devrez répondre à une
                série de questions. {"\n"}
                {"\n"}
                Merci dans le développement de cette simplissime application à :
                {"\n"}
                {"\n"}AntoineT
                {"\n"}PierreP
                {"\n"}DenisC
                {"\n"}Tout BAM
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
