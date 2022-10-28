import React, { useState,useMemo,useEffect } from 'react';
import {useTable } from "react-table";
import Head from 'next/head';
import Link from 'next/link';
import { adminQuery } from '../components/dbcomponents';

function TableMaker(props){
  const command = props.commands;
  const [orders,setOrders] = useState([]);
  const fetchOrders = async() =>{
   /*const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log(err));
  
    if(response){
      const order = response.data;
      setOrders(order);
      
    }*/
    const response = await adminQuery(command);
    console.log('ordess'+response);

    if(response){
      console.log(response)
      const orders = JSON.parse(JSON.stringify(response));
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
  return(
    <div>
    <p></p>
      <table {...getTableProps()}>
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

};


function CommandBox(){
  const [Command,changeCommand] = useState('');
  const [Show,setShow] = useState(false);
  function getData(val){
    changeCommand(val.target.value);
    setShow(false);

  }

  return(
    <div>
    
    <label>Query:
        <input type="text" value={Command} onChange={getData} id="Command"></input>
    </label>
      <button onClick={()=>{setShow(true)}}>See Table</button>
      

    
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
        <p>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
        <CommandBox/>
        
      </div>
    </React.Fragment>
  );
};

export default Admin;
