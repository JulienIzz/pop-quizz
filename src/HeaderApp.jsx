import { View, TouchableOpacity, Image } from 'react-native';
import { Theme_Colorful, Theme_Pink } from './colors';

export const HeaderApp = (props) => {
  return (<View style={{
    flexDirection: "row",
    height: 75,
    justifyContent: 'space-evenly',
    marginVertical: 25
  }}>
    <TouchableOpacity style={{
      width: '64%',
      marginHorizontal: 5
    }} onPress={() => {
      if (props.theme === Theme_Colorful) {
        props.setTheme(Theme_Pink);
      } else if (props.theme === Theme_Pink) {
        props.setTheme(Theme_Colorful);
      }
    }}>
      <Image style={{
        width: null,
        height: 75,
        resizeMode: 'contain'
      }} source={require('../src/img/GameName.png')} />
    </TouchableOpacity>
  </View>);
};
