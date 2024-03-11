import { View, Button } from 'react-native';

export default function ButtonTutorial() {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            <Button
                title='Press'
                onPress={() => console.log('Button pressed')}
                color={'midnightblue'}
                disabled
            />
        </View>
    );
}
