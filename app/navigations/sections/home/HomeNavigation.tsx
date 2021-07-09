import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, HomeSubScreen, HomeSubSubScreen } from '../../../screens/home'

const HomeNavigation: React.FC = ({ route }: any) => {
    const Stack = createStackNavigator();

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