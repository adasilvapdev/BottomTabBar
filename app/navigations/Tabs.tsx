import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home'
import { ICONS } from '../constants'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
            // options={{
            //     tabBarIcon: ({ focused }) => (
            //         <Image
            //             source={ICONS.home}
            //             resizeMode=
            //         />
            //     )
            // }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})