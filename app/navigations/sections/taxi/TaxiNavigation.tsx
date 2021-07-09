import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TaxiScreen, TaxiSubScreen } from '../../../screens/taxi'

const TaxiNavigation: React.FC = ({ route }: any) => {
    const Stack = createStackNavigator()

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
                initialParams={{
                    setTabBarVisible: route.params.setTabBarVisible,
                    tabBarVisible: route.params.tabBarVisible,
                }}
            />
            <Stack.Screen
                name="TaxiSubScreen"
                component={TaxiSubScreen}
            />
        </Stack.Navigator>
    )
}

export default TaxiNavigation