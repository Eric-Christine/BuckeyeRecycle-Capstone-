import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = (props) => {
    return (
        < View >
            <Text> {props.color} </ Text>
            <Button
                onPress={() => props.onIncrease()}
                title={`increase ${props.color}`}
            />
            <Button
                onPress={() => props.onDecrease()}
                title={`decrease ${props.color}`}
            />

        </View >
    )
}

const styles = StyleSheet.create({})

export default ColorCounter;