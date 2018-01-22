// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/App', (err, db) => {
	if(err){
		return console.log(`Unable to connect to MongoDB Server`);
	}
	console.log('Connected to MongoDB Server');

	//Insert One 
	var user = {name: 'Armando',age: 30};
	db.collection('Users').insertOne(user, (err, res) => {
		if(err){
			return console.log('Unable to insert todo', err);
		}
		console.log(res.ops[0]._id.getTimestamp());
	});

	//Insert Many
	var users = [
	{name: 'Omar',age: 30},
	{name: 'Armando',age: 30},
	{name: 'Carlos',age: 27},
	{name: 'Samanta',age: 27},
	{name: 'Ramon',age: 31},
	{name: 'Phillip',age: 22},
	{name: 'Amanda',age: 24},
	{name: 'Mary',age: 30}
	];

	db.collection('Users').insertMany(users , (err, res) => {
		if(err){
			return console.log('Unable to insert into todos', err);
		}
		console.log(JSON.stringify(res.ops, undefined, 2));
	});

	db.close();
});