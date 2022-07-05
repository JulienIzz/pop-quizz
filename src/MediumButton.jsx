import { TouchableOpacity, Text } from 'react-native';

export const MediumButton = (props) => {

    var ButtonBackgrounColor = props.theme[props.colorType];

    return (
        <TouchableOpacity
            style={{
                margin: 8,
                height: 60,
                width: '50%',
                maxWidth: 200,
                minWidth: 50,
                elevation: 8,
                backgroundColor: ButtonBackgrounColor,
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12,
                justifyContent: 'center'
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 18
                }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
};