import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
};

const isCloseToTop = ({ contentOffset }) => {
    return contentOffset.y === 0;
};

const CustomScrollView = ({
    children,
    route,
    navigation
}) => {
    return (
        <ScrollView
            style={styles.container}
            onScroll={({ nativeEvent }) => {
                if (isCloseToTop(nativeEvent)) {
                    console.log('Im at the TOP!')
                    navigation.setOptions({
                        tabBarVisible: true,
                    })
                    route.params.setTabBarVisible(true);
                } else {
                    if (route.params.tabBarVisible) {
                        navigation.setOptions({
                            tabBarVisible: false,
                        })
                        route.params.setTabBarVisible(false);
                    }
                }
            }}
            scrollEventThrottle={400}
        >
            {children}
        </ScrollView>
    )
}

export default CustomScrollView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
