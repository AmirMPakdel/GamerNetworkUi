import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Tab from './Tab';


export default class Chests extends React.Component{

    state = {selectedTab: "Home"}

    render(){

        return(

            <View style={styles.container}>

                <Tab src={require('./../images/home.svg')} name="Home"
                selectedTab={this.state.selectedTab} tabSelected={this.select}/>

                <Tab src={require('./../images/star.svg')} name="Trending"
                selectedTab={this.state.selectedTab} tabSelected={this.select}/>

                <Tab src={require('./../images/user.svg')} name="Profile"
                selectedTab={this.state.selectedTab} tabSelected={this.select}/>

                <Tab src={require('./../images/notification.svg')} name="News"
                selectedTab={this.state.selectedTab} tabSelected={this.select}/>

                <Tab src={require('./../images/controls.svg')} name="Settings"
                selectedTab={this.state.selectedTab} tabSelected={this.select}/>

            </View>
        )
    }

    select = (name)=>{

        if(name === "Profile"){
            this.props.navigation.navigate('Signin');
        }else{
        this.props.navigation.navigate(name)
        }
        state = {selectedTab:name}

        this.setState(state);
    }
}

const styles = StyleSheet.create({

    container:{
        height:'10%',
        width:'60%',
        flexDirection:'row',
        backgroundColor:'#232323'
    }
})
