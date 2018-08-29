import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback}
from 'react-native';

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

        glassJsx = <View style={{
          position:'absolute',
          height:'100%',
          width:'100%',
          elevation:5,
          backgroundColor:'gold',
          opacity:0.2
        }}/>

        lineJsx = <View style={{
          height:'8%',
          width:'100%',
          backgroundColor:'gold',
          opacity:0.6
        }}/>

      }else{

          glassJsx = <View style={styles.glass}/>
          lineJsx = <View style={styles.line}/>
      }

      return(
          <TouchableWithoutFeedback onPress={this.onTabPressed}>
          <View style={styles.container}>

              {glassJsx}
              {lineJsx}

              <View style={styles.icon_container}>
                  <Image source={this.icon_src} style={styles.icon}/>
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
            backgroundColor:'rgb(20,20,20)'

        },

        glass:{

            position:'absolute',
            height:'100%',
            width:'100%',
            elevation:5,
            backgroundColor:'gold',
            opacity:0
        },

        line:{

            height:'8%',
            width:'100%',
            backgroundColor:'gold',
            opacity:0
        },

        icon_container:{

            flex:1,
            paddingLeft:15,
            paddingRight:15,
            paddingTop:8,
            paddingBottom:8,
            zIndex:4,
            justifyContent:'center',
            alignItems:'center'

        },

        icon:{

            height:'100%',
            width:'100%',
            zIndex:4,
            resizeMode:'stretch'
        }
    }
)
