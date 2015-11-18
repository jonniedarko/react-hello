import path from 'path';
import Express from 'express';
import BodyParser from 'body-parser'

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
var server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});
var comments = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
app.get('/api/comments', (req, res) => {
	//console.log('get Comments:', comments);
	res.status(200).json(comments)
});

app.post('/api/comments', (req, res) => {
	//console.log('Adding Comments', req.body);
	comments.push({'author' : req.body.author, 'text': req.body.text, id: comments.length+1});
	res.status(200).end();
});

app.get('/api/products', (req,res) => {
	var products = [
		{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
		{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
		{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
		{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
		{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
		{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
	];
	res.status(200).json(products)
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
