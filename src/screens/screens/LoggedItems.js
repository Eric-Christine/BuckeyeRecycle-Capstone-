import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import TouchableHighlightEx from '../components/buttons/TouchableHighlight'

export default function LoggedItems() {
    return (
        <View style={styles.background}>
            <View style={styles.textBox}>
                <Text style={styles.text}>
                    One last thing...
                    Where did you put your item?
                </Text>
            </View>
            <View style={styles.buttonBox}>
                <TouchableHighlightEx />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        display: 'flex',
        backgroundColor: 'lightpink',
        height: 800
    },
    textBox: {

    },
    buttonBox: {
        height: 500
    },
    text: {
        fontSize: 40
    }

})