import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions} from 'react-native';
import MuniTextView from './../components/UI/MuniTextView'

export default class Settings extends React.Component{

    render(){

        return(

            <ImageBackground style={styles.bg} blurRadius={0.6} source={require('./../images/1.png')}>
                <View style={styles.container}>

                    <View style={styles.title_con}>
                        <MuniTextView style={styles.tilte}
                        fontSize={40} color="#f8f8f8">Settings</MuniTextView>
                    </View>
                    <View style={styles.circle}>
                        
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
            elevation:20,
            opacity:0.94,
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
        }
    }
)