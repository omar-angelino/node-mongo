// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/App', (err, db) => {
	if(err){
		return console.log(`Unable to connect to MongoDB Server`);
	}
	console.log('Connected to MongoDB Server');

	//Delete many
	// var filter = {age: 30};
	// db.collection('Users').deleteMany(filter).then( (res) => {
	// 	console.log(res);
	// }).catch( (err) => {
	// 	console.log(err);
	// });

	//Delete one
	// var filter = { age: 27};
	// db.collection('Users').deleteOne(filter).then( (res) => {
	// 	console.log(res);
	// }).catch( (err) => {
	// 	console.log(err);
	// });


	//FindOneAnd Delete
	var filter = { age: 27};
	db.collection('Users').findOneAndDelete(filter).then( (res) => {
		console.log(res);
	}).catch( (err) => {
		console.log(err);
	});



	// db.close();
});