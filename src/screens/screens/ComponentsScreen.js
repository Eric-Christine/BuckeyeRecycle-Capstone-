// 4 steps for every component setup...

// import libraries we need to creat a component
import React, { useState, useEffect } from 'react';
import { Alert, Text, StyleSheet, View, ImageBackground, Image, ImagePickerIOS, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import ImageTaker from '../components/ImageTaking/ImageTaker'
import ImagePicker from '../components/ImageTaking/ImagePicker'
import TouchableHighlightEx from '../components/buttons/TouchableHighlight'
import ImagePickerFinal from '../components/ImageTaking/ImageFinal'




// create a component function
const ComponentsScreen = ({ navigation }) => {

    // added from udemy
    const [selectedImage, setSelectedImage] = useState()


    const name = 'Eric'
    const element1 = 'Please log your item below:'
    const element2 = `Hi ${name}`

    return (
        <View style={styles.screenStyle}>

            <View styles={styles.imagePicker}>
                <Text style={styles.textStyle}>{element2}</Text>
                <Text style={styles.smallText}>{element1}</Text>
            </View>

            <View style={styles.mainContainer}>

                <ImagePickerFinal />
                <Text>OR</Text>
                <ImagePicker />

                {/* Display image picker */}
                <View style={styles.cameraBox}>
                    {/* <ImageTaker /> */}

                    <View style={styles.subBox}>
                    </View>
                </View>
            </View>
            <View style={styles.cameraButton}>
                <FontAwesome name="send" size={24} color="#F6F5F3" />

                <Button
                    color="#F6F5F3"
                    title="Send"
                    onPress={() =>
                        Alert.alert("Where did you place your item?", "", [
                            { text: "Trash", onPress: () => navigation.navigate('Reward') },
                            { text: "Compost", onPress: () => navigation.navigate('Reward') },
                            { text: "Recycling", onPress: () => navigation.navigate('Reward') },
                        ])
                    }
                />
            </View>

        </View>
    )
}
// create a stylesheet to style our component

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: '#F6F5F3',
        textAlign: 'center'
    },
    imagePicker: {

    },
    test: {
        borderWidth: 1,
        height: 450,
        width: 400,
        backgroundColor: 'black'
    },
    smallText: {
        fontSize: 20,
        color: '#F6F5F3',
        textAlign: 'center'
    },
    mainContainer: {
        backgroundColor: '#F6F5F3',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 100,
        borderWidth: 1,
        height: 400,
        width: 400
    },
    screenStyle: {
        backgroundColor: '#91171F'
    },
    // cameraBox: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    //     flex: 1,
    //     borderWidth: 1,
    //     height: 100,
    //     width: 100,
    //     backgroundColor: 'white'
    // },
    // subBox: {
    //     backgroundColor: 'black',
    //     width: 50,
    //     height: 50
    // },
    cameraButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 1,
        height: 75,
        width: 75,
        marginTop: 30,
        marginBottom: 100,
        borderRadius: 50,
        backgroundColor: '#91171F'
    }
})

// Export 

export default ComponentsScreen;


