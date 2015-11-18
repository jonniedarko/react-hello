import React from 'react'
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
import FilterTable from './components/FilterTable';

//ReactDOM.render(<CommentBox url="/api/comments" />, document.getElementById('app'));
ReactDOM.render(<FilterTable url="/api/products" />, document.getElementById('productTable'));
