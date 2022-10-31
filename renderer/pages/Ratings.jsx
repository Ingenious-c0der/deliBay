import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { rate_Employee } from '../components/dbcomponents';

function Ratings() {

  const [id,Setid] = useState('');
  const [empid,SetEmpId] = useState('');
  //var cusid = id;



  // Perform localStorage action
  useEffect(()=>{
    //console.log(id);
    Setid(window.localStorage.getItem('id2'));
    SetEmpId(window.localStorage.getItem('id3'));
    //console.log(id);

  },[])


  
  
  
    // Perform localStorage action
    const handleSubmit = (e) =>{
        e.preventDefault();
        var r = document.getElementById('Rating').value;
        rate_Employee(empid,r);
        

        location.href = "/Customer"
    
        //MySQlfunction insert
    
         
    
      }
    
  return (
    <React.Fragment>
      <Head>
        <title>Cutomer Ratings</title>
      </Head>

      <div>
      <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <select id="Rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option selected value="5">5</option>
        </select>

      </label>
      <input type="submit"/>

    </form>
      </div>
    </React.Fragment>
  );
};

export default Ratings;
