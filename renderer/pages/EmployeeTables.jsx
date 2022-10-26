
import React,{useState,useEffect,useMemo} from 'react';
import {useTable } from "react-table";
import Head from 'next/head';
import Link from 'next/link';

function TableMaker(props){
    var command = props.commands;
    const [orders,setOrders] = useState([]);
    const fetchOrders = async() =>{
      /*const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    
      if(response){
        const order = response.data;
        setOrders(order);
        
      }
      */
    };
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
      <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <thead{...column.getHeaderProps()}>
                    {column.render("Header")}
                  </thead>
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


function EmployeeTables() {
    const [id,Setid] = useState('');
    //var cusid = id;
  
  
  
    // Perform localStorage action
    useEffect(()=>{
      console.log(id);
      Setid(window.localStorage.getItem('id1'));
      console.log(id);

    },[])
  
  
  
  
    return (
      <React.Fragment>

        <div>
          <p>
            <Link href="/home">
              <a>Go to home page</a>
            </Link>
            <Link href="/Employee">
              <a>Go to Id page</a>
            </Link>
          </p>
        </div>
        <div>
        <h4>Warehouse</h4>
        <TableMaker/>
        </div>
        <div>
        <h4>Previous Orders</h4>
        <TableMaker/>

        </div>
        <div>
        <h4>Ratings</h4>
        </div>
      </React.Fragment>
    );
  };


export default EmployeeTables;
