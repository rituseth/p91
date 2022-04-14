
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screeens/home'
import Calender from './screeens/calender'
import { NavigationContainer } from '@react-navigation/native';

import Target from './screeens/target'
import { HeaderTitle } from '@react-navigation/elements';


  const Stack = createStackNavigator();
const globalScreenoptions = {
  headerStyle:{backgroundColor:'#87CEEB'},
  headerTitleStyle: {color:'black' },
  headerTitleStyle: {font: 'bold' },
  headerTitleAlign : 'center'

}


  
export default function App() {
  return (
<NavigationContainer>
    <Stack.Navigator 

    screenOptions = {globalScreenoptions}>
     <Stack.Screen name = 'Calender' component = {Calender}/>
<Stack.Screen  name = 'Home' component = {Home}/>
<Stack.Screen  name = 'Target' component = {Target}/>



</Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
