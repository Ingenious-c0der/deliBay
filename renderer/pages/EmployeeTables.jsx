
import React,{useState,useEffect,useMemo} from 'react';
import {useTable } from "react-table";
import Head from 'next/head';
import Link from 'next/link';
import { employee_rating_view, orders_involved, vehicle_view, warehouse_view } from '../components/dbcomponents';
function ShowRating(){
  var [emp_id,Setid] = useState(window.localStorage.getItem('id2'));
    const [orders,setOrders] = useState([]);
    const fetchOrders = async() =>{
      const response = await employee_rating_view(emp_id);
      if(response){
        
        const orders = JSON.parse(JSON.stringify(response));
        setOrders(orders);
        console.log('Response'+orders);
        
      }
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

function Warehouse(){
    var [emp_id,Setid] = useState(window.localStorage.getItem('id2'));
    const [orders,setOrders] = useState([]);
    const fetchOrders = async() =>{
      const response = await warehouse_view(emp_id);
      if(response){
        
        const orders = JSON.parse(JSON.stringify(response));
        setOrders(orders);
        console.log('Response'+orders);
        
      }
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
 function VehicleView(){
    var [emp_id,Setid] = useState(window.localStorage.getItem('id2'));
    const [orders,setOrders] = useState([]);
    const fetchOrders = async() =>{
      const response = await vehicle_view(emp_id);
      if(response){
        
        const orders = JSON.parse(JSON.stringify(response));
        setOrders(orders);
        console.log('Response'+orders);
        
      }
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


  function OrdersView(){
    var [emp_id,Setid] = useState(window.localStorage.getItem('id2'));
    const [orders,setOrders] = useState([]);
    const fetchOrders = async() =>{
      const response = await orders_involved(emp_id);
      if(response){
        
        const orders = JSON.parse(JSON.stringify(response));
        setOrders(orders);
        console.log('Response'+orders);
        
      }
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
      <table className='fixed_headers' {...getTableProps()}>
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



function EmployeeTables() {
    const [id,Setid] = useState('');
    //var cusid = id;
  
  
  
    // Perform localStorage action
    useEffect(()=>{
      //console.log(id);
      Setid(window.localStorage.getItem('id2'));
      //console.log(id);

    },[])
    let Orders_View;
    let Warehouse_View;
    let Vehicle_View;
    let Rating_View;

    if(id!='') {
        Orders_View = <OrdersView/>
        Vehicle_View = <VehicleView/>
        Warehouse_View = <Warehouse/>
        Rating_View = <ShowRating/>
    } else {
        Orders_View = null
        Vehicle_View = null
        Warehouse_View = null
        Rating_View = null
    }
    
  
  
  
  
    return (
      <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel='stylesheet' href='Styles/loginchoice.css'></link>
      </Head>

        <div>
          <p>
            
              <Link href="/home">
              <a>Go to home page</a>
              </Link>
            
          </p>  
          <p>
              <Link href="/Employee">
              <a>Go to Id page</a>
              </Link>
          </p>
        </div>
        <div className='outer-wrapper'>
          <div className='table-wrapper'>
          <h2>Warehouse</h2>
          {Warehouse_View}
          </div>
        </div>
        <div className='outer-wrapper'>
          <div className='table-wrapper'>
          <h2>Previous Orders</h2>
          {Orders_View}
          </div>

        </div>
        <div className='outer-wrapper'>
          <div className='table-wrapper'>
          <h2>Vehicles</h2>
          {Vehicle_View}

          </div>
        </div>
        <div className='outer-wrapper'>
          <div className='table-wrapper'>
          <h2>Rating</h2>
          {Rating_View}
          
          </div>

        </div>

      </React.Fragment>
    );
  };


export default EmployeeTables;
