import React,{useState,useEffect,useMemo} from 'react';
import Head from 'next/head';
import Link from 'next/link';


function Employee() {
  const [emp_id_from_user,setData] = useState(null);
  //const [print,setPrint] = useState(false);
  function getData(val){
    setData(val.target.value);
    console.log(val.target.value);

  }
  


  return (
    <React.Fragment>
      <Head>
        <title>Employee</title>
      </Head>
      <div>
      <Link href="/home">
          <img className='home-img' src='images/home-button.png' alt = 'home'/>
        </Link>

      </div>

      <div className='container'>

        <h1>Employee id:</h1>
        <input type="text" value={emp_id_from_user} onChange={getData}></input><br/>
        <button onClick={() => {
          window.localStorage.setItem("id2",emp_id_from_user);
          //setPrint(true);

          location.href = "/EmployeeTables";
          }}>Submit</button>
      </div>


      

      
    </React.Fragment>

  );
};

export default Employee;