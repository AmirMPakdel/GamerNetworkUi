import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions
} from 'react-native';
import MuniTextLight from '../components/UI/MuniText/MuniTextLight';

export default class News extends React.Component {
    render() {
        return (
            <View>
                
            </View>
        );
    }

    onpress = () => {
        this.props.navigation.navigate('Home');
    };
}

const styles = StyleSheet.create({
    bg: {
        height: '100%',
        width: '100%'
    },

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    circle: {
        height: '70%',
        width: '180%',
        opacity: 0.94,
        backgroundColor: 'rgb(252,236,161)',
        elevation: 20,
        borderTopLeftRadius: Dimensions.get('window').width * 2,
        borderTopRightRadius: Dimensions.get('window').width * 2
    },

    title_con: {
        height: '28%',
        width: '84%'
    },

    title: {
        margin: 30
    }
});
