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
      <p>{props.name}</p>
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
      <p>{props.name}</p>
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
  const [print,setPrint] = useState(false);
  function getData(val){
    setData(val.target.value);
    console.log(val.target.value);
    setPrint(false);

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
        <button onClick={() => {setPrint(true);}}>Submit</button>
        

        {print && <CustomerActiveOrders name={cus_id_from_user}/>}
        {print && <CustomerPreviousOrders name={cus_id_from_user}/>}

      </div>

      

      
    </React.Fragment>

  );
}

export default Customer;