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
            <ImageBackground style={styles.bg} blurRadius={0.4} source={require('./../images/2.png')}>
                <View style={styles.container}>

                    <View style={styles.title_con}>
                        <MuniTextLight style={styles.tilte}
                        fontSize={40} color="#f8f8f8">Log in</MuniTextLight>
                    </View>
                    <View style={styles.circle}>
                        
                        <Sign_input
                        src={require('./../images/email_icon.png')}></Sign_input>
                    
                        <Sign_input
                        src={require('./../images/password_icon.png')}></Sign_input>

                        <View style={styles.texts_con}>
                            <MuniTextLight color="#F8BC4D">Create Account</MuniTextLight>

                            <MuniTextLight color="#F8BC4D">Forgot Password</MuniTextLight>
                        </View>
                        
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
            justifyContent:'center',
            alignItems:'center',
            elevation:20,
            //opacity:0.94,
            backgroundColor:'rgb(252,236,161)',
            borderTopLeftRadius: Dimensions.get('window').width * 2,
            borderTopRightRadius:Dimensions.get('window').width * 2,
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
            width:'42%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:'gray'
        },

        inputs:{
            shadowColor:'black',
            shadowOffset: {width: 5, height:5},
            shadowOpacity: 0.8,
            shadowRadius: 2,
        }
    }
)