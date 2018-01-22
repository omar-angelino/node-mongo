const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/App', (err, db) => {
	if(err){
		return console.log(`Unable to connect to MongoDB Server`);
	}
	console.log('Connected to MongoDB Server');
	db.close();
});