import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FAQsScreen, FAQsSubScreen } from '../../../screens/faqs'

const FAQsNavigation: React.FC = ({ route }: any) => {
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
                initialParams={{
                    setTabBarVisible: route.params.setTabBarVisible,
                    tabBarVisible: route.params.tabBarVisible,
                }}
            />
            <Stack.Screen
                name="FAQsSubScreen"
                component={FAQsSubScreen}
            />
        </Stack.Navigator>
    )
}

export default FAQsNavigation