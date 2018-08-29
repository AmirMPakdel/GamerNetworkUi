import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createTabNavigator} from 'react-navigation';
import Home from './src/screens/Home';
import Chests from './src/screens/Chests';
import Settings from './src/screens/Settings';
import Contests from './src/screens/Contests';
import Shop from './src/screens/Shop';
import Tabbar from './src/components/Tabbar';


const RootStack = createTabNavigator({

  Settings:{

    screen:Settings,
  },

  Chests:{

    screen:Chests
  },

  Home: {
    screen: Home
  },

  Contests:{
    screen: Contests
  },

  Shop:{
    screen: Shop
  }

  
},
{
  initialRouteName: 'Home',

  animationEnabled: true,

  tabBarComponent:Tabbar,

  tabBarPosition:'bottom',
  
  tabBarOptions:{
    
    tabStyle:{

    backgroundColor:'green',

  },

  tabStyle:{

    backgroundColor:'red',

  }
}
});

export default class App extends Component {

  ;

  render() {
    return (
      
        <RootStack />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(23,23,23,0.5)',
  },
});
