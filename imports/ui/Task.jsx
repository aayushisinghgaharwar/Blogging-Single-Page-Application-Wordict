import React, { Component, PropTypes } from 'react';
import {Meteor} from 'meteor/meteor'
import {Tasks} from '../api/blogs'
import After from './after'

 
// Task component - represents a single todo item
export default class Task extends React.Component {
  
  render() {
    
    return (
           <div className="container">
     
        <span className="text">
        <strong><h3>{this.props.task.username}</h3></strong> {this.props.task.text}</span> <br/>
        --------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
    );
  }
}