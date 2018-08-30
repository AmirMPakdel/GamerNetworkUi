import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button } from 'react-native';
import TrendingList from '../components/TrendingList/TrendingList';

export default class Trending extends React.Component {
    render() {
        const data = [
            {
                gameName: 'Battlefield 1',
                gameInfo: 'sdklfsdkfnskdn sdklfn lsdknf ',
                source: require('../images/Battlefield.jpg')
            },
            {
                gameName: 'Dishonored 3',
                gameInfo:
                    'Dishonored: Death of the Outsider is an action-adventure stealth video game developed by Arkane Studios and published by Bethesda Softworks. ',
                source: require('../images/DisHonered.jpg')
            },
            {
                gameName: 'Watch Dogs 2',
                gameInfo: 'Some Shitty game from ubisoft',
                source: require('../images/watchdogs.png')
            }
        ];
        return (
            <View style={styles.container}>
                <View style={styles.circle} />

                <View style={{}}>
                    <TrendingList
                        data={data}
                        itemWidth={290}
                        itemHeight={350}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    circle: {
        height: '70%',
        width: '170%',
        position: 'absolute',
        bottom: 0,
        zIndex: -10,
        elevation: 60,
        opacity: 0.94,
        borderColor: 'rgb(253, 237, 159)',
        borderWidth: 1,
        backgroundColor: 'rgb(253, 237, 159)',
        borderTopLeftRadius: Dimensions.get('window').width * 2,
        borderTopRightRadius: Dimensions.get('window').width * 2
    }
});
