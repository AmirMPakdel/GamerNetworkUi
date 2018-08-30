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
                {/* the container for the trending game list, elevation is to come above the circle */}
                <View style={{ elevation: 10, marginTop: '10%' }}>
                    <TrendingList
                        data={data}
                        // this values are just for the image , bottomCardSection will append 70 in height automatically
                        itemWidth={280}
                        itemHeight={340}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
