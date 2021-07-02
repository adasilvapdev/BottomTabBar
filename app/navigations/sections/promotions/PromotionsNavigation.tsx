import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { PromotionsScreen, PromotionsSubScreen } from '../../../screens/promotions'

const PromotionsNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="PromotionsScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="PromotionsScreen"
                component={PromotionsScreen}
            />
            <Stack.Screen
                name="PromotionsSubScreen"
                component={PromotionsSubScreen}
            />
        </Stack.Navigator>
    )
}

export default PromotionsNavigation