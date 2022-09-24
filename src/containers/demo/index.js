import React, { Component, } from 'react';
import { StyleSheet, } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Plug from './plug';
import Moui from './moui';
import Rule from './rule';

const activeTabColor = '#42c02e';
const defaultTabColor = "#949494";

const styles = StyleSheet.create({
  underline: {
    height: 3,
    backgroundColor: '#42c02e',
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#fcfcfc',
    backgroundColor: 'white',
    marginBottom: -0.5,
  },
});

export default class Demo extends Component {
  static navigationOptions = {
    headerTitle: '墨子攻城1',
  };
  render() {
    const { navigation, } = this.props;
    return (
      <ScrollableTabView
        scrollWithoutAnimation={false}
        locked={false}
        initialPage={0}
        tabBarUnderlineStyle={styles.underline}
        tabBarInactiveTextColor={defaultTabColor}
        tabBarActiveTextColor={activeTabColor}
        renderTabBar={() => <DefaultTabBar style={styles.border} />}
      >
        <Plug tabLabel={'路由示例'} navigation={navigation} />
        <Moui tabLabel={'组件示例'} navigation={navigation} />
        <Rule tabLabel={'空页面'} navigation={navigation} />
      </ScrollableTabView>
    );
  }
}
