import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// Drawer

import HomeScreen from './src/screens/screens/HomeScreen';
import ComponentsScreen from './src/screens/screens/ComponentsScreen';
import ListScreen from './src/screens/screens/ListScreen';

import ShopScreen from './src/screens/screens/ShopScreen'
import CounterScreen from './src/screens/screens/CounterScreen'
import ColorScreen from './src/screens/screens/ColorScreen'
import SquareScreen from './src/screens/screens/SquareScreen'
import LoggedItems from './src/screens/screens/LoggedItems'
import LogItemScreen from './src/screens/screens/LogItemScreen'
import RewardScreen from './src/screens/screens/RewardScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Shop: ShopScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Log: LoggedItems,
    newLog: LogItemScreen,
    Reward: RewardScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home',
    },
  }
);

export default createAppContainer(navigator);
