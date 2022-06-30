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
          source={{uri: 'https://cdn-icons.flaticon.com/png/512/2068/premium/2068846.png?token=exp=1656619468~hmac=b99253ad5f6677f2be8a794070f6e197'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: '64%'}} onPress={() => console.log('pressed')}>
          <Image 
          style={{width: null, height: 75, resizeMode: 'contain'}}
          source={require('./src/img/GameName.png')}
          />
        </TouchableOpacity>          
        <TouchableOpacity style={{flex: 1, margin: 10}} onPress={() => console.log('pressed')}>
          <Image 
          style={{flex: 1,width: null, height: null, resizeMode: 'contain'}}
          source={{uri: 'https://cdn-icons.flaticon.com/png/512/2311/premium/2311515.png?token=exp=1656618892~hmac=6e43ecbe6728f808c6633bb5e548d15f'}}
          onPress
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const homeStyles = StyleSheet.create({

});