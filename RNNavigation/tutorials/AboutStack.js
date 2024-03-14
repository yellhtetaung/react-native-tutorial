import { Pressable, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export function AboutStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6a51ae',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: { fontWeight: 'bold' },
                headerRight: () => (
                    <Pressable onPress={() => alert('Menu button pressed!')}>
                        <Text style={{ color: '#FFF', fontSize: 16 }}>Menu</Text>
                    </Pressable>
                ),
                contentStyle: {
                    backgroundColor: '#e8e4f3',
                },
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'Welcome Home',
                }}
            />
            <Stack.Screen
                name='About'
                component={AboutScreen}
                initialParams={{ name: 'Guest' }}
            />
        </Stack.Navigator>
    );
}

export default function AboutStackNavigator() {
    return <AboutStack />;
}
