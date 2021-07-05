import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigation } from '../navigations/sections/home';
import { PromotionsNavigation } from '../navigations/sections/promotions';
import { ExploreNavigation } from '../navigations/sections/explore';
import { FAQsNavigation } from '../navigations/sections/faqs';
import { TaxiNavigation } from '../navigations/sections/taxi';
import Tabs from '../navigations/Tabs';

const Stack = createStackNavigator();

const RootNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>

                <Stack.Screen
                    name="HomeNavigation"
                    // component={HomeNavigation}
                    component={Tabs}
                />
                <Stack.Screen
                    name="PromotionsNavigation"
                    component={PromotionsNavigation}
                />
                <Stack.Screen
                    name="ExploreNavigation"
                    component={ExploreNavigation}
                />
                <Stack.Screen
                    name="FAQsNavigation"
                    component={FAQsNavigation}
                />
                <Stack.Screen
                    name="TaxiNavigation"
                    component={TaxiNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
