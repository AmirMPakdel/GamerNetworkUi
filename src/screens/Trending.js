import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TrendingList from '../components/TrendingList/TrendingList';

export default class Trending extends React.Component {
    render() {
        return <TrendingList itemWidth={290} itemHeight={350} />;
    }
}

const styles = StyleSheet.create({});
