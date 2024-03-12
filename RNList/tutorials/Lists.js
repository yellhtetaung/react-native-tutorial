import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import pokemonList from '../data.json';

export default function Lists() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {pokemonList.map(pokemon => {
                    return (
                        <View
                            key={pokemon.id}
                            style={styles.card}
                        >
                            <Text style={styles.cardText}>{pokemon.type}</Text>
                            <Text style={styles.cardText}>{pokemon.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },

    scrollView: {
        paddingHorizontal: 16,
    },

    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderWidth: 2,
        marginBottom: 16,
    },

    cardText: {
        fontSize: 30,
    },
});
