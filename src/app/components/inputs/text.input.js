import React from 'react'

class TextInput extends React.Component {

	render(){
		//{this.props.required ? 'required': ''}
		return (
			<div className="group">
			    <input type="text" required="false"/>
			    <span className="highlight"></span>
			    <span className="bar"></span>
			    <label>{this.props.placeholder}</label>
			</div>
		);
	}

	submitComment(e){
		e.preventDefault();

		console.log(this);
		this.props.onCommentSubmit({author: this.refs.author.value, text: this.refs.text.value})
		this.refs.author.value = '';
		this.refs.text.value = '';
	}
}

export default TextInput;
