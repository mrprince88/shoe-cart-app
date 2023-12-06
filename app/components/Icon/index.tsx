import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { IconProps } from 'app/types';
import xmlIcons from './xml-icons';

export default function Icon({
    name,
    style = {},
    width = 24,
    height = 24,
    color = '#362E2A',
}: IconProps) {
    return (
        <View style={style}>
            <SvgXml xml={xmlIcons[name](width, height, color)} />
        </View>
    );
}
