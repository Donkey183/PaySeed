import React, { Component, } from 'react';
import { Text, View, } from 'react-native';

export default class Mo extends Component {
  static navigationOptions = ({ navigation, }) => ({
    headerTitle: '首页',
  });
  render() {
    return (
      <View>
        <Text>首页</Text>
      </View>
    );
  }
}
