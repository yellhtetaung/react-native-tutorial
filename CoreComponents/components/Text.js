import { View, Text } from 'react-native';

export default function TextTutorial() {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <Text>
                <Text style={{ color: 'white' }}>Hello</Text> World
            </Text>
        </View>
    );
}
