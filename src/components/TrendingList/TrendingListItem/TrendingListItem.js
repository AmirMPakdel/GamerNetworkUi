import React from 'react';
import {
    View,
    Dimensions,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import TrendingListGameItem from '../TrendingListGameItem/TrendingListGameItem';
import MuniTextLight from '../../UI/MuniText/MuniTextLight';
import SvgUri from 'react-native-svg-uri';
import { BorderShadow, BoxShadow } from 'react-native-shadow';

class TrendingListItem extends React.Component {
    state = {
        isBookmarked: false, // this will change the color of the bookmark icon
        bookmarkViewPosY: new Animated.Value(-80)
    };
    _onBookMarkHandler = () => {
        this.setState(prevState => {
            return { isBookmarked: !prevState.isBookmarked };
        });
    };
    animateBottomCardSection = isActive => {
        if (isActive) {
            Animated.timing(this.state.bookmarkViewPosY, {
                toValue: 0,
                delay: 0,
                duration: 300
            }).start();
        }
        // this condition check does not take effect on UI, but it really improves the performance and
        // frame rate by avoiding start of the dissappearal animation when it's already disappeared !!!
        else if (this.state.bookmarkViewPosY !== -80) {
            Animated.timing(this.state.bookmarkViewPosY, {
                toValue: -80,
                duration: 150
            }).start();
        }
    };
    render() {
        //this statement checks if the current index is the index of this item or not,
        //i know its rediculious but it works
        const isActive = this.props.index === this.props.gameRank - 1;
        this.animateBottomCardSection(isActive);

        let bookmarkFillColor = '#000';
        if (this.state.isBookmarked) {
            bookmarkFillColor = '#F8BC4D';
        }
        const viewPortWidth = Dimensions.get('window').width;

        return (
            <View
                style={{
                    width: +this.props.width,
                    height: +this.props.height // 70 for bottom withe section bar (bottomCardSection)  and 10 for shadow
                }}>
                <BoxShadow
                    setting={{
                        width: this.props.width,
                        height: this.props.height,
                        color: '#111',
                        border: 4,
                        radius: 10,
                        opacity: 0.12,
                        x: 3,
                        y: 5,
                        style: {
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }
                    }}>
                    <TrendingListGameItem
                        // the elevation is to bring the item on the bottomCardSection
                        //this is for animation, bcuz the bottomCardSection should go under the item
                        style={{ elevation: 3 }}
                        isActive={isActive}
                        gameName={this.props.gameName}
                        gameInfo={this.props.gameInfo}
                        gameRank={this.props.gameRank}
                        source={this.props.source}
                    />
                </BoxShadow>

                <Animated.View
                    style={{
                        height: 70 + 10, //70 is the height of the botttomCardSection, 10 is for the extra shadow
                        width: '100%',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        // animating the opacity as the position changes
                        opacity: this.state.bookmarkViewPosY.interpolate({
                            inputRange: [-80, 0],
                            outputRange: [0, 1]
                        }),
                        //this is the animation part
                        transform: [
                            { translateY: this.state.bookmarkViewPosY }
                        ],
                        overflow: 'visible',
                        elevation: 1 // this is bcuz the bottomCardSection must go under the Item
                    }}>
                    <BoxShadow
                        setting={{
                            width: this.props.width * 0.85, // true width of the white section
                            height: 70,
                            color: '#222',
                            border: 7,
                            radius: 10,
                            opacity: 0.15,
                            x: 2,
                            y: 3,
                            style: {
                                //centring the bottomCardSection in Item
                                marginRight: 'auto',
                                marginLeft: 'auto'
                            }
                        }}>
                        {/* the container for the content of the bottomCardSection */}
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#fff',
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10,
                                paddingLeft: 10
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginTop: 'auto',
                                    marginBottom: 'auto'
                                }}>
                                <MuniTextLight fontSize={22} color="#000">
                                    Read More
                                </MuniTextLight>
                                {/* the vertical separator */}
                                <View
                                    style={{
                                        height: '120%',
                                        width: 2,
                                        backgroundColor: 'rgb(253, 237, 159)'
                                    }}
                                />
                                {/* bookmark icon */}
                                <TouchableWithoutFeedback
                                    onPress={this._onBookMarkHandler}>
                                    <View style={{ width: 40, height: 30 }}>
                                        <SvgUri
                                            height="100%"
                                            width="100%"
                                            source={require('../../../images/bookmark.svg')}
                                            fill={bookmarkFillColor}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </BoxShadow>
                </Animated.View>
            </View>
        );
    }
}

export default TrendingListItem;
