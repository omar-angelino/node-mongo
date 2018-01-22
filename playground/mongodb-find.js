// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/App', (err, db) => {
	if(err){
		return console.log(`Unable to connect to MongoDB Server`);
	}
	console.log('Connected to MongoDB Server');

	//Find with Criteria
	db.collection('Todos').find({ 
		_id: new ObjectID('5a663ec9a124ca9a6ea2ff18')
		}).toArray().then( (docs) => { 
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	}).catch( (err)=> {

	});

	//Find and count all
	db.collection('Todos').find().count().then( (count) => { 
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	}).catch( (err)=> {

	});

	// db.close();
});