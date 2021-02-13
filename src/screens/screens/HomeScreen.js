import React, { useState } from "react";
import {
  Text, StyleSheet, View, Button, TouchableOpacity,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



import BuckeyeBalance from "../components/BuckeyeBalance"
import ShopScreen from "./ShopScreen"
import CounterScreen from "./CounterScreen";
import { StackRouter } from "react-navigation";


const HomeScreen = ({ navigation }) => {



  const [buckeyes, setBuckeyes] = useState(0)

  return (
    <View style={styles.blue}>
      {/* <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Go to counter demo" component={CounterScreen} />
          <Drawer.Screen name="Go to shop screen" component={ShopScreen} />
        </Drawer.Navigator>
      </NavigationContainer> */}
      <View style={styles.topContainer}>
        <Text style={styles.icons}>
          <Feather name="menu" size={50} color="#F6F5F3" />
        </Text>
        <Text style={styles.icons}>
          <Ionicons name="person-circle-sharp" size={50} color="#F6F5F3" />
        </Text>
      </View>
      <Text style={styles.text}>Welcome to BuckeyeRecycle</Text>

      {/* <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      /> */}

      <View style={styles.mainContainer}>
        {/* <BuckeyeBalance
          onIncrease={() => setBuckeyes(buckeyes + 10)}
          onDecrease={() => setBuckeyes(buckeyes - 10)}
          balance={buckeyes} /> */}
        <Text style={styles.subText}>{buckeyes} 🌰</Text>

        {/* <Button
          title="Increase + 100"
          onPress={() => setBuckeyes(buckeyes + 100)}
        />
        <Button
          title="Decrease -100"
          onPress={() => setBuckeyes(buckeyes - 100)}
        /> */}
        <Text style={styles.garden}>Your Garden</Text>
        <View style={styles.theOval}>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌲</Text>
          </View>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌱</Text>
          </View>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌳</Text>
          </View>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌸</Text>
          </View>

          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌳</Text>
          </View>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌻</Text>
          </View>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🥀</Text>
          </View>
          <View style={styles.ovalPlants}>
            <Text style={styles.plantSize}>🌸</Text>
          </View>
          <View style={styles.ovalPlants}><AntDesign name="plussquare" size={40} color="black" /></View>

        </View>
      </View>
      {/* <Text>Earn more buckeyes by logging items. Try it below!</Text> */}

      <View style={styles.bottom}>
        <Button
          color="#F6F5F3"
          title="Lookup 🔎"
          onPress={() => navigation.navigate('List')}
        />
        <Button style={styles.bottom}
          color="#F6F5F3"
          title="Log Item 📝"
          onPress={() => navigation.navigate('Components')}
        />
        {/* <Button
          title="New Item"
          onPress={() => navigation.navigate('newLog')}
        /> */}


        <Button style={styles.bottom}
          fontSize=''
          color="#F6F5F3"
          title="Shop 🛒"
          onPress={() => navigation.navigate(
            'Shop', { parameter: 'Test' })
          }
        // balance={buckeyes}
        />
      </View>
      <View style={styles.bottom}>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    // borderWidth: 1,
    // borderColor: 'black',
    height: 60,
    width: 'auto'
  },
  margin: {
    marginHorizontal: 10,
    fontSize: 50
  },
  icons: {
    margin: 5
    // flex: 1,
    // marginHorizontal: 0
  },
  garden: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 0
  },
  text: {
    marginHorizontal: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#F6F5F3"
  },
  subText: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  },
  blue: {
    backgroundColor: '#91171F'
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
    margin: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 1,

    margin: 40,
    padding: 10,
    height: 450,
    width: 350,
    borderRadius: 20,
    backgroundColor: '#F6F5F3',
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,


  },
  theOval: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderWidth: 1,
    // borderColor: 'black',
    marginVertical: 5,
    marginHorizontal: 20,
    height: 300,
    width: 300,
    borderRadius: 150,
    backgroundColor: '#F6F5F3',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },
  ovalPlants: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 20,
    // backgroundColor: 'lightgreen',
    alignContent: 'center',
    textAlign: 'center'
  },
  plantSize: {
    fontSize: 40
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#171614',

  }
});

export default HomeScreen;
