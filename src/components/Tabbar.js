import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Tab from './Tab';

import { connect } from 'react-redux';
import { onTabChanged } from '../store/actions/exports';

class Chests extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Tab
                    src={require('./../images/home.svg')}
                    name="Home"
                    selectedTab={this.props.selectedTab}
                    tabSelected={this.select}
                />

                <Tab
                    src={require('./../images/star.svg')}
                    name="Trending"
                    selectedTab={this.props.selectedTab}
                    tabSelected={this.select}
                />

                <Tab
                    src={require('./../images/user.svg')}
                    name="Profile"
                    selectedTab={this.props.selectedTab}
                    tabSelected={this.select}
                />

                <Tab
                    src={require('./../images/notification.svg')}
                    name="News"
                    selectedTab={this.props.selectedTab}
                    tabSelected={this.select}
                />

                <Tab
                    src={require('./../images/controls.svg')}
                    name="Settings"
                    selectedTab={this.props.selectedTab}
                    tabSelected={this.select}
                />
            </View>
        );
    }

    select = name => {
        if (name === 'Profile') {
            this.props.navigation.navigate('Signin');
        } else {
            this.props.navigation.navigate(name);
        }
        this.props.onTabChanged(name);
    };
}

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '60%',
        flexDirection: 'row',
        backgroundColor: '#232323'
    }
});

//mapping all needed states into props of this component
const mapStateToProps = newState => ({
    selectedTab: newState.navReducer.selectedTab
});

// map all dispatch events into props
const mapDispatchesToProps = dispatch => ({
    onTabChanged: tabName => dispatch(onTabChanged(tabName))
});

export default connect(
    mapStateToProps,
    mapDispatchesToProps
)(Chests);
