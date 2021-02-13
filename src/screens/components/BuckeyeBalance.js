import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const BuckeyeBalance = (props) => {
    console.log(props, 'this is buckeyebalance props')
    console.log(props.balance, 'this is buckeyebalance props.balance')
    return (
        <View >
            <Text>
                This is your Balance {props.balance}.
            </Text>
        </View >
    )
}

const styles = StyleSheet.create({})

export default BuckeyeBalance;