import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, HomeSubScreen } from '../../../screens/home'
import { useRoute, useNavigation } from '@react-navigation/native';

const HomeNavigation: React.FC = ({ route, navigation }: any) => {
    if (route.state && route.state.index > 0) {
        navigation.setOptions({ //* If isn't the root route, then hide the bottom tab bar
            tabBarVisible: false,
        })
        route.params.setTabBarVisible(false)
    } else { //* Else, don't hide the bottom tab bar
        navigation.setOptions({
            tabBarVisible: true,
        })
        route.params.setTabBarVisible(true)
    }

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