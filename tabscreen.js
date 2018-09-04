import React from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import mappage from './Newhome.js';
import secondp from './secondpage.js';
import adding from './midpage.js';


var Screennavigator = TabNavigator ({
  Tab1: {
    screen: mappage,
    navigationOptions: {
      tabBarLabel: 'Documentation',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <Icon style={{marginTop:3}} name="user" size={38} color="white" />
      )
    }
    },
  Tab3: {screen: adding,
  },
  Tab2: {screen: secondp,},

},
{
  tabBarPosition: 'bottom',
  swipeEnabled: 'false',
  tabBarIcon: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
  },
  tabBarOptions: {
    tintColor: 'grey',
    showIcon: true,
    style: { height: 60, padding: 3,backgroundColor: '#f7971f', margin:7, marginTop:0 },

    showLabel: false,
    labelStyle: {
      fontSize: 13,

    }
  }
});

Screennavigator.navigationOptions = {
  title: "tabtabtabbar"
};

export default Screennavigator;
