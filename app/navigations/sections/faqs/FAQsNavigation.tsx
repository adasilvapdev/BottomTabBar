import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FAQsScreen, FAQsSubScreen } from '../../../screens/faqs'

const FAQsNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="FAQsScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="FAQsScreen"
                component={FAQsScreen}
            />
            <Stack.Screen
                name="FAQsSubScreen"
                component={FAQsSubScreen}
            />
        </Stack.Navigator>
    )
}

export default FAQsNavigation