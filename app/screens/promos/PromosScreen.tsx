import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const PromosScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{
                flex: 2,
                borderWidth: 1,
                backgroundColor: 'aqua',
                borderColor: 'aqua',
                justifyContent: "center",
                width: 300,
                alignSelf: "center",
                alignContent: "center"
            }}>
                <Text>Promos Screen</Text>
                <Button
                    title="Sub Screen"
                    onPress={() => navigation.navigate('HomeSubScreen')}
                />
            </View>
        </View>
    )
}

export default PromosScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})
