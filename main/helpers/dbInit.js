var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'delibase'
});
connection.connect(function(err) {
    // in case of error
    //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
    //flush privileges;
    // the above should make it work
    if(err){
        console.log("here 2");
        console.log(err.code);
        console.log(err.fatal);
    }
});

exports.connection = connection;
