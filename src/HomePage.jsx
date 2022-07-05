import { View } from 'react-native';
import { useState } from 'react';
import { Theme_Colorful } from './colors';
import { MediumButton } from './MediumButton';
import { HeaderApp } from './HeaderApp';

export function HomePage() {

  const [theme, setTheme] = useState(Theme_Colorful);

  return (
    <View style={{
      backgroundColor: theme.background,
      flex: 1
    }}>

      <HeaderApp theme={theme} setTheme={setTheme}></HeaderApp>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}>

        <MediumButton theme={theme} colorType='primary' text="JOUER" />
        <MediumButton theme={theme} colorType='secondary' text="PARAMÈTRES" />
        <MediumButton theme={theme} colorType='tertiary' text="AIDE" />

      </View>

    </View>);
}
