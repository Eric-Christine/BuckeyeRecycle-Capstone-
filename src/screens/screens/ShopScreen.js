import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList, SafeAreaView, Image, Pressable, Alert } from 'react-native'

import RewardItems from '../components/RewardItems'
import BuckeyeBalance from '../components/BuckeyeBalance'

const ShopScreen = (props, route, navigation) => {

    // functions-> 

    const _onPressButton = () => {
        alert('You now own this item!')
    }


    // const [term, setTerm] = useState('')
    // const [results, setResults] = useState([])





    // important below
    let [balance, setBalance] = useState([1000])
    console.log(route.parameter, 'this is props.balance')

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [filterAffordable, setFilterAffordable] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/rewards')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => alert(error))
            .finally(setLoading(false))

    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/rewards')
            .then((response) => response.json())
            .then((json) => setFilterAffordable(json))
            .catch((error) => alert(error))
            .finally(setLoading(false))

    }, [])

    const filterRewardsByPrice = (data) => {
        return data.filter(object => {
            console.log(data)
            if (object.price <= balance) {
                setFilterAffordable(object)
            }
        })
    }

    const ownItem = (data) => {
        return data.filter(object => {
            return object.own === true
        })
    }

    const name = 'Eric'
    const element1 = 'Zero-Waste Shop 🛍'
    const element2 = `My name is ${name}`


    const purchase = (item) => {
        console.log(item.own)
        setBalance(balance - item.price)
        console.log(balance)
        return item.own = true

    }

    return (
        <View style={styles.screenStyle}>

            <View style={styles.blue}>
                {/* <Text style={styles.textStyle}>{element1}</Text> */}
                {/* <Text style={styles.smallText}>This is the zero waste shop</Text> */}

                <Text style={styles.smallText}>Earned All Time: 2200🌰 </Text>
                <Text style={styles.smallText}>Current Balance: {balance}🌰
                </Text>
            </View>

            <View>
                <Text style={styles.smallText}>Digital | Physical
                
                </Text>
                {/* <Button
                    title="Show Items You Can Afford"
                    onPress={() => filterRewardsByPrice(data)}
                /> */}

                <SafeAreaView style={styles.listStyle}>

                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (

                            <View >
                                <View style={styles.flexCard}>
                                    <View style={styles.flexStart}>
                                        <Text style={styles.textStyle} >
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View >
                                        <Image
                                            source={{ uri: `${item.image}` }}
                                            style={styles.image} />
                                    </View>
                                    <View style={styles.alignRight}>
                                        <Text style={styles.textStyle2}>
                                            {item.price}🌰
                                        </Text>
                                        <Pressable
                                            onPress={() => Alert.alert(`Buy ${item.name} for ${item.price}🌰?`, '',
                                                [
                                                    { text: "No", onPress: () => (console.log(item.own)) },
                                                    {
                                                        text: "Yes", onPress: () => (console.log(purchase(item))
                                                        )
                                                    },

                                                ])}
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white'
                                                },
                                                styles.wrapperCustom
                                            ]}>

                                            <Text style={styles.textStyle3}>Buy</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </SafeAreaView>
                {/* <RewardItems title="Bamboo Utensils" cost={500} />
                <RewardItems title="HydroFlask" cost={500} />
                <RewardItems title="Digital BuckeyeTree" cost={500} /> */}
                {/* <FlatList
                    data={data}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => item.name}
                    renderReward={({ reward }) => {
                        <View>

                            <Text style={styles.smallText}>{reward.name} |  {item.price}</Text>
                            <Text>fajsfo</Text>
                        </View>
                    }}
                /> */}

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: '#91171F'
    },
    textStyle: {
        fontSize: 45,
        color: 'white'
    },
    smallText: {
        fontSize: 20,
        margin: 20,
        color: 'white'
    },
    blue: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',


    },
    listStyle: {
        height: 500,
        backgroundColor: '#91171F',
        margin: 10,
        // borderWidth: 1,
        borderRadius: 20,
        // padding: 20
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
    textStyle3: {
        fontSize: 16,
        fontWeight: 'bold'
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
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // justifyContent: 'center',
        alignItems: 'center',

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
    flexStart: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        // borderWidth: 1
    },

    alignRight: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        // justifyContent: 'space',
        // alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange'
        padding: 30
    },


    textStyle2: {
        display: 'flex',
        flex: 1,
        alignContent: 'center',
        // borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 17,
        // borderWidth: 3

    },

})

export default ShopScreen
