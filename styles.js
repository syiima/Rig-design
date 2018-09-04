import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const scroll_height = SCREEN_HEIGHT - 40 - Constants.statusBarHeight;
const SCREEN_WIDTH = Dimensions.get('window').width;
const bodheight = SCREEN_HEIGHT - Constants.statusBarHeight;


var styles = StyleSheet.create({

screenPad: {
    // paddingTop: Constants.statusBarHeight,
    flex:1,
    margin: 7,
    marginBottom: 0,
    borderBottomWidth:0,
    borderWidth: 7,
    borderColor: '#f7971f',
    backgroundColor: 'white',
},
containerImage: {
  marginTop: 10,
  marginBottom: 15,
  padding: 10,
  resizeMode: 'contain',
  alignSelf: 'center',
},
bottom: {
   marginTop: Constants.statusBarHeight,
   flex:1,
   backgroundColor: 'white',
   justifyContent: 'center',
   alignItems: 'center',
   margin: 7,
   borderWidth:   7,
   borderColor: '#f7971f',
 },
container2: {
  alignSelf: 'stretch',
  margin: 10,
  padding: 10,
},
icon: {
  color: '#36607a',
},
box: {
  flexDirection: 'row',
  height: 45,
  padding: 4,
  marginBottom: 15,
  borderBottomWidth: 2.5,
  borderBottomColor: '#0D5D98',
},
buttonCon: {
  backgroundColor: '#f7971f',
  borderColor: '#f7971f',
  borderWidth: 2,
  borderRadius: 30,
  padding: 10,
  justifyContent: 'center',
  margin: 12,
  flex: 1,
},
buttonText: {
  fontSize: 25,
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
},
footerbox: {
  backgroundColor: 'transparent',
  margin: 5,
  // flex: 1,
},
footerText: {
  color: '#0D5D98',
  fontSize: 18,
},
input: {
  fontSize: 18,
  paddingLeft: 10,
  flex: 1,
  color: '#0D5D98',
},

//HOMEPAGEE
container: {
  backgroundColor: '#f7971f',
  padding: 8,
  height: 54,
  justifyContent: 'space-between',
  flexDirection:'row',
  alignItems: 'center',
},
floatingButton: {
  alignSelf: 'flex-end',
  position: 'absolute',
  bottom: 35,
  right: 14,
  alignItems: 'center',
  backgroundColor: '#093b60',
  borderRadius: 34,
  width: 52,
  height: 52,
  justifyContent: 'center',
},
rigpic: {
  width: 48,
  height: 48,
  resizeMode: 'contain',
  margin: 7,
  marginLeft: 7,
  marginRight: 7,
},
firstbox: {
  backgroundColor: '#fff',
  borderBottomColor: '#f7971f',
  borderBottomWidth: 1,
},
searchbox: {
  flexDirection: 'row',
  backgroundColor: 'rgba(146,141,141,0.3)',
  borderRadius: 5,
  width: 210,
  height: 35,
  padding: 4,
  alignItems: 'center',
},
searchText: {
  marginLeft: 10,
  fontSize: 12,
  color: 'white',
},
profImage: {
  height: 37 ,
  width: 37,
  borderRadius: 19,
  borderColor: 'white',
  borderWidth: 2,
},
topview:{
  flexDirection: 'column',
   margin: 15,
   marginBottom:10,
   height:225,
   shadowColor: '#000000',
   shadowOffset: {
     width: 0,
     height: 3,
   },
   shadowOpacity: 1.0,
},

mapImage: {
  height: 160,
  borderTopLeftRadius: 120,
  borderTopRightRadius: 120,
  overflow: 'hidden',
  width: '100%',
  padding: 0,
  marginRight: 26,
},
mapcaption: {
  backgroundColor: 'white',
  padding: 4,
  height: 60,
  borderBottomLeftRadius: 7,
  borderBottomRightRadius: 7,
  flexDirection: 'row',
  justifyContent: 'space-around',
},

//COLLAPSIBLE
containr: {
  flex: 1,

  marginTop: Constants.statusBarHeight,
  margin: 7,
  marginBottom: 0,
  borderBottomWidth:0,
  borderWidth: 7,
  borderColor: '#f7971f',
  backgroundColor: 'white',
},
center: {
  textAlign: 'center',
  alignSelf: 'stretch',
},
boxytest:{
  alignSelf: 'stretch',
  alignItems: 'flex-end',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 4,
  backgroundColor: 'transparent',
  borderBottomColor: '#f7971f',
  borderBottomWidth: 1,
},
boxytest2:{
  alignSelf: 'stretch',
  alignItems: 'flex-end',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 4,
  marginTop: 15,
  backgroundColor: 'transparent',
  borderBottomColor: '#f7971f',
  borderBottomWidth: 1,
  borderTopColor : '#f7971f',
   borderTopWidth: 1
},

})
module.exports = styles;
