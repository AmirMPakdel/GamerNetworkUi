import React from 'react';
import { View } from 'react-native';
import TrendingListGameItem from '../TrendingListGameItem/TrendingListGameItem';

const TrendingListItem = props => {
    return (
        <View
            style={{
                width: +props.width,
                height: +props.height,
                alignItems: 'center'
            }}>
            <TrendingListGameItem
                gameName={props.gameName}
                gameInfo={props.gameInfo}
                gameRank={props.gameRank}
                source={props.source}
            />
        </View>
    );
};

export default TrendingListItem;
