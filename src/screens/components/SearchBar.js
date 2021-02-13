import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconsStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search Item"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        margin: 5,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#F6F5F3'
    },
    iconsStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});
export default SearchBar;