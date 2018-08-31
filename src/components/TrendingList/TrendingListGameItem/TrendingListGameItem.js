import React, { Component } from 'react';
import { View, StyleSheet, Animated, ImageBackground } from 'react-native';
import MuniTextLight from '../../UI/MuniText/MuniTextLight';
import BottomSection from './BottomSection';

class TrendingListGameItem extends Component {
    state = {
        gameRankPosX: new Animated.Value(-80) // for animating the rankText
    };

    animateGameRankText() {
        if (this.props.isActive) {
            Animated.timing(this.state.gameRankPosX, {
                toValue: 5,
                duration: 200
            }).start();
        }
        // this condition check does not take effect on UI, but it really improves the performance and
        // frame rate by avoiding start of the dissappearal animation when it's already disappeared !!!
        else if (this.state.gameRankPosX !== -80) {
            Animated.timing(this.state.gameRankPosX, {
                toValue: -80,
                duration: 10
            }).start();
        }
    }

    render() {
        this.animateGameRankText();
        return (
            <View style={{ ...styles.rootContainer, ...this.props.style }}>
                {/* the background image for each item(game) */}
                <ImageBackground
                    style={styles.backgroundImageContainer}
                    imageStyle={styles.bgImage}
                    source={this.props.source}
                    resizeMode="stretch">
                    {/* the gray section containing the gameName and Game info */}
                    <BottomSection
                        isActive={this.props.isActive}
                        gameInfo={this.props.gameInfo}
                        gameName={this.props.gameName}
                    />
                    {/* this is the Game Rank, be careful with this, bcuz its positioned as absolute !!! */}
                    <Animated.View
                        style={{
                            position: 'absolute',
                            bottom: 110,
                            right: this.state.gameRankPosX
                        }}>
                        <MuniTextLight fontSize="72" color="#fff">
                            {/* the logic for appending a 0 to numbers less than 10, for example 2 gets transformed to 02 */}
                            {+this.props.gameRank < 10
                                ? '0' + this.props.gameRank
                                : this.props.gameRank}
                        </MuniTextLight>
                    </Animated.View>
                </ImageBackground>
            </View>
        );
    }
}

// const BORDER_RADIUS = Dimensions.get('window').width * 0.05;
const BORDER_RADIUS = 20;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: BORDER_RADIUS
    },
    backgroundImageContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    bgImage: {
        width: '100%',
        height: '100%'
    }
});

export default TrendingListGameItem;
