const connection = require('./dbInit.js').connection;


exports.test = function(req, res) {
    var query = 'SELECT * FROM vehicles';
    connection.query(query,function(err,rows,fields){
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log(rows);
            res.send(rows);
        }
    });
    console.log("test");
    res.send("test");
}

exports.closeDB = function(req, res) {
    connection.end();
    console.log("closed");
    res.send("closed");
}

