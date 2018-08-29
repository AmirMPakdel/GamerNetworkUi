import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';



export default class News extends React.Component{


    render(){

        return(

            <View style={styles.container}>
                <Button style={styles.button} title="Back" onPress={this.onpress}/>
                <Text style={styles.title}>News</Text>
            </View>
        );
    }

    onpress = ()=>{

        this.props.navigation.navigate('Home')
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },

    title:{

        fontSize:26
    },

    button:{

        height:'20%',
        width:'80%'

    }

})