import { ThemeProvider } from "@react-navigation/native";
import React, { Component } from "react";
import Moment from 'react-moment'
import 'moment-timezone'  
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from 'react-native-calendar-picker'
import Calender from "./calender";

export default class Target extends Component {
  constructor (props){
    super (props)
    this.state = {
      selectedStartDate: null ,
      selectedEndDate: null,
    }
this.onDateChange = this.onDateChange.bind(this)}
onDateChange = ()=>{}
  render() {
const {selectedStartDate, selectedEndDate} = this.state 
const minDate = new Date() //todays date 
const maxDate = new Date ( 2023,4,10)
const startDate  = selectedStartDate? selectedStartDate.toString(): '';
const endDate  = selectedEndDate? selectedEndDate.toString(): '';

    return (
    <View  style = {styles.container}>
     <CalendarPicker
startFromMonday = {true}
allowRangeSelection =  { true}
minDate = {minDate}
maxDate = {maxDate}
todayBackgroundColor = '#f2e6ff'
selectedDayColor= '#7300e6' 
selectedDayTextColor="white"
onDateChange={this.onDateChange}


     />
      <View>
        <Text>selected StartDate : {this.selectedStartDate}</Text>
        <Text>selected EndDate : {this.selectedStartDate}</Text>
      </View>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
marginTop : 100, 
backgroundColor:'#FFFFF'

  }
});

