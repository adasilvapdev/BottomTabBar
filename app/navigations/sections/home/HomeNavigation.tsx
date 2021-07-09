import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, HomeSubScreen, HomeSubSubScreen } from '../../../screens/home'

const HomeNavigation: React.FC = ({ route, navigation }: any) => {
    const Stack = createStackNavigator();

    // if (route.state && route.state.index > 0) {
    //     navigation.setOptions({ //* If isn't the root route, then hide the bottom tab bar
    //         tabBarVisible: false,
    //     })
    //     route.params.setTabBarVisible(false);
    // } else { //* Else, don't hide the bottom tab bar
    //     navigation.setOptions({
    //         tabBarVisible: true,
    //     })
    //     route.params.setTabBarVisible(true);
    // }

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
                initialParams={{
                    setTabBarVisible: route.params.setTabBarVisible,
                    tabBarVisible: route.params.tabBarVisible,
                    setAnimationType: route.params.setAnimationType,
                }}
            />
            <Stack.Screen
                name="HomeSubScreen"
                component={HomeSubScreen}
            />
            <Stack.Screen
                name="HomeSubSubScreen"
                component={HomeSubSubScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation