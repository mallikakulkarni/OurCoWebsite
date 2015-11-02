/**
 * Created by mallika on 11/1/15.
 */
var mongodb = require('mongodb');
var mongo = mongodb.MongoClient;
var fs = require('fs');

function getFileContent(fileName) {
    //var b = new Buffer('Mallika', "UTF-8");
    var b = fs.readFileSync('../public/images/WhitePaper.pdf');
    return b;
}

var data = getFileContent("abc");

var mongoBinData = new mongodb.Binary(data);

function readFileInternal(cb) {
    var db = mongo.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
        if (err) console.log(err);
        //console.log(db.collection('newConn').insertOne({_id: 'pdf2', data: mongoBinData}));
        var cursor = db.collection('newConn').find({_id: 'pdf2'});
        cursor.each(function (err, doc) {
            if (doc !== null) {
                cb(doc);
            }
        });
    });
}

module.exports = {
    readfile: readFileInternal
}