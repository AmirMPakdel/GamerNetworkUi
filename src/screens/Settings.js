import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';


export default class Settings extends React.Component{

    render(){

        return(

            <ImageBackground style={styles.bg} blurRadius={1} source={require('./../images/signin_bg.png')}>
                <View style={styles.container}>
                    <View style={styles.circle}>

                    <Text>Settings</Text>
                        
                    </View>
                </View>
            </ImageBackground>
        );
    }

    onpress = ()=>{

        this.props.navigation.navigate('Chests')
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