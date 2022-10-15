import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import HomeSelector from '../../../app/selectors/home';
import * as HomeActions from '../../../app/actions/home';
import connect from '../../../app/store/connect';

const styles = StyleSheet.create({
  container:
   {
     flex: 1,
     marginLeft: 10,
   },
  headerButton: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#B0B0B0',
    backgroundColor: '#B0B0B0',
    margin: 10,
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

@connect(HomeSelector, HomeActions)
export default class AuthStepTwo extends Component {
  static navigationOptions = {
    headerTitle: '首页',
  };

  componentDidMount() {
    this.props.navigation.setParams({
      goBack: this.goBack,
    });
  }

  goBack = (pageName) => {
    this.props.navigation.navigate(pageName);
  };


  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Login');
          }}
        >
          注册
        </Text>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Login');
          }}
        >
          登陆
        </Text>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Login');
          }}
        >
          开户
        </Text>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Mo');
          }}
        >
          账户总览
        </Text>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Login');
          }}
        >
          汇入
        </Text>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Login');
          }}
        >
          汇出
        </Text>
        <Text
          style={styles.headerButton}
          onPress={() => {
            this.goBack('Login');
          }}
        >
          交易明细
        </Text>
      </View>
    );
  }
}
