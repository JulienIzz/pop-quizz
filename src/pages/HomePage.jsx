import { View } from 'react-native';
import { MediumButton } from '../MediumButton';
import { HeaderApp } from '../HeaderApp';

export const HomePage = ({theme, setTheme}) => {
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

        </View>
    );
}