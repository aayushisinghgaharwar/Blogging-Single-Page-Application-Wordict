import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export  const Tasks = new Mongo.Collection('tasks');
 
Meteor.methods({
  'tasks.insert' (text,interest) {
   console.log(text)
 
    Tasks.insert({
    	interest:interest,
      text:text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  
 
    
 
});