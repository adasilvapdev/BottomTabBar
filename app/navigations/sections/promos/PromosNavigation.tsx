import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PromosScreen, PromosSubScreen } from '../../../screens/promos'

const PromosNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="PromosScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="PromosScreen"
                component={PromosScreen}
            />
            <Stack.Screen
                name="PromosSubScreen"
                component={PromosSubScreen}
            />
        </Stack.Navigator>
    )
}

export default PromosNavigation