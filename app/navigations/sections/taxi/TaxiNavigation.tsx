import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TaxiScreen, TaxiSubScreen } from '../../../screens/taxi'

const TaxiNavigation: React.FC = () => {
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
            />
            <Stack.Screen
                name="TaxiSubScreen"
                component={TaxiSubScreen}
            />
        </Stack.Navigator>
    )
}

export default TaxiNavigation