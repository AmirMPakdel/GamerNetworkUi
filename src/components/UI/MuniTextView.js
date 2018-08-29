import React from 'react';
import { Text, StyleSheet } from 'react-native';
/**
 * 
 * @param {fonntSize} fontSize 
 * @param {color} color
 */
const MuniTextView = props => {
    const styles = StyleSheet.create({
        muniText: {
            fontFamily: 'Muli',
            fontSize: +props.fontSize,
            color: props.color
        }
    });

    return (
        <Text {...props} style={styles.muniText}>
            {props.children}
        </Text>
    );
};

export default MuniTextView;
