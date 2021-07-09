import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
            >
                <Stack.Screen
                    name="BottomTabsNavigator"
                    component={BottomTabsNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;