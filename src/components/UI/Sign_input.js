import React from 'react';
import {StyleSheet , View, TextInput,Dimensions, Image} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {BoxShadow} from 'react-native-shadow';


export default class Sign_input extends React.Component{


    render(){

        const shadowOpt={
            height: Dimensions.get('window').height * 0.1,
            width:Dimensions.get('window').width * 0.8,
			color:"#a85c00",//"#db9a0f",
			border:10,
			radius:34,
			opacity:0.6,
			x:15,
			y:20,
			style:{marginVertical:5}
        }


        return(

            <BoxShadow style ={{flex:1}} setting={shadowOpt}>
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
            </BoxShadow>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            position:"relative",
            height:'98%',
            width:'98%',
            margin:14,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'rgba(255, 255, 255, 0.9)',
            borderRadius:40,
        },

        icon_con:{
            height:'100%',
            width:'20%',
            paddingTop:10,
            paddingBottom:10,
            paddingLeft:12,
            paddingRight:12,
            borderRadius:40,
            backgroundColor:'blue'
        },

        icon:{

            height:'100%',
            width:'100%',
            borderRadius:40,
            resizeMode:'stretch'

        },

        input_con:{
            height:'100%',
            width:'80%',
            borderRadius:40,
            marginLeft:10,
            paddingRight:20,
        },

        input:{
            height:'100%',
            width:'100%',
        }
    }
)