import React, { Component } from "react";
import { StyleSheet, Text, View , Image, TouchableOpacity} from "react-native";
//import TabNavigation from '../navigator/TabNavigation'
import { NavigationContainer } from "@react-navigation/native";
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>home</Text>
         <Image  style = {styles.image}
   source = {require('../assets/tenor.gif')}></Image> 
      
<TouchableOpacity 
style = {styles.color }
onPress = {()=>{
  this.props.navigation.navigate('TabNavigation')
}}
 
>
  Set the target 


</TouchableOpacity>
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black"
  },

  image:{
  width:400,
   height:400,
    resizeMode:'cover',
    marginBottom:200,
    borderRadius:140,


  },
  color:{
    marginBottom:20,

    width:250,
    height:130,
    borderColor:'white',
    color:'white',
    fontSize:35,
    fontStyle:'bold',
fontFamily:'bold',
textDecorationLine:'underline'
  }
});

