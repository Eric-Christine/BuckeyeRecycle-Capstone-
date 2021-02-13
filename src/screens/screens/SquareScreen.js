import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    console.log(red)
    console.log(green)
    console.log(blue)

    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed(red + 10)}
                onDecrease={() => setRed(red - 10)}
                color="Red" />
            <ColorCounter
                onIncrease={() => setGreen(green + 10)}
                onDecrease={() => setGreen(green - 10)}
                color="Green" />
            <ColorCounter
                onIncrease={() => setBlue(blue + 10)}
                onDecrease={() => setBlue(blue - 10)}
                color="Blue" />
            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green}, ${blue})`
            }}
            />

        </View>
    )

}

const styles = StyleSheet.create({})

export default SquareScreen;