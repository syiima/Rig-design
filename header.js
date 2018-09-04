import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const user = require ('../user.jpg');
const styles = require ('../styles.js');


export default class header extends React.Component {
  render () {
    return (

      <View style={styles.container}>
        <Image style={styles.profImage} source={user} />
        <View style={styles.searchbox}>
          <Icon style={{paddingLeft: 2}} name="search" size={19} color="white" />
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.searchText}
            placeholder="Search"
            placeholderTextColor="#fff"
          />
        </View>
        <TouchableOpacity>
          <Icon name="power-off" size={28} color="white"/></TouchableOpacity>
      </View>

    )
  }
}
