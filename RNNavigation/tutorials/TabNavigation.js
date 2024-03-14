import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from '../screens/CourseListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelPosition: 'below-icon',
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: 'purple',
                }}
            >
                <Tab.Screen
                    name='Course List'
                    component={CourseListScreen}
                />
                <Tab.Screen
                    name='Porifle'
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'My Profile',
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name='person'
                                size={20}
                                color={color}
                            />
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
