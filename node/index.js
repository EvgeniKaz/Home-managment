var express = require('express')
var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient;
var bodyParser = require('body-parser');
var clientsRouter = require('./routes/TodoRouter')
var cors = require('cors');

var connectionPromise = MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }); // it's a promise
var db;

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(clientsRouter);

app.get('/', (req, res) => {
	res.redirect('/todos')
})

connectionPromise.then(connection => {
	db = connection.db('Home')	
	app.set('db', db)		
	app.listen('3000', () => {
		console.log('listen')
	})
}).catch(err => console.error(err));