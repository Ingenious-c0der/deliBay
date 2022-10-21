import React,{useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';



function CustomerActiveOrders(cus_id_from_user){
  return(
    <div>
        <h1>ActiveOrders</h1>
    </div>

  );
}

function CustomerPreviousOrders(cus_id_from_user){
  
  return(
    <div>
        <h1>PreviousOrders</h1>
    </div>

  );
}

function Customer() {
  const [showActiveOrders,setActiveOrders] = useState(false);
  const [showPreviosOrders,setPreviousOrders] = useState(false);
  const [cus_id_from_user,setData] = useState(null);


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
        <label>Customer id:</label>
        <input type="text" value={cus_id_from_user} onChange={(e)=>setData(e.value)}></input>
        



      </div>
      <div>
        <button onClick={() => setActiveOrders(true)}>ActiveOrders</button>
        <button onClick={() => setPreviousOrders(true)}>PreviousOrders</button>
        {showActiveOrders && <CustomerActiveOrders/>}
        {showPreviosOrders && <CustomerPreviousOrders/>}

      </div>

      

      
    </React.Fragment>

  );
}

export default Customer;