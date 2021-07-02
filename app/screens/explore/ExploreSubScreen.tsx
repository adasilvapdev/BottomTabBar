import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ExploreSubScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Explore Sub Screen</Text>
            <Button
                title="Go back"
                color="purple"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default ExploreSubScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})
