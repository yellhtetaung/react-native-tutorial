import { View, Text, Image, ImageBackground } from 'react-native';
import logoImage from '../assets/adaptive-icon.png';

export default function ImageTutorial() {
    return (
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
            {/* <Image
                source={logoImage}
                style={{ width: 300, height: 300 }}
            />

            <Image
                source={{ uri: 'https://picsum.photos/536/354' }}
                style={{ width: 300, height: 300 }}
            /> */}

            <ImageBackground
                source={logoImage}
                style={{ flex: 1 }}
            >
                <Text>IMAGE TEXT</Text>
            </ImageBackground>
        </View>
    );
}
