import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity, Text} from 'react-native';

export default function App() {
  return (
    <View style={homeStyles.root}>
      <TouchableOpacity onPress={() => alert('Waouw')} underlayColor="white">
          <View style={homeStyles.button}>
            <Text>JOUER</Text>
          </View>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const homeStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3b8ea5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#2D728F',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
  }
});