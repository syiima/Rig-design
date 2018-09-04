import React from 'react';
import {YellowBox,View, Platform,Text, Image, TouchableOpacity, FlatList,TextInput, TouchableWithoutFeedback,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation';

import flatListData from '../parts/flatList/flatdata.js';
const styles = require ('../styles.js');
const mappy = require ('../smolmap.png');
const user = require ('../user.jpg');
import Header from './header.js';
import mappymappmmapp from '../parts/mappy.js';
import detailscreen from '../Details/detail.js';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

class HomePage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
      <View style={styles.firstbox} >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'      }}>
              <View >
                <Image style={styles.rigpic} source={{uri:this.props.item.imageUrl}} />
              </View>

            <View style={{flexDirection: 'column', alignItems: 'flex-start',width:117}}>
            <Text
              style={{
                color: '#999a9c',
                fontSize: 18,
                padding: 2,
                marginBottom: 2,
              }}>
              {this.props.item.name}
            </Text>

            <Text
              style={{
                color: '#34dde1',
                borderWidth: 1,
                borderColor: '#34dde1',
                borderRadius: 6,
                fontSize: 15,padding: 3,
              }}>
              {this.props.item.type}
            </Text>
            </View>

            <View style={{marginLeft: 135, justifyContent: 'center', width: 20, height: 20, backgroundColor: '#bdbcbc' , borderRadius: 10}} />

            </View>

            </View>
    </View>
    )
  }
}


 class Newhome extends React.Component {

  render () {
    return (
      <View style = {styles.screenPad}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View elevation={5} style={styles.topview}>
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Mapscreen')}><View>
          <Image style={styles.mapImage} source={mappy} /> </View></TouchableWithoutFeedback>
          <View style={styles.mapcaption}>
            <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>  28   </Text>
              <Text style={{color: 'grey', fontSize: 15, fontWeight: 'bold'}}>Active</Text>
            </View>
            <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}> 4  </Text>
              <Text style={{color: 'grey', fontSize: 15, fontWeight: 'bold'}}> Fleet </Text>
            </View>
            <View style={{flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>  89 MB </Text>
              <Text style={{color: 'grey', fontSize: 15, fontWeight: 'bold'}}> Daily Rate </Text>
            </View>
          </View>
        </View>

        <View style={{padding: 7,backgroundColor: 'white', borderBottomColor: '#f7971f', borderBottomWidth: 1,borderTopColor: '#f7971f', borderTopWidth: 1}}>
          <Text > List of Devices </Text>
        </View>


          <FlatList
            data={flatListData}
            renderItem={({item, index}) => {
              // console.log('Item = ${JSON.stringify (item)}, index = ${index}');
              return (
                <TouchableOpacity onPress ={()=> this.props.navigation.navigate('Plswork')}>
                <HomePage  item={item} index={index}>

                </HomePage ></TouchableOpacity>
              );
            }}>

          </FlatList>
        </ScrollView>
      </View>
    )
  }
}

//flatlist ADD DELETE Button
//
const TackNavi =  StackNavigator ({
  App: {
      screen: Newhome,
  },
  Mapscreen: {
      screen: mappymappmmapp,
  },
  Plswork: {
      screen: detailscreen,
  },
},
  {
    initialRouteName: 'App',
    headerMode: 'none',
    mode: Platform. OS === 'ios' ? 'modal' : 'card',
  }

);

export default class Tiktak extends React.Component {
  render () {
    return <TackNavi />;
  }
}
