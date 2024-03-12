import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, TextInput } from 'react-native';

export default function TextInputTutorial() {
    const [name, setName] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.text}>My name is {name}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },

    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },

    text: {
        fontSize: 30,
        padding: 10,
    },
});
