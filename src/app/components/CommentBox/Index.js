import Radium from 'radium';
import React from 'react'
import CommentList from './CommentList';
import CommentForm from './CommentForm';

@Radium
class CommentBox extends React.Component {

	constructor(props){
		super(props);
		this.state = {data : []};
	}

	render(){
		return (
			<div style={styles.base} className="commentBox">
				<h1> Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
			</div>
		);
	}

	componentDidMount(){
		this.fetchComments();
	}

	handleCommentSubmit (comment){

			console.log(comment);
		fetch(this.props.url, {
			method: 'POST' ,
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			  },
			body: JSON.stringify(comment)
		})
		.then((response) => {
			console.log(response)
			this.fetchComments();
			//return response.json()
		})
		.catch((error)=>{
			console.error(error);
		})
	}

	fetchComments () {

		fetch(this.props.url, { method : 'get' })
			.then((data) => {
				return data.json()
			})
			.then((json) => {
				this.setState({ data: json});
			})
			.catch((err) =>{
				console.error(this.props.url, err);

			});
	}

}

var styles = {
	base:{
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: '#c1bfbe',
		backgroundColor: '#ffffff'

	}
};

export default CommentBox;
