var Mongo = require('mongodb').MongoClient;
var assert = require('assert');
var objID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

// var insertDoc = function(db, callback) {
//     db.collection('questions').insertOne({
//         "aQuestion": {
//             "anAnswer": "isRight",
//             "anotherAnswer": "isWrong"
//         }
//     }, function(err, result) {
//         assert.equal(err, null);
//         console.log("Inserted a doc into questions collection!");
//         callback();
//     });
// };

var findQuestions = function(db, callback) {
    var cursor = db.collection('questions').find();
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

Mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    findQuestions(db, function() {
        db.close();
    });
});