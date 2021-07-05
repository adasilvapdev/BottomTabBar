import React from 'react';
import { StyleSheet, } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { PromosScreen } from '../screens/promos';
import { ExploreScreen } from '../screens/explore';
import { FAQsScreen } from '../screens/faqs';
import { TaxiScreen } from '../screens/taxi';
import { HomeIcon, TicketIcon, SearchIcon, ProfileIcon } from '../components/atoms/icons';
import { THEME } from '../styles';
import { COLORS } from '../styles/theme';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: THEME.COLORS.PRIMARY,
                inactiveTintColor: THEME.COLORS.GRAY,
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="PromosScreen"
                component={PromosScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TicketIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="FAQsScreen"
                component={FAQsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="TaxiScreen"
                component={TaxiScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ProfileIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})