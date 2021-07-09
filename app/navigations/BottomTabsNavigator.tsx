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
                style: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0, //* Just fot Android,
                    left: 20,
                    right: 20,
                    height: 80,
                    borderRadius: 15
                }
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
                    unmountOnBlur: true,
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
                initialParams={{ setTabBarVisible: setTabBarVisible }}
                options={{
                    tabBarAccessibilityLabel: 'Promos',
                    unmountOnBlur: true,
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
                initialParams={{ setTabBarVisible: setTabBarVisible }}
                options={{
                    tabBarAccessibilityLabel: 'Explorar',
                    unmountOnBlur: true,
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
                initialParams={{ setTabBarVisible: setTabBarVisible }}
                options={{
                    tabBarAccessibilityLabel: 'Ayuda',
                    unmountOnBlur: true,
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
                initialParams={{ setTabBarVisible: setTabBarVisible }}
                options={{
                    tabBarAccessibilityLabel: 'Taxi',
                    unmountOnBlur: true,
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

// const styles = StyleSheet.create({
//     linearGradient: {
//         flex: 1,
//         paddingLeft: 15,
//         paddingRight: 15,
//         borderRadius: 5
//     },
//     buttonText: {
//         fontSize: 18,
//         fontFamily: 'Gill Sans',
//         textAlign: 'center',
//         margin: 10,
//         color: '#ffffff',
//         backgroundColor: 'transparent',
//     },
//     title: {
//         justifyContent: "center",
//         textAlign: "center",
//         fontSize: 10,
//         color: THEME.COLORS.GRAY
//     }
// })