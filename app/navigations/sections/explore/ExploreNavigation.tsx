import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ExploreScreen, ExploreSubScreen } from '../../../screens/explore'

const ExploreNavigation: React.FC = ({ route, navigation }: any) => {
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
            initialRouteName="ExploreScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="ExploreScreen"
                component={ExploreScreen}
            />
            <Stack.Screen
                name="ExploreSubScreen"
                component={ExploreSubScreen}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigation