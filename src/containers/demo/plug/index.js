import React, { Component, } from 'react';
import { StyleSheet, Text, View, InteractionManager, } from 'react-native';
import HomeSelector from '../../../app/selectors/home';
import * as HomeActions from '../../../app/actions/home';
import connect from '../../../app/store/connect';
import { Toast, } from '../../../components';

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
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#fcfcfc',
    backgroundColor: 'white',
    marginBottom: -0.5,
  },
});
@connect(HomeSelector, HomeActions)
export default class Plug extends Component {

  static navigationOptions = {
    headerTitle: '墨依赖!&',
  };

  constructor(...args) {
    super(...args);
    this.state = {
      isRefreshing: false,
      flagApi: true,
    };
  }

  goWeb = (gourl = 'https://www.jianshu.com/u/c971c7ffa27e') => {
    const { navigation, } = this.props;
    navigation.navigate('Web', {
      url: gourl,
    });
  };

  goBack = () => {
    const { navigation, } = this.props;
    navigation.navigate('Backa');
  };

  goTab = () => {
    const { navigation, } = this.props;
    navigation.navigate('Me');
  };

  sendRequest() {
    this.setState({ isRefreshing: true, });
    InteractionManager.runAfterInteractions(() => {
      this.props.actions.doLogout({
        ci: 1,
        limit: 100,
        offset: 0,
        token: 'mozi',
        optimus_uuid: 'mozi',
      });
    });
  }
  render() {
    const { home, } = this.props;
    console.log("======TAG===render===home===", home);
    if (home.logout) {
      Toast.show({ title: "已退出登陆", });
    }

    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goBack();
          }}
        >
          跳转页面
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goTab();
          }}
        >
          跳转Tab
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goWeb('https://www.jianshu.com/p/2049eec9154e');
          }}
        >
          跳转web页
        </Text>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.sendRequest();
          }}
        >
          发送网络请求
        </Text>
      </View>
    );
  }
}
