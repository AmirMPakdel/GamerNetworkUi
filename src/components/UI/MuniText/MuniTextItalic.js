import React from 'react';
import { Text, StyleSheet } from 'react-native';
/**
 *
 * @param {fonntSize} fontSize
 * @param {color} color
 */
const MuniTextItalic = props => {
    const styles = StyleSheet.create({
        muniText: {
            fontFamily: 'Muli-ExtraLightItalic',
            fontSize: +props.fontSize,
            color: props.color,
            elevation:10
        }
    });

    return (
        <Text {...props} style={styles.muniText}>
            {props.children}
        </Text>
    );
};

export default MuniTextItalic;
