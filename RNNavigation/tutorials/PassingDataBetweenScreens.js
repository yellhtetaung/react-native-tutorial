import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function PassingDataBetweenScreens() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='About'
                    component={AboutScreen}
                    initialParams={{ name: 'Guest' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
