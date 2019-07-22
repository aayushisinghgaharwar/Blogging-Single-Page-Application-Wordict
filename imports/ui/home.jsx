import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory ,IndexLink} from 'react-router';
import Slider from 'material-ui/Slider';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { yellow400, yellow600, blue400, blue600, red400, red600,pink600 ,pink400  } from 'material-ui/styles/colors'
import Help from './help'

export default class Home extends React.Component {
  constructor() {
        super()
        
        this.handleClose = this.handleClose.bind(this);

        this.state = {
    open: true,
    
  }}

  handleClose() {
    this.setState({open: false});
  } 

 render() {
   
    
    return (
      <div id="home">
        
        
<Card>
    <CardMedia>
      <AutoRotatingCarousel
        label="Get started"
        onStart={this.handleClose}
        open={this.state.open}
      >
        <Slide
          media={<img src="https://image.freepik.com/free-vector/travel-background-design_1126-211.jpg" />}
          mediaBackgroundStyle={{ backgroundColor: blue400 }}
          contentStyle={{ backgroundColor: blue600 }}
          title="safar khoobsoorat hai manzil se bhi..."
          
        />
        <Slide
          media={<img src="https://s-media-cache-ak0.pinimg.com/736x/47/31/47/473147850d44924d3441ff553deb8caf.jpg" />}
          mediaBackgroundStyle={{ backgroundColor: red400 }}
          contentStyle={{ backgroundColor: red600 }}
          title="khaoo piyoo aish karo mitraa..."/>
          
        <Slide
          media={<img src="http://www.shunvmall.com/data/out/78/47064871-fashion-wallpaper.png"/>}
          mediaBackgroundStyle={{ backgroundColor: pink400 }}
          contentStyle={{ backgroundColor: pink600 }}
          title="ban thann chali ..."
          
        />
        <Slide
          media={<img src="http://dailydropcap.com/images/W-9.jpg" />}
          mediaBackgroundStyle={{ backgroundColor: yellow400 }}
          contentStyle={{ backgroundColor: yellow600 }}
          title="WORDict"
          subtitle="blog karo..."
          />
      </AutoRotatingCarousel>
    </CardMedia>
  </Card>
      </div>
    )
  }
}

