import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {BorderShadow} from 'react-native-shadow';

export default class Home extends React.Component{

    render(){

        return(

            <View>
                
            </View>
        );
    }

    onpress = ()=>{

        this.props.navigation.navigate('Trending')
    }
}

const styles = StyleSheet.create({

    container:{
        
        height:'100%',
        width:'100%',
        elevation:10,
        alignItems: 'center', 
        justifyContent: 'center',
    },
})