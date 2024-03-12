import { View, Text, StyleSheet } from 'react-native';

export default function Box({ children, style }) {
    return (
        <View style={[styles.box, style]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        padding: 20,

        // width: 50, // for align content
        // height: 50, // for align content

        // flexGrow: 1, // for flex grow

        width: 100, // for relative and absolute layout
        height: 100, // for relative and absolute layout
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
});
