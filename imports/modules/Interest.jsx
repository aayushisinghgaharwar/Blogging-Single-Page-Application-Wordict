import React, {Component} from 'react'
import reactMixin from 'react-mixin';  
import {ReactMeteorData} from 'meteor/react-meteor-data';
import Task from '../ui/Task'
import {Tasks} from '../api/blogs'
import {Meteor} from 'meteor/meteor'
import Paper from 'material-ui/Paper';


const styleHead = {
  
  width: 1250,
  marginLeft: 100,
  marginTop: 30,
  display: 'inline-block',
};
const styleContent = {
  height:600,
  width: 1250,
  marginLeft: 100,
  marginTop: 30,
  display: 'inline-block',
};
export default class Interest extends React.Component{
	constructor(props) {
    super(props);
    
    this.renderTasks=this.renderTasks.bind(this);

    
  }
  getMeteorData() {
  	if(this.props.params && this.props.params.interest) {
	    return {
	      tasks: Tasks.find({interest:this.props.params.interest}).fetch(),
	    }
	}
	return{
		task:[]
	}

  }
	renderTasks() {
    return this.data.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
    	
      <div style={{backgroundColor: 'orange'}}>
      <Paper style={styleHead} zDepth={4}>
        <h1 style={{textAlign: 'center'}} >{this.props.params.interest}</h1></Paper>
       <div>
       <Paper style={styleContent} zDepth={4}>

        { this.renderTasks()}
     
      </Paper>
       </div>
       </div>
    )}
}
 
reactMixin(Interest.prototype, ReactMeteorData);  
