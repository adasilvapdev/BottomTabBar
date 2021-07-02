import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ExploreScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Explore Screen</Text>
            <Button
                title="Sub Screen"
                onPress={() => navigation.navigate('HomeSubScreen')}
            />
        </View>
    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})
