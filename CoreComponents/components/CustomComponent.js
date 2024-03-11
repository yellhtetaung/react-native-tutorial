import { View } from 'react-native';
import Greet from './Greet';

export default function CustomComponent() {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <Greet name='Ye Htet Aung' />
            <Greet name='Pa Pa Hmwe' />
        </View>
    );
}
