import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Transaction() {
    return (
        <View style={styles.container} >
            <Text>Transaction</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        padding: 20,
    }

})