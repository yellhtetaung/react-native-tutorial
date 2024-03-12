import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native';
import pokemonList from '../data.json';

export default function FlatListTutorial() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>
                <FlatList
                    data={pokemonList}
                    renderItem={({ item }) => {
                        console.log(item.id);

                        return (
                            <View
                                key={item.id}
                                style={styles.card}
                            >
                                <Text style={styles.cardText}>{item.type}</Text>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                    // horizontal
                />
            </View>
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
