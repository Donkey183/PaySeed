import React, { Component, } from 'react';
import { StyleSheet, Text, Button, View, } from 'react-native';
import HomeSelector from '../../app/selectors/home';
import * as HomeActions from '../../app/actions/home';
import connect from '../../app/store/connect';
import AuthStepOne from './components/AuthStepOne';
import AuthStepTwo from './components/AuthStepTwo';
import AuthStepThree from './components/AuthStepThree';
import AuthStepFour from './components/AuthStepFour';
import { ScrollView, } from 'react-navigation';

const styles = StyleSheet.create({
  container:
   {
     flex: 1,
     marginLeft: 10,
     display: 'flex',
   },
  scrollview: {
    width: '100%',
    flex: 1,
  },
  nextStep: {
    height: 100,
    width: '100%',
  },
});

@connect(HomeSelector, HomeActions)
export default class Account extends Component {
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
        <ScrollView style={styles.scrollview}>
          <AuthStepOne >
            注册
          </AuthStepOne>
          <AuthStepTwo>
            注册
          </AuthStepTwo>
          <AuthStepThree>
            注册
          </AuthStepThree>
          <AuthStepFour>
            注册
          </AuthStepFour>
        </ScrollView>
        <View style={styles.nextStep}>
          <Button
            title="上一步"
            onPress={() => {
              console.log('--------shang');
            }}
          />
          <Button
            title="下一步"
            onPress={() => {
              console.log('--------nexs');
            }}
          />
        </View>
      </View>
    );
  }
}
