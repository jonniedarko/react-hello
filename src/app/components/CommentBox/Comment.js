import React from 'react'
import Marked from 'marked'

class Comment extends React.Component {

	render(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={ this.rawMarkup()} />
			</div>
		);
	}
	rawMarkup (){
		var rawMarkup = Marked(this.props.children.toString(), {sanitize: true})
		return { __html: rawMarkup};
	}
}

export default Comment;
