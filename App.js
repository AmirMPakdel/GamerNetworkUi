import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createTabNavigator } from "react-navigation";
import Home from "./src/screens/Home";
import Trending from "./src/screens/Trending";
import Profile from "./src/screens/Profile";
import News from "./src/screens/News";
import Settings from "./src/screens/Settings";
import Tabbar from "./src/components/Tabbar";

const RootStack = createTabNavigator(
  {
    Home: {
      screen: Home
    },

    Trending: {
      screen: Trending
    },

    Profile: {
      screen: Profile
    },

    News: {
      screen: News
    },

    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: "Home",

    animationEnabled: true,

    tabBarComponent: Tabbar,

    tabBarPosition: "bottom",

    tabBarOptions: {
      tabStyle: {
        backgroundColor: "green"
      },

      tabStyle: {
        backgroundColor: "red"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(23,23,23,0.5)"
  }
});
