import React,{useState,useEffect,useMemo} from 'react';
import {useTable } from "react-table";
import Head from 'next/head';
import Link from 'next/link';
import { order, order_history } from '../components/dbcomponents';

function CustomerPreviousOrders(props){
  var [cus_id,Setid] = useState(window.localStorage.getItem('id1'));

  var [orders,setOrders] = useState([]);


  
  const fetchOrders = async() =>{
    const response = await order_history(cus_id);
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
    //Setid(window.localStorage.getItem('id1'));
    fetchOrders();
    //fetchOrders();
  },[]);

  return(
    <div>
    <p>{props.cus_id}</p>
    <table className='center'{...getTableProps()}>
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

function OrderForm(props){
  var [cus_id,Setid] = useState(props.cus_id);
  var [responseId,SetResponseId] = useState(2);
  useEffect(()=>{
      //console.log(cus_id);
      Setid(window.localStorage.getItem('id1'));
      //console.log(cus_id);

  })
  const handleSubmit = async(e) =>{
    e.preventDefault();
    var PackageContents = document.getElementById('PackageContents').value;
    var DeliveryType = document.getElementById('DeliveryType').value;
    var response = await order(PackageContents,DeliveryType,cus_id);
    SetResponseId(response.id);
    if(response.id == 1){
      
      const EMP_ID = JSON.parse(JSON.stringify(response.res));
      window.localStorage.setItem("id3",EMP_ID[0][0].EMPFRATING);
      location.href = "/Ratings";
  }
      //console.log('Response');
      
    }

  if(responseId == -1)
  {
  return(
    <div><form className='container' onSubmit={handleSubmit}>
      <h1>PackageContents</h1>
      <input type="text" id="PackageContents"></input><br/>
      
        <select id="DeliveryType">
          <option value="1">One-Day Delivery</option>
          <option selected value="2">Standard Delivery</option>
          <option value="3">Prime Delivery</option>
        </select><br/>


      <input type="submit"/>

    </form>
    <h1>Sorry , we do not operate on this Path yet</h1>
    </div>

  )
  }else
  {
    return(
      <form className='container' onSubmit={handleSubmit}>
        <h1>PackageContents</h1>
        <input type="text" id="PackageContents"></input><br/>
        
          <select id="DeliveryType">
            <option value="1">One-Day Delivery</option>
            <option selected value="2">Standard Delivery</option>
            <option value="3">Prime Delivery</option>
          </select><br/>
  
  
        <input type="submit"/>
  
      </form>
  
    )

  }


}

function CustomerOrderInsert() {
    const [id,Setid] = useState('');
    //var cusid = id;
  
  
  
    // Perform localStorage action
    useEffect(()=>{
      //console.log(id);
      Setid(window.localStorage.getItem('id1'));
      //console.log(id);

    },[])
    let myComponent;
    if(id!='') {
        myComponent = <CustomerPreviousOrders />
    } else {
        myComponent = null
    }
  
  
  
  
    return (
      <React.Fragment>
        <div>
        <p>
          <Link href="/home">
          <img className='home-img' src='images/home-button.png' alt = 'home'/>
          </Link>
        </p>

        </div>

        <div className='container'>

        </div>
        <div>
        <OrderForm cus_id = {id}/>
        {myComponent}
          

        </div>
        <div>

        </div>
      </React.Fragment>
    );
  };

export default CustomerOrderInsert;