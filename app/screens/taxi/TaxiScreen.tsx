import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const TaxiScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{
                flex: 2,
                borderWidth: 1,
                backgroundColor: 'lawngreen',
                borderColor: 'lawngreen',
                justifyContent: "center",
                width: 300,
                alignSelf: "center",
                alignContent: "center"
            }}>
                <Text>Taxi Screen</Text>
                <Button
                    title="Sub Screen"
                    onPress={() => navigation.navigate('HomeSubScreen')}
                />
            </View>
        </View>
    )
}

export default TaxiScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})
