import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AboutScreen({ route, navigation }) {
    const { name } = route.params;

    // For Dynamic Stack Navigation Options
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name,
        });
    }, [navigation, name]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About {name}</Text>

            <Button
                title='Update the name'
                onPress={() => navigation.setParams({ name: 'Ye Htet Aung' })}
            />

            <Button
                title='Go back with data'
                onPress={() => navigation.navigate('Home', { result: 'Data from about' })}
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
