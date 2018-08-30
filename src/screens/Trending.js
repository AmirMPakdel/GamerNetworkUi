import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TrendingList from '../components/TrendingList/TrendingList';

export default class Trending extends React.Component {
    render() {
        return <TrendingList itemWidth={360} itemHeight={360} />;
    }
}

const styles = StyleSheet.create({});
