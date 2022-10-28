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
        <p>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
        <label>Employee id:</label>
        <input type="text" value={emp_id_from_user} onChange={getData}></input>
      </div>
      <div>
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