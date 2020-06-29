
var mongodb = require('mongodb');

var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/testdb_new';

mongoClient.connect(url, (err,client) =>{
    const db = client.db('testdb_new');
    
    db.collection('products').find({},{price:0}).toArray((err,docs) =>{
        console.log(docs);
    })
})