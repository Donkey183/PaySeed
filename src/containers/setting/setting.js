import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import connect from '../../app/store/connect';
import NavigationButton from '../../components/NavigationButton';

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
});

@connect(
  state => ({
    routes: state.nav.routes,
  }),
  {},
)
export default class Setting extends Component {
  static navigationOptions = ({ navigation, }) => ({
    headerTitle: '设置页标题',
    headerLeft: (
      <NavigationButton
        name="Login"
        callback={() => {
          navigation.state.params.goBack && navigation.state.params.goBack();
        }}
      />
    ),
  });

  componentDidMount() {
    this.props.navigation.setParams({
      goBack: this.goBack,
    });
  }

  goBack = () => {
    this.props.navigation.navigate('Mo');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goBack();
          }}
        >
          点击回首页
        </Text>
      </View>
    );
  }
}
