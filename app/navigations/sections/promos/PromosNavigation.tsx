import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PromosScreen, PromosSubScreen } from '../../../screens/promos'

const PromosNavigation: React.FC = ({ route, navigation }: any) => {
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