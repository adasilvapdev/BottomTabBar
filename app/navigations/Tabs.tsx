import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
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
    const { accessibilityState, children, onPress, accessibilityLabel } = props
    console.log('props: ', props)
    console.log('\n--------------------')

    let isSelected = accessibilityState.selected
    if (isSelected) {   //* If button is selected, return the curvy floating button
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    // borderWidth: 1,
                }}
            >
                <View style={{
                    flexDirection: "row",
                    position: "absolute",
                    top: 0,

                    // borderWidth: 1,
                    // borderColor: 'red'
                }}>

                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={THEME.COLORS.WHITE}
                            fillOpacity={0.9}
                        />
                    </Svg>

                </View>


                <LinearGradient colors={['#020250', '#FF00CF']}
                    // style={styles.linearGradient}
                    style={{
                        // top: -22.5,
                        // top: -22.5,
                        top: -28,
                        justifyContent: "center",
                        alignItems: "center",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        // backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        // backgroundColor: THEME.COLORS.WHITE
                    }}
                >

                    {/* <TouchableOpacity
                    // style={{
                    //     top: -22.5,
                    //     justifyContent: "center",
                    //     alignItems: "center",
                    //     width: 50,
                    //     height: 50,
                    //     borderRadius: 25,
                    //     backgroundColor: THEME.COLORS.WHITE
                    // }}
                    > */}
                    {children}
                    {/* </TouchableOpacity> */}
                </LinearGradient>

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
                // activeOpacity={1}
                activeOpacity={0.85}
                style={{
                    flex: 1,
                    height: 61,
                    backgroundColor: COLORS.WHITE,
                    opacity: .9,
                    // borderWidth: 0,
                    // borderWidth: 1,
                    // borderColor: 'yellow',
                    paddingBottom: '1%'
                }}
                onPress={onPress}
            >
                {children}
                <Text style={styles.title}>{accessibilityLabel}</Text>
            </TouchableOpacity>
        )
    }
}


function MyTabBar({ state, descriptors, navigation }: any) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tabs = () => {
    return (
        <Tab.Navigator
            // tabBar={props => <MyTabBar {...props} />}
            // lazy={false}
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: "transparent",
                    elevation: 0, //* Just fot Android,

                    // borderBottomEndRadius: 30,
                    // borderRadius: 30,
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    height: 80
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