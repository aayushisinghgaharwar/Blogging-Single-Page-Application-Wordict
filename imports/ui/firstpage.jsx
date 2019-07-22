import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import First from './first'
import Home from './home'
import AboutUs from './aboutUs'
import Help from './help'
import Wordict from './wordict'
import After from './after'
import reactMixin from 'react-mixin';  
import {ReactMeteorData} from 'meteor/react-meteor-data';
import Blogs from '../modules/Blogs'
import Second from './second'

const styles = {
  
  backgroundColor: "#ffd699",
  height:67, 
  color:"blue900", 
  fontFamily:"Times New Roman"
};
export default class FirstPage extends React.Component  {   

  getMeteorData() {
    return {
      userID:Meteor.userId()
    }
  }
  render() {
    return (
      <div>
      {(!this.data.userID)?
        <div>
      <Home/>
        <Wordict/>
        <h1 style={styles} >Interest Matters </h1>
        <Blogs/>
        <h1 style={styles}> It gives you voice </h1>
        <Second/>
        <h1 style={styles}>We'll Be There For You !</h1>
          
        <Help /></div>
        :
        <div>
        <Wordict/>
        <h1 style={styles}>Interest Matters </h1>
        <Blogs/>
        <h1 style={styles}> It gives you voice </h1>
        <Second/>
        <h1 style={styles}>We'll Be There For You !</h1>
          
        <Help />



      </div>}

   </div>
    )
  }
}
reactMixin(FirstPage.prototype, ReactMeteorData);  