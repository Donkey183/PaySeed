import React from 'react';
import { Platform, Image, } from 'react-native';
import StackViewStyleInterpolator
  from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import NavigationButton from './components/NavigationButton';
import { window, } from '../app';
import { tabBar, } from '../tab';

const BottomTabNavigatorConfig = options => {
  const { inactiveTintColor, activeTintColor, list, } = tabBar;
  const { initialRouteName = '', showIcon = true, } = options;

  return {
    initialRouteName,
    tabBarOptions: {
      inactiveTintColor,
      activeTintColor,
      showLabel: true,
      showIcon,
      indicatorStyle: {
        height: 0,
      },
      style: {
        height: 49,
        margin: 0,
        padding: 0,
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
      },
      labelStyle: {
        fontSize: 12,
        margin: 0,
        padding: 0,
      },
    },
    defaultNavigationOptions: ({ navigation, }) => {
      const { routeName, } = navigation.state;
      const { icoPath, selectedIconPath, icoName, text, } = list[routeName];
      return {
        tabBarIcon: ({ focused, tintColor, }) => {
          if (icoPath) {
            const icon = focused ? selectedIconPath : icoPath;
            return (
              <Image
                source={icon}
                style={{
                  width: 20,
                  height: 20,
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            );
          }
          const IcoName = focused ? icoName : `${icoName}-outline`;
          return <NavigationButton name={IcoName} size={20} color={tintColor} usename />;
        },
        tabBarLabel: text,
      };
    },
  };
};

const StackNavigatorConfig = options => {
  const {
    initialRouteName = '',
    screenInterpolator = StackViewStyleInterpolator.forHorizontal,
  } = options;

  const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

  const {
    headerBackTitle = null,
    headerTintColor = '#000000',
    gesturesEnabled = true,
  } = window || {};
  return {
    initialRouteName,
    mode: 'card', // ?????????????????? card - ??????????????????????????????;modal - ?????????iOS?????????????????????
    headerMode: 'float', // float - ???????????????iOS???????????????;screen - ?????????????????????????????????;none - ????????????
    cardStyle: { backgroundColor: '#F5FCFF', }, // ????????????????????????????????????????????????????????????????????????
    defaultNavigationOptions: {
      headerBackTitle, // ??????????????????
      headerTintColor, // ??????????????????
      gesturesEnabled, // ????????????????????????
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        color: '#000000',
      },
      headerTitleContainerStyle: {
        left: TITLE_OFFSET,
        right: TITLE_OFFSET,
      },
      headerStyle: {
        backgroundColor: "#FFFFFF",
        shadowColor: 'transparent',
        shadowOpacity: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
      },
    },
    transitionConfig: () => ({
      screenInterpolator,
    }),
  };
};

module.exports = {
  BottomTabNavigatorConfig,
  StackNavigatorConfig,
};
