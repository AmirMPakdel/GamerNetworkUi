import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TrendingListItem from './TrendingListItem/TrendingListItem';

//props : itemWidth, itemHeight
class TrendingList extends Component {
    state = {
        data: [
            {
                gameName: 'Battlefield',
                gameInfo: 'sdklfsdkfnskdn sdklfn lsdknf ',
                source: require('../../images/Battlefield.jpg')
            },
            {
                gameName: 'Battlefield',
                gameInfo: 'sdklfsdkfnskdn sdklfn lsdknf ',
                source: require('../../images/Battlefield.jpg')
            },
            {
                gameName: 'Battlefield',
                gameInfo: 'sdklfsdkfnskdn sdklfn lsdknf ',
                source: require('../../images/Battlefield.jpg')
            }
        ]
    };

    renderItem = ({ item, index }) => {
        return (
            <TrendingListItem
                gameName={item.gameName}
                gameInfo={item.gameInfo}
                gameRank={index}
                source={item.source}
                width={this.props.itemWidth}
                height={this.props.itemHeight}
            />
        );
    };

    render() {
        return (
            <Carousel
                ref={c => {
                    this._carousel = c;
                }}
                data={this.state.data}
                renderItem={this.renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={this.props.itemWidth}
            />
        );
    }
}

export default TrendingList;
