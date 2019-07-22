import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export default class Editor extends Component {
constructor(props) {
	super(props);
	this.state = {
		value: RichTextEditor.createEmptyValue()
	}
	this.onChange = this.onChange.bind(this);
}
onChange (value) {
	debugger
	console.log(this.state.value)
	this.setState({
		value: value
	})
	console.log(this.state.value)
	let editorState = this.state.value.getEditorState();
    let currentContent = editorState.getCurrentContent();
    console.log(currentContent.getPlainText());
}
render () {
	return (
		<div id="editor">
			hello111
			<RichTextEditor
				value = {this.state.value}
				onChange = {this.onChange}
			/>	
		</div>
		)
	}
}
