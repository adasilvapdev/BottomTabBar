import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, HomeSubScreen } from '../../../screens/home'

const HomeNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen
                name="HomeSubScreen"
                component={HomeSubScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation