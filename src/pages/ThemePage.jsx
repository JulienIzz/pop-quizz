import { View } from 'react-native'
import { MediumButton } from '../MediumButton'
import { Theme_Blue, Theme_Colorful, Theme_Pink } from '../colors'

export const ThemePage = (props) => {
    return (
        <View
            style={{
                backgroundColor: props.theme.background,
                flex: 1
            }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>

                <MediumButton theme={props.theme} setTheme={props.setTheme} colorType='primary' text="Pétillant !" pressFunction={() => { props.setTheme(Theme_Colorful) }} />
                <MediumButton theme={props.theme} setTheme={props.setTheme} colorType='secondary' text="Bleu" pressFunction={() => { props.setTheme(Theme_Blue) }} />
                <MediumButton theme={props.theme} setTheme={props.setTheme} colorType='tertiary' text="Rose" pressFunction={() => { props.setTheme(Theme_Pink) }} />

            </View>
        </View>
    )
}