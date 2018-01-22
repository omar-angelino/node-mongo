// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/App', (err, db) => {
	if(err){
		return console.log(`Unable to connect to MongoDB Server`);
	}
	console.log('Connected to MongoDB Server');

	//findOneAndUpdate
	// var filter = {
	// 	age : 22
	// };
	// var update = {
	// 	$set: {
	// 		age : 50
	// 	}
	// };
	// var options = {
	// 	returnOriginal : false
	// };
	// db.collection('Users').findOneAndUpdate(filter, update, options).then( (res) => { 
	// 	console.log(res);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// }).catch( (err)=> {

	// });
	
	// findOneAndUpdate  Set & Increment
	var filter = {
		age : 50
	};
	var update = {
		$set: {
			name : "Old One"
		},
		$inc: {
			age: 30
		}
	};
	var options = {
		returnOriginal : false
	};
	db.collection('Users').findOneAndUpdate(filter, update, options).then( (res) => { 
		console.log(res);
	}, (err) => {
		console.log('Unable to fetch todos', err);
	}).catch( (err)=> {

	});
	// db.close();
});