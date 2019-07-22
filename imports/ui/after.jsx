import React, { Component } from 'react';
import reactMixin from 'react-mixin';  
import {ReactMeteorData} from 'meteor/react-meteor-data';
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import FirstPage from './firstpage'
import First from './first'
import {Meteor} from 'meteor/meteor'
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Tasks} from '../api/blogs'



export default class After extends  React.Component  {
   constructor(props) {
    super(props);
    this.onChangeText=this.onChangeText.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleInterest=this.handleInterest.bind(this);

    this.state = {

      value: RichTextEditor.createEmptyValue(),
      text:'',
      interest:''
    };
  }
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch(),
      currentUser: Meteor.user(),
      userId:Meteor.userId()?Meteor.userId():'',
    }
  }
  onChangeText (value)  {
    
    this.setState({value: value})
   let editorState=this.state.value.getEditorState();
   let currentContent=editorState.getCurrentContent();
   
   this.setState({text: currentContent.getPlainText()})
    
  };

 handleClick(){
  Meteor.call('tasks.insert', this.state.text,this.state.interest ,function(err,success){
    err?alert(err):alert("success")
  })
alert(this.state.interest)

  this.state = {
    value: RichTextEditor.createEmptyValue()}
    this.renderTasks()
  };
  handleInterest(event)
  {
    this.state.interest=event.target.value;
  }

  

  render() {
    const toolbarConfig = {
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'},
      {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'}
    ]
  };
   
    return (
      <div id="after" className="container">
        <h1>...</h1>

        <div className="row">
        .
        </div>
        
        <div className="row">
        <RichTextEditor
        toolbarConfig={toolbarConfig}
        value={this.state.value}
        onChange={this.onChangeText}
         /></div>
        <div className="row">
        <RadioButtonGroup name="shipSpeed" defaultSelected="travel" onChange={this.handleInterest} style={{display:'flex'}}>
              <RadioButton
              className="col-md-3"
              value="travel"
              label="Travel"
              style={{width:'auto'}}
              />
              <RadioButton
              value="fashion"
              label="fashion"
              className="col-md-3"
              style={{width:'auto'}}
               />
               <RadioButton
              value="food"
              label="food"
              className="col-md-3"
              style={{width:'auto'}}
              />
              
              <RadioButton
              value="photography"
              label="photography"
              className="col-md-3"
              style={{width:'auto'}}
              />
               <RadioButton
              value="technology"
              label="technology"
              className="col-md-3"
              style={{width:'auto'}}
               />
               <RadioButton
              value="bollywood"
              label="bollywood"
              className="col-md-3"
              style={{width:'auto'}}
              />
              
              <RadioButton
              value="politics"
              label="politics"
              className="col-md-3"
              style={{width:'auto'}}
              />
              
             
       
         </RadioButtonGroup>
         </div>

         <div className="row">
         <RaisedButton
            label="Post"
            primary={true}
            onTouchTap={this.handleClick}
          />
          
          </div>
         
          
           </div>


        
      
  )}}
reactMixin(After.prototype, ReactMeteorData);  

    