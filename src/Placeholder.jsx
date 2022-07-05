import { View } from 'react-native';

export function Placeholder(props) {
  return (<View style={{
    height: props.height,
    width: props.width
  }} />);
}
