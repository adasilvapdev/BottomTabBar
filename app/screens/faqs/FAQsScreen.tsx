import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const FAQsScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>


            <View style={{
                flex: 2,
                borderWidth: 1,
                backgroundColor: 'orange',
                borderColor: 'orange',
                justifyContent: "center",
                width: 300,
                alignSelf: "center",
                alignContent: "center"
            }}>
                <Text>FAQs Screen</Text>
                <Button
                    title="Sub Screen"
                    onPress={() => navigation.navigate('HomeSubScreen')}
                />
            </View>
        </View>
    )
}

export default FAQsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})

