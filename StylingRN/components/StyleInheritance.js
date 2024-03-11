import { View, Text, StyleSheet } from 'react-native';

export default function StyleInheritance() {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>
                    Style Inheritance <Text style={styles.boldText}>in bold</Text>
                </Text>
            </View>

            <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
                <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
            </View>

            <View style={[styles.box, styles.lightgreenBg, styles.androidShadow]}>
                <Text>Lightgreen box</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'plum',
        padding: 60,
    },

    darkMode: {
        backgroundColor: 'black',
    },

    darkModeText: {
        color: 'white',
    },

    boldText: {
        fontWeight: 'bold',
    },

    box: {
        width: 250,
        height: 250,
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 5,
    },

    lightblueBg: {
        backgroundColor: 'lightblue',
    },

    lightgreenBg: {
        backgroundColor: 'lightgreen',
    },

    boxShadow: {
        shadowColor: '#333333',
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
    },

    androidShadow: {
        elevation: 10,
    },
});
