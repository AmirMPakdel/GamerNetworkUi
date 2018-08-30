import React from 'react';
import { Text, StyleSheet } from 'react-native';
/**
 *
 * @param {fonntSize} fontSize
 * @param {color} color
 */
const MuniTextLight = props => {
    const styles = StyleSheet.create({
        muniText: {
            fontFamily: 'Muli-ExtraLight',
            fontSize: +props.fontSize,
            color: props.color
        }
    });

    return (
        <Text {...props} style={{ ...styles.muniText, ...props.style }}>
            {props.children}
        </Text>
    );
};

export default MuniTextLight;
