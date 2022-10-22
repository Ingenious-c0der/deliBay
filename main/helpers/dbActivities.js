const connection = require('./dbInit.js').connection;


exports.test = function(req, res) {
    var query = 'SELECT * FROM vehicles';
   connection.query(query,function(err,rows,fields){
        if(err){
            console.log(err);
            console.log("Error");
        } else {
            console.log(rows);
            console.log("Success");
            return rows; 
        }
    });
    console.log("test");
    return "test"; 
}

exports.closeDB = function(req, res) {
    connection.end();
    console.log("closed");
    return "closed";
}

