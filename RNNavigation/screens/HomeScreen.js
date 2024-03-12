import { View, Text, StyleSheet, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation, route }) {
    // const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{route.params?.result}</Text>

            <Button
                title='Go to About'
                onPress={() => navigation.navigate('About', { name: 'Zen' })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
