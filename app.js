var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));



app.get('/form', function(req, res) {
	res.render('form');
});

app.get('/form_receiver', function(req, res) {
	var title = req.params.title;
	var description = req.params.description;
	res.send(title + ', ' + description);
});

app.post('/form_receiver', function(req, res) {
	var title = req.body.title;
	var description = req.body.description;
	res.send(title + ', ' + description);
});

app.get('/topic/:id', function(req, res){
    var topics = [
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic/0">Javascript</a><br />
    <a href="/topic/1">Node.js</a><br />
    <a href="/topic/2">Express</a><br /><br />
    ${topics[req.params.id]}
    `
    res.send(output);
});

app.get('/topic/:id/:mode', function(req, res){
	res.send(req.params.id + ', ' + req.params.mode);
});

app.get('/template', function(req, res){
	res.render('temp', {time:Date(), _title:'Jade'});
});

app.get('/', function(req, res) {
	res.send('Hello homepage');
});

app.get('/route', function(req, res) {
	res.send('Hello Router, <img src="/hope02.jpg" />');
});

app.get('/dynamic', function(req, res) {
	var lis = '';
	for (var i=0; i<5; i++) {
		lis += '<li>coding</li>';
	}
	var output = `<!doctype html>
							<html lang="en">
							 <head>
							<meta charset="UTF-8">
							<title>Document</title>
							</head>
							<body>
							Hello, Dynamic!
							<ul>
							${lis}
							</ul>
							</body>
							</html>`;
	res.send(output);
});

app.get('/login', function(req, res) {
    res.send('<h1>Login plaease</h1>');
});

app.listen(3000, function() {
	console.log('Connected 3000 port!');
});
