import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {

	render(){
		return (
			<div className="commentList">
				{ this.getComments()}
			</div>

		);
	}
	getComments(){
		console.log('this.props', this.props);
		
		return this.props.data.map(function (comment){
			return (
				<Comment author={comment.author} key={comment.id}>
				{comment.text}
				</Comment>
			);
		});
	}
}

export default CommentList;
