import { View } from 'react-native';
import { MediumButton } from '../MediumButton';
import { HeaderApp } from '../HeaderApp';

export const HomePage = (props) => {
    return (
        <View style={{
            backgroundColor: props.theme.background,
            flex: 1
        }}>

            <HeaderApp theme={props.theme} setTheme={props.setTheme}></HeaderApp>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}>

                <MediumButton theme={props.theme} colorType='primary' text="JOUER" />
                <MediumButton theme={props.theme} colorType='secondary' text="PARAMÈTRES" />
                <MediumButton theme={props.theme} colorType='tertiary' text="AIDE" />

            </View>

        </View>
    );
}