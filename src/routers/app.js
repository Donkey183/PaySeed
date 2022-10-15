import { createBottomTabNavigator, createStackNavigator, createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { mergeJSON, } from 'utils/util';

import { BottomTabNavigatorConfig, StackNavigatorConfig, } from '../config';
import * as pages from './index';


const TabNav = createBottomTabNavigator(
  {
    Home: pages.Home,
    Demo: pages.Demo,
    Me: pages.Me,
  },
  BottomTabNavigatorConfig({
    initialRouteName: 'Home',
  }),
);

TabNav.navigationOptions = ({ navigation, }) => {
  // 设置tabBar的标题
  const { routes, index, } = navigation.state;
  const { routeName, params, } = routes[index];
  const __defaultNavigationOptions = StackNavigatorConfig({ initialRouteName: routeName, }).defaultNavigationOptions;
  console.log('efaultNavigationOptions######', routes[index]);
  const __navigationOptions = pages[routeName].navigationOptions;
  let targetNavigationOptions = {};
  if (typeof (__navigationOptions) === 'function') {
    targetNavigationOptions = __navigationOptions({ navigation, params, });
  } else {
    targetNavigationOptions = { ...__navigationOptions, };
  }
  mergeJSON(__defaultNavigationOptions, targetNavigationOptions);
  return targetNavigationOptions;
};

const AppStack = createStackNavigator(
  {
    Root: TabNav,
    Web: pages.Web,
    Back: pages.Back,
    Backa: pages.Backa,
    Login: pages.Login,
    Setting: pages.Setting,
    HeaderImageScrollView: pages.HeaderImageScrollView,
    InterbankTransfer: pages.InterbankTransfer,
  },
  StackNavigatorConfig({
    initialRouteName: 'Root',
  }),
);

export default createAppContainer(AppStack);
