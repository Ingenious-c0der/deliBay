import React, { useState,useMemo,useEffect } from 'react';
import {useTable } from "react-table";
import Head from 'next/head';
import Link from 'next/link';
import { adminQuery } from '../components/dbcomponents';

function TableMaker(props){
  const command = props.commands;
  const [orders,setOrders] = useState([]);
  var [responseId, setResponseId] = useState(2);
  var [ responseError, SetResponseError] = useState("");
  const fetchOrders = async() =>{
   /*const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log(err));
  
    if(response){
      const order = response.data;
      setOrders(order);
      
    }*/
    const response = await adminQuery(command);
    console.log('ordess' + response);
    if(response.id == -1 )
    {
      // error 
      console.log(response.error); 
      setResponseId(-1);
      SetResponseError(`${response.error}`);
    }
    else if (response.id == 0)
    {
      // display DDL excecuted successfully 
      console.log('DDL');
      setResponseId(0);
    }
    else if (response.id == 1){
      // display DML excecuted successfully 
      console.log('DML');
      setResponseId(1);
    }

    if(response.id == 1 ){
      console.log(response)
      const orders = JSON.parse(JSON.stringify(response.result));
      setOrders(orders);
      console.log('ordess'+ orders);
      setOrders(orders);
          
    }
    

        
    
    }
    
  

  
  const ordersData = useMemo(() => [...orders],[orders]);
  const ordersColumns = useMemo(
    ()=>
      orders[0]
        ? Object.keys(orders[0])
          .map((key)=>{
            return{Header: key,accessor:key};
          })

        : [],[orders]
  );
  const tableInstance = useTable({columns: ordersColumns,data:ordersData});
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance;
  useEffect(() => {
    fetchOrders();
  },[]);
  if(responseId == 1){
  return(
   
    <div className>
      <table className='center' {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th{...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);

              return (
                <tr{...row.getRowProps()}>
                  {row.cells.map((cell, idx) => (
                    <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  )
          

}
else if (responseId == -1){
  return(
    <div className='centre'>
      <h1>Error in sql , please check your syntax and semantics </h1>
      <h6>{responseError}</h6>
    </div>
  )
}else if(responseId == 0){
  return(
    <div className='centre'>
      <h1>DDL executed successfully</h1>
    </div>
  )
};

}


function CommandBox(){
  const [Command,changeCommand] = useState('');
  const [Show,setShow] = useState(false);
  function getData(val){
    changeCommand(val.target.value);
    setShow(false);

  }

  return(
    
    <div className='container'>
    <h1 >Query:</h1>
    
    <input type="text" value={Command} onChange={getData} id="Command"></input><br/>
    
    
    <button className='buttoncss' onClick={()=>{setShow(true)}}>See Table</button>
    
      

    
    {Show && <TableMaker commands = {Command}/>}
    </div>
    
    
    

  )
}

function Admin() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript)</title>
      </Head>
      <div>
      <Link href="/home">
          <img className='home-img' src='images/home-button.png' alt = 'home'/>
        </Link>
        <CommandBox/>
        
      </div>
    </React.Fragment>
  );
};

export default Admin;