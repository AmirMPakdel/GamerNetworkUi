import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import MuniTextLight from './../components/UI/MuniText/MuniTextLight';
import Sign_input from './../components/signin/Sign_input';
import MuniButton from './../components/UI/MuniButton';


export default class Signin extends React.Component {
    constructor(props) {
        super(props);
    }

    sendData = ()=>{}

    render() {
        return (
            <View style={styles.container}>

                <Sign_input src={require('./../images/email.svg')}
                placeholder="Email" />

                <Sign_input src={require('./../images/password.svg')}
                placeholder="password" />

                <View style={styles.texts_con}>
                    <MuniTextLight
                        fontWeight="500"
                        fontSize="15"
                        color="rgba(219, 154, 15,0.8)">
                        Create Account
                    </MuniTextLight>

                    <MuniTextLight
                        fontWeight="500"
                        fontSize="15"
                        color="rgba(219, 154, 15,0.8)">
                        Forgot Password
                    </MuniTextLight>
                </View>

                <MuniButton text="Get Started" onPressed={this.sendData}  />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop:120,
        justifyContent: 'center',
        alignItems: 'center'
    },

    texts_con: {
        height: '8%',
        width: '76%',
        marginTop:4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
