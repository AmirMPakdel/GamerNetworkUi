import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import MuniTextLight from './src/components/UI/MuniText/MuniTextLight';
import Trending from './src/screens/Trending';
import Profile from './src/screens/Profile';
import News from './src/screens/News';
import Settings from './src/screens/Settings';
import Tabbar from './src/components/Tabbar';
import Signin from './src/screens/Signin';
import { connect } from 'react-redux';


const Initial_Route_Name = "Signin";

class App extends Component {

    render() {

        tabInfo = changeImage(this.props.selectedTab);

        return (
            <ImageBackground
                style={styles.bg}
                blurRadius={0.4}
                source={tabInfo.Image}>
                <View style={styles.container}>
                    <View style={styles.title_con}>
                        <MuniTextLight
                            style={styles.tilte}
                            fontSize={48}
                            color="#f8f8f8">
                            {tabInfo.title}
                        </MuniTextLight>
                    </View>

                    <View style={styles.circle_con}>
                        <View style={styles.circle} />

                        <RootStack />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}


//mapping all needed states into props of this component
const mapStateToProps = newState => ({
    //got form Tabbar.js
    selectedTab: newState.navReducer.selectedTab
});


export default connect(
    mapStateToProps
)(App);

const styles = StyleSheet.create({
    bg: {
        height: '100%',
        width: '100%'
    },

    container: {
        flex: 1,
        alignItems: 'center'
    },

    circle_con: {
        height: '86%',
        width: '170%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    circle: {
        position: 'absolute',
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(252,236,161)',
        borderTopLeftRadius: Dimensions.get('window').width * 2,
        borderTopRightRadius: Dimensions.get('window').width * 2
    },

    title_con: {
        height: '14%',
        width: '84%'
    },

    title: {},

    texts_con: {
        height: '10%',
        width: '42%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    inputs: {
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    }
});

const RootStack = createBottomTabNavigator(
    {
        Home: {
            screen: Home
        },

        Trending: {
            screen: Trending
        },

        Signin: {
            screen: Signin
        },

        News: {
            screen: News
        },

        Settings: {
            screen: Settings
        }
    },
    {
        initialRouteName: Initial_Route_Name,

        animationEnabled: true,

        swipeEnabled: false, //for now

        tabBarComponent: Tabbar,

        tabBarOptions: {}
    }
);

// this will set the tab info according to the Redux state from Tabbar.js
const changeImage =(selectedTab)=>{

    tabInfo = {};

    switch (selectedTab){
        case 'Home':
        tabInfo.Image = require('./src/images/1.png');
        tabInfo.title = "Home";
        return tabInfo;

        case 'Trending':
        tabInfo.Image = require('./src/images/2.png');
        tabInfo.title = "Trending";
        return tabInfo;

        case 'Profile':
        tabInfo.Image = require('./src/images/3.png');
        tabInfo.title = "Profile";
        return tabInfo;

        case 'Signin':
        tabInfo.Image = require('./src/images/20.png');
        tabInfo.title = "Signin";
        return tabInfo;

        case 'News':
        tabInfo.Image = require('./src/images/25.png');
        tabInfo.title = "News"
        return tabInfo;

        case 'Settings':
        tabInfo.Image = require('./src/images/24.png');
        tabInfo.title = "Settings"
        return tabInfo;

        default:
        tabInfo.Image = require('./src/images/1.png');
        tabInfo.title = "Home";
        return tabInfo;
    }
}