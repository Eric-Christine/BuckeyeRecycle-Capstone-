import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightEx = ({ navigation }) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(count + 1);

    // const goHome = () => navigation.navigate('Home')


    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.redButton}>
                    <Text style={styles.silver}>Log Another Item</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.blueButton}>
                    <Text style={styles.silver}>Go to Shop</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={onPress}>
                <View style={styles.greenButton}>
                    <Text style={styles.silver}>Go Back to Home</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    {count ? count : null}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,

    },
    silver: {
        color: "#F6F5F3"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10

    },
    greenButton: {
        alignItems: "center",
        backgroundColor: "#171614",
        padding: 10,
        margin: 10
    },
    blueButton: {
        alignItems: "center",
        backgroundColor: "#171614",
        padding: 10,
        margin: 10
    },
    redButton: {
        alignItems: "center",
        backgroundColor: "#171614",
        padding: 10,
        margin: 10
    },

    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#F6F5F3"
    }
});

export default TouchableHighlightEx