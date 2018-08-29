import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

export default class Signin extends React.Component{


    constructor(props){
        super(props)

    }

    render(){

        return(
            <ImageBackground style={styles.bg} source={require('./../images/signin_bg.png')}>
                <View>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create(

    {
        bg:{
            height:'100%',
            width:'100%'
        }
    }
)