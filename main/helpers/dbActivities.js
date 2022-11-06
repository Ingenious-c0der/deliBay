const connect = require('./dbInit.js').connection;


// exports.test = function() {
//     var query = 'SELECT * FROM vehicles';
//    connection.query(query,function(err,rows,fields){
//         if(err){
//             console.log(err);
//             console.log("Error");
//         } else {
//             console.log(rows);
//             console.log("Success");
//             return rows; 
//         }
//     });
//     console.log("test");
//     return "test"; 
// }

// exports.closeDB = async function() {
//     connection.end();
//     console.log("closed");
//     return "closed";
// }
exports.order = async function(args) {
    //args[0] : package_contents
    //args[1] : delivery_type
    //args[2] : customer_region
    
    var query = 'call OrderItem("'+args.package_contents+'",'+args.delivery_type+','+args.customer_region+')';
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    //console.log(rows[0]);
    if(rows[0][0].hasOwnProperty("Error Message"))
    {
        console.log("here");
        return {id:-1};
    }
    else
    {
        return {"res":rows, "id": 1};
    }

}

exports.order_history = async function(cus_id)
{
  var query = 'select order_date,package_contents,delivery_price from Orders where order_id in (select order_id from Order_History where cus_id = '+cus_id+');';
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    console.log(rows);
    return rows;
}

exports.rate_Employee = async function(args)
{
    var query = 'call rate_Employee('+args.rating+','+args.emp_id+');';
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    console.log(rows);
    return rows;
}

exports.warehouse_view = async function(emp_id)
{
    var query = 'select * from Packages where warehouse_id in (select warehouse_id from employees where '+ emp_id +' = emp_id)';
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    console.log(rows);
    return rows;
}

exports.orders_involved = async function(emp_id)
{
    var query = ' select * from Orders where order_id in (select order_id from Involved where emp_id = '+emp_id+');'
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    console.log(rows);
    return rows;
}

exports.vehicle_view = async function(emp_id)
{
    var query = 'select * from Vehicles NATURAL JOIN Vehicle_Type where emp_id =  '+emp_id+';';
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    console.log(rows);
    return rows;
}


// also returns emp name, total handles, employee type -> further info to fill the UI up 
exports.employee_rating_view = async function(emp_id)
{

    var query = ' select first_name, last_name, warehouse_id,cumulative_rating/total_handles as RATING, total_handles , Work_type from employees NATURAL JOIN Work_type where emp_id = '+emp_id+';';
    const conn = await connect(); 
    const [rows, fields] = await conn.execute(query);
    console.log(rows);
    return rows;
}

exports.adminQuery = async function(query)
{

    try{
        const conn = await connect(); 
        const [rows, fields] = await conn.execute(query);
        console.log(rows);
        return rows;
    }
    catch(err){
        console.log(err);
        return {"Error":err}; 
    }
   
    
  // return {"result":rows, "isArray":Array.isArray(rows)};
 
}
