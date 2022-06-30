import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default function App() {
  return (
    <View style={homeStyles.root}>

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
});