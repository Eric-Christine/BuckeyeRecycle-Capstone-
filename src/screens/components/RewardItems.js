import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const RewardItems = props => {
    console.log(props);



    return (
        <View>
            <Text>This is the reward items component {props.title} | {props.cost}</Text>
        </View >
    )
}

const Style = StyleSheet.create({
    image: {
        height: 400
    }
})

export default RewardItems