import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Target from '../screeens/target';
import Calender  from '../screeens/calender'
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
  screensOptions={({ route }) => ({
    tabBarIcons: ({ focused, color, size }) => {
      let iconeName;
      if (route.name === 'Calender') {
        iconeName = focused ? 'calender' : 'calender-outline';
      } else if (route.name === 'Target') {
        iconeName = focused ? 'flag' : 'flag-outline';
      }
      return <Ionicons name={iconeName} size={size} color={color} />;
    },
  })}
  activeColor={'#ee8249'}
  inactiveColor={'gray'}>
     
      <Tab.Screen name="Target" component={Target} />
      <Tab.Screen name="calender" component={Calender} />
    </Tab.Navigator>
  );
};
 
export default BottomTabNavigator;



 