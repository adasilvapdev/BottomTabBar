import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeIcon, ProfileIcon, SearchIcon, TicketIcon } from '../../components/atoms/icons';

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Sub Screen"
                onPress={() => navigation.navigate('HomeSubScreen')}
            />

            <HomeIcon />
            <ProfileIcon />
            <SearchIcon />
            <TicketIcon />
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