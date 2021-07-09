import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation } from './sections/home'
import { PromosNavigation } from './sections/promos'
import { ExploreNavigation } from './sections/explore'
import { FAQsNavigation } from './sections/faqs'
import { TaxiNavigation } from './sections/taxi'
import { HomeIcon, TicketIcon, SearchIcon, ProfileIcon } from '../components/atoms/icons';
import { THEME } from '../styles';
import { TabBarCustomButton } from '../components/organisms/bottom-tab-bar'

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
    const [tabBarVisible, setTabBarVisible] = useState(true)

    return (
        <Tab.Navigator
            lazy={false}
            tabBarOptions={{
                showLabel: false,
                style: styles.tabBarOptions
            }}
        >
            <Tab.Screen
                name="HomeNavigation"
                component={HomeNavigation}
                initialParams={{
                    setTabBarVisible: setTabBarVisible,
                    tabBarVisible: tabBarVisible,
                }}
                options={{
                    tabBarAccessibilityLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={0}
                            tabBarVisible={tabBarVisible}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="PromosNavigation"
                component={PromosNavigation}
                initialParams={{
                    setTabBarVisible: setTabBarVisible,
                    tabBarVisible: tabBarVisible,
                }}
                options={{
                    tabBarAccessibilityLabel: 'Promos',
                    tabBarIcon: ({ focused }) => (
                        <TicketIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={1}
                            tabBarVisible={tabBarVisible}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ExploreNavigation"
                component={ExploreNavigation}
                initialParams={{
                    setTabBarVisible: setTabBarVisible,
                    tabBarVisible: tabBarVisible,
                }}
                options={{
                    tabBarAccessibilityLabel: 'Explorar',
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={2}
                            tabBarVisible={tabBarVisible}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="FAQsNavigation"
                component={FAQsNavigation}
                initialParams={{
                    setTabBarVisible: setTabBarVisible,
                    tabBarVisible: tabBarVisible,
                }}
                options={{
                    tabBarAccessibilityLabel: 'Ayuda',
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={3}
                            tabBarVisible={tabBarVisible}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="TaxiNavigation"
                component={TaxiNavigation}
                initialParams={{
                    setTabBarVisible: setTabBarVisible,
                    tabBarVisible: tabBarVisible,
                }}
                options={{
                    tabBarAccessibilityLabel: 'Taxi',
                    tabBarIcon: ({ focused }) => (
                        <ProfileIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={4}
                            tabBarVisible={tabBarVisible}
                            {...props}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigator

const styles = StyleSheet.create({
    tabBarOptions: {
        position: 'absolute',
        borderTopWidth: 0,
        backgroundColor: "transparent",
        elevation: 0, //* Just fot Android,
        left: 20,
        right: 20,
        height: 80,
        borderRadius: 15
    },
})