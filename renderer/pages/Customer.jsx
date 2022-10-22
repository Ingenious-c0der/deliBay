import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {test} from '../components/dbcomponents.js';

function CustomerPreviousOrders(props){
  const [category,setCategory] = useState([]);
  useEffect(()=>{
    const getCategory = async() => {

      const res = await fetch('');
      //JSON response for the api && id is in props
      const getdata = await res.json();
      setCategory(getdata);

    };
    getCategory();

  },[]);

  return(
    <container>
      <table>
        <thead>
          <tr>
            <th>Customer_id</th>
            <th>Package_id</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {category.map((categoryinstance) => (
            <tr key={categoryinstance.cus_id}>
              <td>{categoryinstance.attribute1}</td>
              <td>{categoryinstance.attribute2}</td>
              <td>{categoryinstance.attribute3}</td>
            </tr>
          ))}

          
        </tbody>
      </table>
    </container>

  );
}



function CustomerActiveOrders(props){
  const [category,setCategory] = useState([]);
  useEffect(()=>{
    const getCategory = async() => {
       await test();
       const res =  fetch('');
      //JSON response for the api && id in props
      const getdata = await res.json();
      setCategory(getdata);

    };
    getCategory();

  },[]);

  return(
    <container>
      <table>
        <thead>
          <tr>
            <th>Customer_id</th>
            <th>Package_id</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {category.map((categoryinstance) => (
            <tr key={categoryinstance.cus_id}>
              <td>{categoryinstance.attribute1}</td>
              <td>{categoryinstance.attribute2}</td>
              <td>{categoryinstance.attribute3}</td>
            </tr>
          ))}

          
        </tbody>
      </table>
    </container>

  );
}



function Customer() {
  const [cus_id_from_user,setData] = useState(null);
  const [showActiveOrders,setActiveOrders] = useState(false);
  const [showPreviosOrders,setPreviousOrders] = useState(false);
  function getData(val){
    setData(val.target.value);

  }
  


  return (
    <React.Fragment>
      <Head>
        <title>Customer</title>
      </Head>
      <div>
        <p>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
        <p>
          <Link href="/CustomerOrderInsert">
            <a>Go to Create Order</a>
          </Link>
        </p>
        <label>Customer id:</label>
        <input type="text" value={cus_id_from_user} onChange={getData}></input>
      </div>
      <div>
        <button onClick={() => setActiveOrders(true)}>ActiveOrders</button>
        <button onClick={() => setPreviousOrders(true)}>PreviousOrders</button>
        {showActiveOrders && <CustomerActiveOrders name={cus_id_from_user}/>}
        {showPreviosOrders && <CustomerPreviousOrders name={cus_id_from_user}/>}

      </div>

      

      
    </React.Fragment>

  );
}

export default Customer;