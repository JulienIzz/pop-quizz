import { Modal, View, Text } from "react-native";

export function ModaleAide(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
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
            backgroundColor: props.theme.primary,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              backgroundColor: props.theme.grey,
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
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                margin: 10,
              }}
            >
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
  );
}
