import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path, } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { HomeNavigation } from './sections/home'
import { PromosNavigation } from './sections/promos'
import { ExploreNavigation } from './sections/explore'
import { FAQsNavigation } from './sections/faqs'
import { TaxiNavigation } from './sections/taxi'
import { HomeIcon, TicketIcon, SearchIcon, ProfileIcon } from '../components/atoms/icons';
import { THEME } from '../styles';
import { COLORS } from '../styles/theme';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({
    accessibilityState,
    children,
    onPress,
    accessibilityLabel,
    tabId,
    tabBarVisible,

    animationType
}: any) => {


    console.log('animationType: ', animationType)

    useEffect(() => {

    }, [animationType])

    let isSelected = accessibilityState.selected
    if (isSelected) {   //* If button is selected, return the curvy floating button
        if (tabBarVisible) {
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
                    </View>

                    <TouchableOpacity
                        // activeOpacity={0.9}
                        onPress={() => console.log('pressing')}
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Animatable.View
                            animation={animationType}
                            duration={1000}
                            // delay={100}

                            direction={"normal"}
                        // direction={"reverse"}
                        // direction={"alternate"}
                        // direction={"alternate-reverse"}

                        // easing={"ease-in"}
                        // easing={"ease-in-cubic"}
                        // easing={"ease-in-out-expo"}
                        // easing={"ease-in-quad"}
                        // easing={"ease-in-quart"}
                        // easing={"ease-in-out-quart"}
                        // easing={"ease-in-sine"}
                        // easing={"ease-in-out-sine"}




                        // easing={"linear"}
                        // easing={"ease"}
                        // easing={"ease-out"}
                        // easing={"ease-in-out"}
                        // easing={"ease-out-cubic"}
                        // easing={"ease-in-out-cubic"}
                        // easing={"ease-in-circ"}
                        // easing={"ease-out-circ"}
                        // easing={"ease-in-out-circ"}
                        // easing={"ease-in-expo"}
                        // easing={"ease-out-expo"}
                        // easing={"ease-out-quad"}
                        // easing={"ease-in-out-quad"}
                        // easing={"ease-out-quart"}
                        // easing={"ease-in-quint"}
                        // easing={"ease-out-quint"}
                        // easing={"ease-out-sine"}
                        // easing={"ease-in-back"}
                        // easing={"ease-out-back"}
                        // easing={"ease-in-out-back"}


                        // transition={"opacity"}
                        // transition={"rotate"}

                        // onAnimationBegin={() => console.log('A function that is called when the animation has been started.')}
                        // onAnimationEnd={() => console.log(`A function that is called when the animation has been completed successfully or cancelled. Function is called with an endState argument, refer to endState.finished to see if the animation completed or not.`)}
                        // onTransitionBegin={() => console.log('A function that is called when the transition of a style has been started. The function is called with a property argument to differentiate between styles.')}
                        // onTransitionEnd={() => console.log(`A function that is called when the transition of a style has been completed successfully or cancelled. The function is called with a property argument to differentiate between styles.`)}

                        // useNativeDriver={false}
                        // useNativeDriver={true}
                        // isInteraction={}
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
                        </Animatable.View>
                    </TouchableOpacity>

                    <Text style={[
                        styles.title, {
                            position: "absolute",
                            top: '55%',
                            bottom: 0,
                        }]}>{accessibilityLabel}</Text>
                </View>
            )
        } else {
            return null
        }
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

const BottomTabsNavigator = () => {
    const [tabBarVisible, setTabBarVisible] = useState(true)
    const [animationType, setAnimationType] = useState("flipInX")

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
                    setAnimationType: setAnimationType,
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
                            animationType={animationType}
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
                            animationType={animationType}
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
                            animationType={animationType}
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
                            animationType={animationType}
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
                            animationType={animationType}
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