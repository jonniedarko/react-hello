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
	console.log('get Comments:', comments);
 res.status(200).json(comments)
});

app.post('/api/comments', (req, res) => {
	console.log('Adding Comments', req.body);
	comments.push({'author' : req.body.author, 'text': req.body.text, id: comments.length+1});
 	res.status(200).end();
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
