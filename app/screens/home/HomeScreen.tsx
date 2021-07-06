import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeIcon, ProfileIcon, SearchIcon, TicketIcon } from '../../components/atoms/icons';

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <View style={{
                flex: 2,
                borderWidth: 1,
                backgroundColor: 'pink',
                borderColor: 'pink',
                justifyContent: "center",
                width: 300,
                alignSelf: "center",
                alignContent: "center"
            }}>
                <Text>Home Screen</Text>
                <Button
                    title="Sub Screen"
                    onPress={() => navigation.navigate('HomeSubScreen')}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
    }
})