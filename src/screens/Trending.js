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
        position:'absolute',
        height:'100%',
        width:'100%',
        zIndex:10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
