import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FAQsScreen, FAQsSubScreen } from '../../../screens/faqs'

const FAQsNavigation: React.FC = ({ route, navigation }: any) => {
    const Stack = createStackNavigator()

    if (route.state && route.state.index > 0) {
        navigation.setOptions({ //* If isn't the root route, then hide the bottom tab bar
            tabBarVisible: false,
        })
        route.params.setTabBarVisible(false);
    } else { //* Else, don't hide the bottom tab bar
        navigation.setOptions({
            tabBarVisible: true,
        })
        route.params.setTabBarVisible(true);
    }

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