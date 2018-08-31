import React from 'react';
import {StyleSheet ,View, Text, TouchableWithoutFeedback} from 'react-native';
import MuniTextLight from './MuniText/MuniTextLight';

export default class MuniButton extends React.Component{

    render(){

        return(
            <TouchableWithoutFeedback onPress={this.props.onPressed}>
                <View style={styles.container}>

                    <MuniTextLight fontSize='25' color='#FFFFFF'>{this.props.text}</MuniTextLight>

                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            height:'16%',
            width:'74%',
            margin:30,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgba(219, 154, 15,0.8)',
            borderRadius:40,
            elevation:4,
        }
    }
)