import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { HomeIcon } from '../components/atoms/icons';
import { THEME } from '../styles';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
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
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})