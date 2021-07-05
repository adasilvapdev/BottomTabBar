import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg'
import { HomeScreen } from '../screens/home';
import { PromosScreen } from '../screens/promos';
import { ExploreScreen } from '../screens/explore';
import { FAQsScreen } from '../screens/faqs';
import { TaxiScreen } from '../screens/taxi';
import { HomeIcon, TicketIcon, SearchIcon, ProfileIcon } from '../components/atoms/icons';
import { THEME } from '../styles';
import { COLORS } from '../styles/theme';
const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }: any) => {
    let isSelected = accessibilityState.selected
    if (isSelected) {   //* If button is selected, return the curvy floating button
        return (
            <View
                style={{ flex: 1, alignItems: "center" }}
            >
                <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: THEME.COLORS.WHITE }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={THEME.COLORS.WHITE}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: THEME.COLORS.WHITE }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: "center",
                        alignItems: "center",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: THEME.COLORS.WHITE
                    }}
                >
                    {children}
                </TouchableOpacity>
            </View >
        )
    } else {    //* If is not selected, then return the normal bottom tab button
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.WHITE
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator

            tabBarOptions={{
                showLabel: false,
                activeTintColor: THEME.COLORS.PRIMARY,
                inactiveTintColor: THEME.COLORS.GRAY,
                style: {
                    // borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0, //* Just fot Android,

                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '10%',
                    // borderBottomLeftRadius: 30,
                    // borderBottomRightRadius: 40,
                    // borderWidth: 1,
                    // borderColor: THEME.COLORS.PRIMARY,
                    // marginBottom: '5%',
                    borderRadius: 30,
                    // paddingLeft: '3%',
                    // paddingRight: '3%',
                    // paddingBottom: '2%',
                    // paddingTop: '2%',
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }
                }
            />
            <Tab.Screen
                name="PromosScreen"
                component={PromosScreen}
                options={{
                    title: "Promos",
                    tabBarIcon: ({ focused }) => (
                        <TicketIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{
                    title: "Explorar",
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="FAQsScreen"
                component={FAQsScreen}
                options={{
                    title: "Ayuda",
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="TaxiScreen"
                component={TaxiScreen}
                options={{
                    title: "Taxi",
                    tabBarIcon: ({ focused }) => (
                        <ProfileIcon
                            color={focused ? THEME.COLORS.PRIMARY : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})