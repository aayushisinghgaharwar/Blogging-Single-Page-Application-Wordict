import React, { Component } from 'react';
import reactMixin from 'react-mixin';  
import {ReactMeteorData} from 'meteor/react-meteor-data';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory ,IndexLink} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {Meteor} from 'meteor/meteor'
import attachValidationToFormsy from 'formsy-react-validations';
import TextField from 'material-ui/TextField';
import {Tasks} from '../api/blogs'
import After from './after'

export default class First extends React.Component {



 constructor() {
        super()
        this.handleSignupOpen = this.handleSignupOpen.bind(this);
        this.handleSignupUser = this.handleSignupUser.bind(this);
        this.handleSignupClose = this.handleSignupClose.bind(this);
        this.handleLoginOpen = this.handleLoginOpen.bind(this);
        this.handleLoginClose = this.handleLoginClose.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
        this.handleSignupEmail = this.handleSignupEmail.bind(this);
        this.handleSignupPassword = this.handleSignupPassword.bind(this);
        this.handleLoginEmail = this.handleLoginEmail.bind(this);
        this.handleLoginPassword = this.handleLoginPassword.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.checkEmailIsValid  = this.checkEmailIsValid .bind(this);
        this.checkPasswordIsValid  = this.checkPasswordIsValid .bind(this);
        this.postHandle = this.postHandle.bind(this);

        this.state = {
    open: false,
    open1: false,
    signupEmail: '',
    signupPassword:'',
    loginEmail: '',
    loginPassword:'',
    signupUser:'',
    

  }}
  
getMeteorData() {
    return {
     // currentUser: Meteor.user().username?Meteor.user().username:'',
      userId:Meteor.userId()?Meteor.userId():'',
    };

  };

  checkEmailIsValid (email,username) {

  if(email.length > 1 && email.indexOf('@') > -1 && username!='')
  return true;
  else
  return false;
}

checkPasswordIsValid(pwd) {
 if(pwd.length > 3 && pwd.length < 11 )
  return true;
  else
  return false;
}

  handleSignupOpen () {
    this.setState({open: true});
  };

  handleSignupClose () {
    this.setState({open: false});
  };
  handleLoginOpen () {
    this.setState({open1: true});        

  };

  handleLoginClose () {
    this.setState({open1: false});
  };
  handleSignupUser (event) {
    this.setState({
      signupUser:event.target.value ,
    })
  };
  handleSignupEmail(event){
    this.setState({
      signupEmail:event.target.value ,
        

    })
  };
    handleSignupPassword(event){
    this.setState({
      signupPassword:event.target.value ,
      

    })}

  handleLoginEmail(event){
    this.setState({
      loginEmail:event.target.value ,
      

    })
  }
    handleLoginPassword(event){
    this.setState({
      loginPassword:event.target.value ,
     
    })

  }
    handleSignupSubmit(event) {

      if(this.checkEmailIsValid(this.state.signupEmail,this.state.signupUser)&&this.checkPasswordIsValid(this.state.signupPassword))
   {event.preventDefault()
      Accounts.createUser({
        username:this.state.signupUser,
        email: this.state.signupEmail,
        password:this.state.signupPassword,
      })}
      else
        {alert("invalid username or email or password ")}

      
        this.setState({open: false});
  };

  handleLoginSubmit(event){
    event.preventDefault();
      Meteor.loginWithPassword(this.state.loginEmail, this.state.loginPassword, function(err,success){
      if (err) {  
        console.log('error => ', err)
      }
      else {
      alert("logged in")
       window.location = '/' 
      }
  });
      this.setState({open1: false});

  };
  handleLogout(event){
        event.preventDefault();
        Meteor.logout();
        window.location='/'
        console.log('logging out')

  };
  
 postHandle(){
        window.open('/after')

  };
  render() {
    const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleSignupClose}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleSignupSubmit}
          />,
        ];
        const actions1 = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleLoginClose}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleLoginSubmit}
          />,
        ];
      return (
      <div>
        <AppBar className="appbar" title={<FlatButton ><a href="#home" >WORDict</a></FlatButton>}
        style={{position: "fixed"}}
        showMenuIconButton={false}
        iconElementRight={<div>
                            
                          {(this.data.userId)?
                            <div>
                          <FlatButton key={1} label="PostBlog" onClick={this.postHandle}/>
                          <FlatButton key={2} label="Logout" onTouchTap={this.handleLogout}/>
                          </div>
                          :
                          <div>
                          <FlatButton key={2} ><a href="#help" >Help</a></FlatButton>
                          <FlatButton key={3} label="SignUp" onTouchTap={this.handleSignupOpen}/>
                          <FlatButton key={4} label="Login" onTouchTap={this.handleLoginOpen}/>
                          </div>
                          }
                          
                          </div>}
                          >
        
         
        </AppBar>
    
          <Dialog
            title="SignUp"
            actions={actions}
            model={false}
            open={this.state.open}
            
          ><Formsy.Form>
           <TextField
              hintText="Username"
              floatingLabelText="username"
               fullWidth={true}
               type="text" value={this.state.signupUser}  onChange={this.handleSignupUser}/>
            <br/>
           <TextField
              hintText="Email-Id"
              floatingLabelText="email-id"
               fullWidth={true}
               type="email" value={this.state.signupEmail} onChange={this.handleSignupEmail}/>
            <br/>
            <TextField
              hintText="Password"
               fullWidth={true}
              errorText="atleast 3 character and not more than 10"
              floatingLabelText="password"
               type="password" value={this.state.signupPassword} onChange={this.handleSignupPassword}  />
            <br/>
            </Formsy.Form>
          </Dialog>
          <Dialog
            title="Login"
            actions={actions1}
            model={false}
            open={this.state.open1}
            
          >
            <TextField
              hintText="Email-Id"
              floatingLabelText="email-id"
               fullWidth={true}
               type="email" value={this.state.loginEmail} validations="isEmail" onChange={this.handleLoginEmail} />
            <br/>
            <TextField
              hintText="Password"
              floatingLabelText="password"
               fullWidth={true}
               type="password" value={this.state.loginPassword} onChange={this.handleLoginPassword} />
            <br/>
            
          </Dialog>

          <div className="content">
          {this.props.children}
          </div>

        </div>
    )
  
    
        
  }
} 

reactMixin(First.prototype, ReactMeteorData);  
