import React from "react";

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'light';
    return (
        <View style={styles.container}>
            <Text style = {isDarkMode ? styles.whitetext:styles.darktext }>
                Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whitetext:{
        color: '#FFFFFF'
    },
    darktext:{
        color: '#000000'
    }
})

export default AppPro;