import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ExploreScreen, ExploreSubScreen } from '../../../screens/explore'

const ExploreNavigation: React.FC = ({ route }: any) => {
    const Stack = createStackNavigator()

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
                initialParams={{
                    setTabBarVisible: route.params.setTabBarVisible,
                    tabBarVisible: route.params.tabBarVisible,
                }}
            />
            <Stack.Screen
                name="ExploreSubScreen"
                component={ExploreSubScreen}
            />
        </Stack.Navigator>
    )
}

export default ExploreNavigation