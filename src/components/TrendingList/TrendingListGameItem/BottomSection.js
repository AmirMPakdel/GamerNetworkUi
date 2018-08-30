import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import MuniTextLight from '../../UI/MuniText/MuniTextLight';
import MuniTextItalic from '../../UI/MuniText/MuniTextItalic';

class BottomSection extends React.Component {
    state = {
        opacity: new Animated.Value(0)
    };

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 0.9,
            duration: 2000
        }).start();
    }
    render() {
        return (
            <Animated.View
                style={{
                    ...styles.bottomSectionContainer,
                    opacity: this.state.opacity
                }}>
                <MuniTextLight fontSize="26" color="#fff">
                    {this.props.gameName}
                </MuniTextLight>
                <View style={styles.lineSeparator} />
                <View style={styles.gameInfo}>
                    <MuniTextItalic
                        numberOfLines={3}
                        fontSize="15"
                        color="#eee">
                        {this.props.gameInfo}
                    </MuniTextItalic>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    bottomSectionContainer: {
        width: '100%',
        height: 150,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 20,
        overflow: 'visible',
        backgroundColor: 'rgba(45, 37, 51, 0.9)'
    },
    lineSeparator: {
        width: '30%',
        marginTop: 10,
        marginBottom: 10,
        height: 2,
        backgroundColor: '#fff'
    },
    gameInfo: {
        paddingLeft: 10
    }
});

export default BottomSection;
