import React from 'react'
import { View, Button, Text, StyleSheet, ImagePickerIOS } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Camera from 'expo-camera'
import ImageTaker from './ImageTaker'

const ImageSelector = props => {

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);
        if (result.status !== 'granted') {
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant camera permissions to use this app.',
                [{ text: 'Okay' }]
            )
        }
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            return
        }
        ImagePicker.launchCameraAsync();
    }
    return (
        <View>
            <Button
                title="Take Image"
                onPress={() => {
                    <ImageTaker />
                }}
            />
        </View>)
}

const styles = StyleSheet.create({})

export default ImageSelector 