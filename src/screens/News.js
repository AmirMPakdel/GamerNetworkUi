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
            <ImageBackground
                style={styles.bg}
                blurRadius={0.4}
                source={require('./../images/3.png')}>
                <View style={styles.container}>
                    <View style={styles.title_con}>
                        <MuniTextLight
                            style={styles.tilte}
                            fontSize={40}
                            color="#f8f8f8">
                            News
                        </MuniTextLight>
                    </View>

                    <View style={styles.circle} />
                </View>
            </ImageBackground>
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
