import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    ImageBackground
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

export default class App extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.bg}
                blurRadius={0.4}
                source={require('./src/images/2.png')}>
                <View style={styles.container}>
                    <View style={styles.title_con}>
                        <MuniTextLight
                            style={styles.tilte}
                            fontSize={48}
                            color="#f8f8f8">
                            Home
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
//<View style={styles.circle}/>
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
        initialRouteName: 'Home',

        animationEnabled: true,

        headerStyle: { marginTop: 2 },

        swipeEnabled: false, //for now

        tabBarComponent: Tabbar,

        tabBarOptions: {}
    }
);
