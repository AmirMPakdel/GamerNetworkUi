import React from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import MuniTextLight from './../components/UI/MuniText/MuniTextLight';
import Sign_input from './../components/UI/Sign_input';
export default class Signin extends React.Component{


    constructor(props){
        super(props)

    }

    render(){

        return(
            <View style={styles.container}>
                <Sign_input
                src={require('./../images/email_icon.png')}></Sign_input>
            
                <Sign_input 
                src={require('./../images/password_icon.png')}></Sign_input>

                <View style={styles.texts_con}>
                    <MuniTextLight fontWeight="500"
                    fontSize='15'
                    color="rgba(219, 154, 15,0.8)">Create Account</MuniTextLight>

                    <MuniTextLight fontWeight="500"
                    fontSize='15'
                    color="rgba(219, 154, 15,0.8)">Forgot Password!</MuniTextLight>
                </View>
            </View>
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
            justifyContent:'center',
            alignItems:'center'
        },

        title_con:{
            height:'28%',
            width:'84%',
        },

        title:{
            margin:30,
        },

        texts_con:{
            
            height:'10%',
            width:'80%',
            marginTop:20,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:'blue'
        },

        inputs:{
            shadowColor:'black',
            shadowOffset: {width: 5, height:5},
            shadowOpacity: 0.8,
            shadowRadius: 2,
        }
    }
)