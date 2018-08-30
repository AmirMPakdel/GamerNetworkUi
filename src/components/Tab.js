import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class Tab extends React.Component{

    constructor(props){
      super(props);

      this.name = props.name;
      this.selectedTab = props.selectedTab;
      this.icon_src = props.src;
      this.tabSelected = props.tabSelected;
    }

    onTabPressed = ()=>{

        this.tabSelected(this.name);
    }

    render(){
      if(this.props.name === this.props.selectedTab){

        glassJsx = <View blurRadius={50} style={{
          position:'absolute',
          height:'100%',
          width:'100%',
          elevation:5,
          //backgroundColor:'#FACF7F',
          opacity:0.2
        }}/>

        lineJsx = <View style={{
          height:'6%',
          width:'100%',
          backgroundColor:'#FFEA84',
          opacity:0.95
        }}/>

        fillColor = '#F8BC4D'

      }else{

          glassJsx = <View style={styles.glass}/>
          lineJsx = <View style={styles.line}/>
          fillColor = '#FFFFFF'
      }

      return(
          <TouchableWithoutFeedback onPress={this.onTabPressed}>
          <View style={styles.container}>

            {glassJsx}
            {lineJsx}

            <View style={styles.icon_container}>
                <SvgUri source={this.icon_src} fill={fillColor} style={styles.icon}/>
            </View>

          </View>
          </TouchableWithoutFeedback>
      )
    }
}

const styles = StyleSheet.create(

    {
        container:{

            flex:1,
            marginLeft:5,
            marginRight:5,
            zIndex:1,
            backgroundColor:'#232323'

        },

        glass:{

            position:'absolute',
            height:'100%',
            width:'100%',
            elevation:5,
            backgroundColor:'rgba(244, 183, 71,0.97)',
            opacity:0
        },

        line:{

            height:'6%',
            width:'100%',
            backgroundColor:'#F9C25B',
            opacity:0
        },

        icon_container:{

            flex:1,
            paddingLeft:15,
            paddingRight:15,
            paddingTop:6,
            paddingBottom:4,
            justifyContent:'center',
            alignItems:'center'

        },

        icon:{

            height:'100%',
            width:'100%',
            elevation:5,
            shadowOffset:{height:10,width:10},
            shadowColor:"#F8BC4D",
            resizeMode:'stretch'
        }
    }
)
