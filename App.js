import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import { Theme_Colorful } from './src/colors';

var Chosen_Theme_By_User = Theme_Colorful;

export default function App() {
  return (
    <View style={{backgroundColor: Chosen_Theme_By_User.background, flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={{flexDirection: "row", height: 75, justifyContent: 'space-evenly', marginTop: 5}}>
        <TouchableOpacity style={{flex: 1, margin: 10}} onPress={() => console.log('pressed')}>
          <Image 
          style={{flex: 1,width: null, height: null, resizeMode: 'contain'}}
          source={require('./src/img/setup.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '64%', marginHorizontal: 5}} onPress={() => console.log('pressed')}>
          <Image 
          style={{width: null, height: 75, resizeMode: 'contain'}}
          source={require('./src/img/GameName.png')}
          />
        </TouchableOpacity>          
        <TouchableOpacity style={{flex: 1, margin: 10}} onPress={() => console.log('pressed')}>
          <Image 
          style={{flex: 1,width: null, height: null, resizeMode: 'contain'}}
          source={require('./src/img/question_mark.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const homeStyles = StyleSheet.create({

});