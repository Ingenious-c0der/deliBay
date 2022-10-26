import React,{useState,useEffect,useMemo} from 'react';
import {useTable } from "react-table";
import Head from 'next/head';
import Link from 'next/link';
import { order, order_history } from '../components/dbcomponents';

function CustomerPreviousOrders(props){
  const cus_id = props.cus_id;
  const [orders,setOrders] = useState([]);
  const fetchOrders = async() =>{
    console.log(cus_id);
    const response = await order_history(cus_id);
    if(response){
      
      const order = response.data;
      setOrders(order);
      console.log(response);
      
    }

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
    <p>{cus_id}</p>
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

function OrderForm(props){
  const cus_id = props.cus_id;
  const handleSubmit = (e) =>{
    e.preventDefault();
    var PackageContents = document.getElementById('PackageContents').value;
    var DeliveryType = document.getElementById('DeliveryType').value;
    //var date = new Date().toLocaleDateString();
    //console.log(PackageContents+DeliveryType+date+cus_id);
    order(PackageContents,DeliveryType,cus_id);
    //location.href = "/Ratings"

    //MySQlfunction insert

     

  }
  return(
    <form onSubmit={handleSubmit}>
      <label>PackageContents:
        <input type="text" id="PackageContents"></input>
      </label>
      <label>
        <select id="DeliveryType">
          <option value="1">One-Day Delivery</option>
          <option selected value="2">Standard Delivery</option>
          <option value="3">Prime Delivery</option>
        </select>

      </label>
      <input type="submit"/>

    </form>

  )


}

function CustomerOrderInsert() {
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
            {id}
            <Link href="/home">
              <a>Go to home page</a>
            </Link>
            <Link href="/CustomerId">
              <a>Go to Id page</a>
            </Link>
          </p>
        </div>
        <div>
        <OrderForm cus_id = {id}/>
        <CustomerPreviousOrders cus_id = {id}/>
          

        </div>
        <div>

        </div>
      </React.Fragment>
    );
  };

export default CustomerOrderInsert;