import React from 'react'
//import TextInput from '../inputs/text.input'
//<TextInput required placeholder="Name" />
class CommentForm extends React.Component {

	render(){
		return (
			<div className="commentForm">
				<form className="commentForm" onSubmit={this.submitComment.bind(this)}>
			        <input type="text" placeholder="Your name" ref ="author"/>
			        <input type="text" placeholder="Say something..." ref="text"/>
			        <input type="submit" value="Post" />
    			</form>
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

export default CommentForm;
