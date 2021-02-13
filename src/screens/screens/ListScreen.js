import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Inputs, SafeAreaView, ActivityIndicator, Image } from 'react-native'
import SearchBar from '../components/SearchBar'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { block } from 'react-native-reanimated';
import itemBackend from '../api/itemBackend';

const ListScreen = () => {


    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert(error))
            .finally(setLoading(false))

    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then((response) => response.json())
            .then((json) =>
                setResults(json))
            .catch((error) => alert(error))
            .finally(setLoading(false))
    }, [])


    // setResults(json.filter(function (item) {
    //     return item.name.includes({ term })
    // })))

    const filterResultsByName = (data, search) => {
        return data.filter(object => {
            return (object.name.toLowerCase().includes(search.toLowerCase()) || object.disposal.toLowerCase().includes(search.toLowerCase()))
        })
    }

    const filterResults = () => setResults(filterResultsByName(data, term))

    return (
        <View>
            <View style={styles.screenStyle}>

                <SearchBar
                    term={term}
                    onTermChange={(newTerm => setTerm(newTerm))}
                    onTermSubmit={() => filterResults()}

                />
                <View style={styles.center}>
                    <Text style={styles.subText}>Items</Text>
                    <Text style={styles.subText}>Search results for: {term}</Text>
                    <Text style={styles.subText}>We found {results.length} results</Text>
                </View>
                <SafeAreaView style={styles.listStyle}>
                    {isLoading ? <ActivityIndicator /> :
                        <FlatList
                            data={results}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (

                                <View >
                                    <View style={styles.flexCard}>
                                        <Text style={styles.textStyle}>
                                            {item.name}
                                        </Text>
                                        <View style={styles.alignRight}>
                                            <Image
                                                source={{ uri: `${item.image}` }}
                                                style={styles.image} />
                                        </View>
                                        <View style={styles.alignRight}>
                                            <Text style={styles.textStyle2}>
                                                {item.disposal}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />}
                </SafeAreaView>


            </View>

        </View >
    )
}
const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: '#91171F'

    },
    subText: {
        color: '#F6F5F3'
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // flex: 1,
        // borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    alignRight: {
        // borderWidth: 1,
        display: 'flex',
        flex: 2,
        marginHorizontal: 3,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },

    textStyle: {
        flex: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 18,
        backgroundColor: 'white',
        // borderWidth: 1,
        padding: 5,
        margin: 10,

    },
    textStyle2: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        fontSize: 17,
        // borderWidth: 3

    },
    listStyle: {
        height: 600,
        backgroundColor: '#91171F',
        margin: 10,
        // borderWidth: 1,
        borderRadius: 20,
        // padding: 20
    },

    image: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        // flex: 1,
        // borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 10,
        height: 70,
        width: 70
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    }

})

export default ListScreen