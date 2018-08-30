import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import TrendingListItem from './TrendingListItem/TrendingListItem';

//props : itemWidth, itemHeight
class TrendingList extends Component {
    state = {
        currentItem: 0
    };

    //method for carousel to render each element
    renderItem = ({ item, index }) => {
        return (
            <TrendingListItem
                index={this.state.currentItem}
                gameName={item.gameName}
                gameInfo={item.gameInfo}
                gameRank={index + 1}
                source={item.source}
                width={this.props.itemWidth}
                height={this.props.itemHeight}
            />
        );
    };
    //a handler to update the current index which is snapped to slider
    _snapToItemHandler = index => {
        this.setState(prevState => {
            if (prevState.currentItem !== index) {
                return { currentItem: index };
            }
        });
    };

    render() {
        const viewport = Dimensions.get('window').width;
        return (
            <Carousel
                ref={c => {
                    this._carousel = c;
                }}
                onSnapToItem={this._snapToItemHandler} // snap even handler
                data={this.props.data} // data to render
                renderItem={this.renderItem} // render method for list items
                lockScrollWhileSnapping={true} // lock the scroll untill snap effect is finished
                sliderWidth={Dimensions.get('window').width} // total width of the slider (in our case TrendingList)
                itemWidth={this.props.itemWidth + 10} //width of the each item, 10 is for space between each item (behaves like margin)
                itemHeight={this.props.itemHeight} // height of each item
                hasParallaxImages={true} // i dont know what is this for right now, but dont delete this
                inactiveSlideScale={0.85}
                inactiveSlideOpacity={0.4}
                inactiveSlideShift={40} // this pushes inactive items down to 40
                centerContent={true} // this seems doesn't work as i expected, but also dont delete this
                activeSlideAlignment="center" // position of the active item in its container(not in the whole list)
                contentContainerCustomStyle={{ justifyContent: 'space-evenly' }} // its hard to explain , set backgroundColor to see where this effects
                slideStyle={{
                    //like above, gice it some bgColor to find where this is located
                    alignItems: 'center'
                }}
            />
        );
    }
}

export default TrendingList;
