import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Image, Text} from 'react-native';
import { useState } from 'react';
import { Theme_Colorful, Theme_Blue, Theme_Pink } from './src/colors';
import { MediumButton } from './src/standardButton';

export default function App() {

  const [theme, setTheme] = useState(Theme_Colorful);  

  return (
    <View style={{backgroundColor: theme.background, flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={{flexDirection: "row", height: 75, justifyContent: 'space-evenly', marginVertical: 25}}>

        <TouchableOpacity 
        style={{width: '64%', marginHorizontal: 5}} 
        onPress={() => {
          if (theme === Theme_Colorful) {setTheme(Theme_Pink)}
          else if (theme === Theme_Pink) {setTheme(Theme_Colorful)}
        }}>
          <Image 
          style={{width: null, height: 75, resizeMode: 'contain'}}
          source={require('./src/img/GameName.png')}
          />
        </TouchableOpacity>          
        
      </View>
      
      <View style={{height: '15%'}} />

      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <MediumButton theme={theme} colorType='primary' text="JOUER" />
        <MediumButton theme={theme} colorType='secondary' text="PARAMÈTRES" />
        <MediumButton theme={theme} colorType='tertiary' text="AIDE" />
      </View>
    </View>
  );
}