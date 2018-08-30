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
        const viewport = Dimensions.get('window').width;
        return (
            <Carousel
                ref={c => {
                    this._carousel = c;
                }}
                data={this.state.data}
                renderItem={this.renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={this.props.itemWidth + 10}
                hasParallaxImages={true}
                inactiveSlideScale={0.91}
                inactiveSlideOpacity={0.5}
                centerContent={true}
                activeSlideAlignment="center"
                contentContainerCustomStyle={{ justifyContent: 'space-evenly' }}
                slideStyle={{
                    alignItems: 'center'
                }}
            />
        );
    }
}

export default TrendingList;
