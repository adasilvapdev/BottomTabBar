import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path, } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { HomeScreen } from '../screens/home';
import { PromosScreen } from '../screens/promos';
import { ExploreScreen } from '../screens/explore';
import { FAQsScreen } from '../screens/faqs';
import { TaxiScreen } from '../screens/taxi';
import { HomeIcon, TicketIcon, SearchIcon, ProfileIcon } from '../components/atoms/icons';
import { THEME } from '../styles';
import { COLORS } from '../styles/theme';
const Tab = createBottomTabNavigator();

// const TabBarCustomButton = ({ accessibilityState, children, onPress }: any) => {
const TabBarCustomButton = (props: any) => {
    const { accessibilityState, children, onPress, accessibilityLabel, tabId } = props
    console.log('props: ', props)
    console.log('tabId: ', tabId)
    console.log('\n--------------------')

    let isSelected = accessibilityState.selected
    if (isSelected) {   //* If button is selected, return the curvy floating button
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                }}
            >
                <View style={{
                    flexDirection: "row",
                    position: "absolute",
                    top: 0,
                }}>

                    {/* <View style={{
                        flex: 1,
                        // marginRight: '50%'
                    }}></View> */}

                    <Svg
                        width={75}
                        height={61}
                        style={{
                        }}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            // d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            d="M72.9 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={THEME.COLORS.WHITE}
                            // fill={'pink'}
                            // fill={'transparent'}
                            fillOpacity={0.9}
                        />
                    </Svg>

                    {/* <View style={{
                        flex: 1,
                        // marginRight: '6%'
                    }}></View> */}

                </View>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => console.log('pressing')}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LinearGradient colors={['#020250', '#FF00CF']}
                        style={{
                            top: -40,
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                        }}
                    >
                        {children}
                    </LinearGradient>
                </TouchableOpacity>

                <Text style={[
                    styles.title, {
                        position: "absolute",
                        top: '55%',
                        bottom: 0,
                    }]}>{accessibilityLabel}</Text>
            </View>
        )
    } else {    //* If is not selected, then return the normal bottom tab button
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={{
                    flex: 1,
                    height: 61,
                    backgroundColor: COLORS.WHITE,
                    opacity: 0.9,
                    paddingBottom: '1%',
                    borderTopLeftRadius: tabId === 0 ? 20 : 0,
                    borderBottomLeftRadius: tabId === 0 ? 20 : 0,
                    borderTopRightRadius: tabId === 4 ? 20 : 0,
                    borderBottomRightRadius: tabId === 4 ? 20 : 0
                }}
                onPress={onPress}
            >
                {children}
                <Text style={styles.title}>{accessibilityLabel}</Text>
            </TouchableOpacity>
        )
    }
}

const Tabs = () => {
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
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    // tabBarVisible: false,
                    // tabBarBadge: 5,
                    // tabBarBadgeStyle: {
                    //     color: 'black',
                    //     backgroundColor: 'aqua'
                    // },
                    tabBarAccessibilityLabel: 'Home',
                    unmountOnBlur: true,
                    tabBarTestID: '0',
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={0}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="PromosScreen"
                component={PromosScreen}
                options={{
                    tabBarAccessibilityLabel: 'Promos',
                    unmountOnBlur: true,
                    tabBarTestID: '1',
                    tabBarIcon: ({ focused }) => (
                        <TicketIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={1}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{
                    tabBarAccessibilityLabel: 'Explorar',
                    unmountOnBlur: true,
                    tabBarTestID: '2',
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={2}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="FAQsScreen"
                component={FAQsScreen}
                options={{
                    tabBarAccessibilityLabel: 'Ayuda',
                    unmountOnBlur: true,
                    tabBarTestID: '3',
                    tabBarIcon: ({ focused }) => (
                        <SearchIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={3}
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="TaxiScreen"
                component={TaxiScreen}
                options={{
                    tabBarAccessibilityLabel: 'Taxi',
                    unmountOnBlur: true,
                    tabBarTestID: '4',
                    tabBarIcon: ({ focused }) => (
                        <ProfileIcon
                            color={focused ? THEME.COLORS.WHITE : THEME.COLORS.GRAY}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            tabId={4}
                            {...props}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    title: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 10,
        color: THEME.COLORS.GRAY
    }
})