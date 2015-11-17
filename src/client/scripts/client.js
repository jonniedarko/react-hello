/*import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  cart: {
    title: 'My Cart',
    items: [
      {
        title: 'Item 1',
        price: 12
      },
      {
        title: 'Item 2',
        price: 21
      },
      {
        title: 'Item 3',
        price: 33
      }
    ]
  }
};

var app;

Debug.enable('myApp*');

// Create new app and attach to element
app = new App({
  state: state
});

app.renderToDOM(attachElement);
*/

/*var React = require('react');
var ReactDOM = require('react-dom');

class Counter extends React.Component {
	constructor(props){
		super(props);
		this.state = { count: props.initialCount };
	}
	tick(){
		this.setState({count: this.state.count +1 });
	}
	render() {
		//return <div>Hello {this.props.name} !</div>;
		return (
			<div onClick={()=> this.tick()}>
				clicks: { this.state.count }
				</div>
		);

	}
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount:0 };

ReactDOM.render(<Counter />, document.getElementById('app'));*/
//import App from '../../app'
//
//import React from 'react'
//import ReactDOM from 'react-dom';
import App from '../../app';



//ReactDOM.render(<CommentBox />, document.getElementById('app'));
