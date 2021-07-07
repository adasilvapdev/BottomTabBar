import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TaxiScreen, TaxiSubScreen } from '../../../screens/taxi'

const TaxiNavigation: React.FC = ({ route, navigation }: any) => {
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
            initialRouteName="TaxiScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="TaxiScreen"
                component={TaxiScreen}
            />
            <Stack.Screen
                name="TaxiSubScreen"
                component={TaxiSubScreen}
            />
        </Stack.Navigator>
    )
}

export default TaxiNavigation