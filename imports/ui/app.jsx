import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import First from './first'
import Home from './home'
import AboutUs from './aboutUs'
import FirstPage from './firstpage'
import Wordict from './wordict'
import Help from './help'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import After from './after'
import {Meteor} from 'meteor/meteor'
import Editor from './after1'
import Interest from '../modules/Interest'
import Blogs from '../modules/Blogs'

injectTapEventPlugin();
export default class App extends React.Component  {  
constructor() {
        super()
        
        this.state = {
    userId:(Meteor.userId())?(Meteor.userId()):'',
    

  }} ;
  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
        <Route path="blogs" component={Blogs}/>
      <Route path="blogs/:interest" component={Interest}/>
          <Route path="/" component={First}>
            <IndexRoute component={FirstPage} />
            <Route path="after" component={After}/>
            
            
          </Route>
       </Router>
     </MuiThemeProvider>
    )
  }
}
