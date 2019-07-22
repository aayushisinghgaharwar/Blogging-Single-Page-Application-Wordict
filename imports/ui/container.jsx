 import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor'
import { Tasks } from '../api/blogs';


 class Foo extends React.Component {
}

const Container =  createContainer(() => {return {
    tasks: Tasks.find({}).fetch(),
  };
},Foo);

export {Foo, Container};
		