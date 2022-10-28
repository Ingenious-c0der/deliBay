var mysql = require('mysql2/promise');


const options ={
    host: 'localhost',
    user: 'root',
    password: '**************',
    database: 'delibase'
};
// connection.connect(function(err) {
//     // in case of error
//     //ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
//     //flush privileges;
//     // the above should make it work
//     if(err){
//         console.log("here 2");
//         console.log(err.code);
//         console.log(err.fatal);
//     }
// });
export async function connection () {
    return await mysql.createConnection(options);
}


