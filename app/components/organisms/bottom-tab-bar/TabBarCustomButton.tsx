import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path, } from 'react-native-svg';
import { THEME } from '../../../styles';
import { COLORS } from '../../../styles/theme';

const TabBarCustomButton = ({
    accessibilityState,
    children,
    onPress,
    accessibilityLabel,
    tabId,
    tabBarVisible,
}: any) => {
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
                    <View
                        style={{
                            flexDirection: "row",
                            position: "absolute",
                            top: 0,
                        }}
                    >
                        <Svg
                            width={75}
                            height={61}
                            style={{
                            }}
                            viewBox="0 0 75 61"
                        >
                            <Path
                                d="M72.9 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                                fill={THEME.COLORS.WHITE}
                                fillOpacity={0.9}
                            />
                        </Svg>
                    </View>

                    <TouchableOpacity
                        onPress={() => console.log('pressing')}
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Animatable.View
                            animation={"flipInX"}
                            duration={600}
                            direction={"normal"}
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
            return (
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        height: 61,
                        backgroundColor: COLORS.WHITE,
                        opacity: 0.9,
                        borderTopLeftRadius: tabId === 0 ? 20 : 0,
                        borderBottomLeftRadius: tabId === 0 ? 20 : 0,
                        borderTopRightRadius: tabId === 4 ? 20 : 0,
                        borderBottomRightRadius: tabId === 4 ? 20 : 0
                    }}
                >
                    <Animatable.View
                        animation={"pulse"}
                        duration={800}
                        direction={"normal"}
                    >
                        <LinearGradient colors={['#020250', '#FF00CF']}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 25,
                            }}
                        >
                            {children}
                        </LinearGradient>
                    </Animatable.View>
                    <Text style={styles.title}>{accessibilityLabel}</Text>
                </TouchableOpacity>
            )
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

export default TabBarCustomButton

const styles = StyleSheet.create({
    title: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 10,
        color: THEME.COLORS.GRAY
    }
})
