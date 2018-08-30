import React from 'react';
import {StyleSheet , View, TextInput, Image} from 'react-native';
import SvgUri from 'react-native-svg-uri';


export default class Sign_input extends React.Component{


    render(){



        return(

            <View style={styles.container}>

                <View style={styles.icon_con}>
                    <Image style={styles.icon} source={this.props.src}></Image>
                </View>

                <View style={styles.input_con}>
                <TextInput style={styles.input} 
                placeholder={this.props.placeholder}
                placeholderTextColor='#FFFFFF'
                  underlineColorAndroid='transparent' 
                style={styles.TextInput}>
                    {this.props.input}
                </TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            height:'12%',
            width:'42%',
            margin:14,
            flexDirection:'row',
            alignItems:'center',
            //backgroundColor : "#0000",
            backgroundColor:'rgba(255, 255, 255, 0.4)',
            //elevation:2,
            //borderRadius:40,
        },

        icon_con:{
            height:'100%',
            width:'20%',
            paddingTop:10,
            paddingBottom:10,
            paddingLeft:12,
            paddingRight:12,
        },

        icon:{

            height:'100%',
            width:'100%',
            resizeMode:'stretch'

        },

        input_con:{
            height:'100%',
            width:'80%',
            marginLeft:10,
            paddingRight:20,
        },

        input:{
            
        }
    }
)