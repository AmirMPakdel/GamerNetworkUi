import React from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';

export default class Signin extends React.Component{


    constructor(props){
        super(props)

    }

    render(){

        return(
            <ImageBackground style={styles.bg} blurRadius={1} source={require('./../images/signin_bg.png')}>
                <View style={styles.container}>
                    <View style={styles.circle}>
                        
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create(

    {
        bg:{
            height:'100%',
            width:'100%',
        },

        container:{

            flex:1,
            justifyContent:'flex-end',
            alignItems:'center'
        },

        circle:{
            height:'70%',
            width: '170%',
            backgroundColor:'#FACF7F',
            borderTopLeftRadius: Dimensions.get('window').width * 2,
            borderTopRightRadius:Dimensions.get('window').width * 2,
        }
    }
)