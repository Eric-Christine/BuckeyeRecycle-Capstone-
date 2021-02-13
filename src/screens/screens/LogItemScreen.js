// 4 steps for every component setup...

// import libraries we need to creat a component
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, ImagePickerIOS, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import ImageTaker from '../components/ImageTaking/ImageTaker'
import ImagePicker from '../components/ImageTaking/ImagePicker'
import ImageSelector from '../components/ImageTaking/ImageSelector'

import TouchableHighlightEx from '../components/buttons/TouchableHighlight'




// create a component function
const LogItemScreen = ({ route, navigation }) => {


    /* 2. Get the param */
    const itemId = route.params.itemId;
    const otherParam = route.params.otherParam;
    console.log(itemId)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

// create a stylesheet to style our component

const styles = StyleSheet.create({
    window: {
        height: 400,
        width: 400
    }

})

// Export 

export default LogItemScreen;


