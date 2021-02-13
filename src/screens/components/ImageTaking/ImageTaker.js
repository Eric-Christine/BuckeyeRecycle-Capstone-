import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImagePickerIOS } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function ImageTaker(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const [imageState, setImageState] = useState(null);
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    let image = ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: .5,
    })


    const showPreview = () => {
        setType(
            type === Camera.Constants.Type.back
        )
        image
        console.log(image, 'this is from the image taker component')
        setImageState(image)
        console.log(Promise, 'this is the promise')
        console.log(imageState, 'this is the image STATE')
        // props.onImageTaken(image.uri)
        // setPickedImage(image.uri)
        // Camera.Constants.AutoFocus === on
    }




    return (
        <View style={styles.main}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        text="test"
                        onPress={() => {
                            showPreview();
                        }}>
                    </TouchableOpacity>

                </View>
            </Camera>
        </View >
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    button: {
        fontSize: 30,
        height: 400,
        width: 400,
        backgroundColor: 'black'
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "flex-start"
    },
    smallText: {
        fontSize: 20
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 100,
        borderWidth: 1,
        height: 400,
        width: 300
    },
    cameraBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        height: 100,
        width: 100,
        backgroundColor: 'white'
    },
    subBox: {
        backgroundColor: 'black',
        width: 50,
        height: 50
    },
    cameraButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 1,
        height: 75,
        width: 75,
        marginTop: 30,
        borderRadius: 50,
        backgroundColor: 'lightgreen'
    }


})
