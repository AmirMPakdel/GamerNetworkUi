import React from 'react';
import { StyleSheet,Text, View, TextInput, Dimensions, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class Sign_input extends React.Component {
    render() {
        return (
            
            <View style={styles.container}>
                <View style={styles.icon_con}>
                    <SvgUri style={styles.icon} source={this.props.src} fill='rgba(219, 154, 15,0.8)'/>
                </View>

                <View style={styles.input_con}>
                    <TextInput
                        style={styles.txinput}
                        placeholder={this.props.placeholder}
                        placeholderTextColor="rgba(219, 154, 15,0.8)"
                        underlineColorAndroid="transparent">
                        {this.props.input}
                    </TextInput>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:'15%',
        width:'76%',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 40,
        elevation:1
    },

    icon_con: {
        height: '100%',
        width: '20%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 40
    },

    icon: {
        height:'100%',
        width:'100%',
        resizeMode: 'cover'
    },

    input_con: {
        height: '80%',
        width: '80%',
        borderRadius: 40,
        marginLeft: 10,
        paddingRight: 20,
    },

    txinput: {
        fontSize:20,
        color:'rgba(219, 154, 15,0.8)'
    }
});
