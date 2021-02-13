import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import TouchableHighlightEx from '../components/buttons/TouchableHighlight'
import { color } from 'react-native-reanimated/src/derived';

export default function LoggedItems({ navigation }) {

    const goHome = () => navigation.navigate('Home')



    return (
        <View style={styles.background}>
            <View style={styles.textBox}>
                <Text style={styles.text}>
                    Well done!!!
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.highlight}>+100 🌰 </Text>
                has been added to your account!
                </Text>
            </View>
            <View style={styles.buttonBox}>
                <TouchableHighlightEx
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        display: 'flex',
        backgroundColor: '#91171F',
        height: 800
    },
    highlight: {
        color: '#FF674D'
    },
    textBox: {
    },
    buttonBox: {
        height: 500
    },
    text: {
        marginHorizontal: 30,
        marginTop: 50,
        textAlign: 'center',
        fontSize: 40,
        color: '#E4DFDA'
    }

})