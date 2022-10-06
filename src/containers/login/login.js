import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import connect from '../../app/store/connect';
import LoginBiz from './biz';

const activeTabColor = '#42c02e';
const defaultTabColor = "#949494";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
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

@connect(
  state => ({
    routes: state.nav.routes,
  }),
  {},
)
export default class Login extends Component {
  static navigationOptions = ({ navigation, }) => ({
    headerTitle: '登陆页标题',
    // headerLeft: (
    //   <NavigationButton
    //     name="Login"
    //     callback={() => {
    //       navigation.state.params.goBack && navigation.state.params.goBack();
    //     }}
    //   />
    // ),
  });

  componentDidMount() {
    this.props.navigation.setParams({
      goBack: this.goBack,
    });
  }

  goBack = () => {
    this.props.navigation.navigate('Home');
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
        <LoginBiz tabLabel={'验证码登陆2'} navigation={navigation} />
        <LoginBiz tabLabel={'密码登陆'} navigation={navigation} />
      </ScrollableTabView>
    );
  }
}
