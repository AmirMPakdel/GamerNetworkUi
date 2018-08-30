import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import MuniTextLight from '../../UI/MuniText/MuniTextLight';
import BottomSection from './BottomSection';

class TrendingListGameItem extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <ImageBackground
                    style={styles.backgroundImageContainer}
                    imageStyle={styles.bgImage}
                    source={this.props.source}
                    resizeMode="stretch">
                    <BottomSection
                        gameInfo={this.props.gameInfo}
                        gameName={this.props.gameName}
                    />
                    <View style={styles.gameRank}>
                        <MuniTextLight fontSize="72" color="#fff">
                            {this.props.gameRank}
                        </MuniTextLight>
                    </View>
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
    gameRank: {
        position: 'absolute',
        bottom: 105,
        right: '5%'
    },
    bgImage: {
        width: '100%',
        height: '100%'
    }
});

export default TrendingListGameItem;
