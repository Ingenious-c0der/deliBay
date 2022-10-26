import React,{useState,useEffect} from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Ratings() {

    const [id,Setid] = useState('');
    //var cusid = id;

  
  
  
    // Perform localStorage action
    useEffect(()=>{
      console.log(id);
      Setid(window.localStorage.getItem('id1'));
      console.log(id);

    },[])
    const handleSubmit = (e) =>{
        e.preventDefault();
        var r = document.getElementById('Rating').value;
        

        location.href = "/Customer"
    
        //MySQlfunction insert
    
         
    
      }
    
  return (
    <React.Fragment>
      <Head>
        <title>CutomerRatings</title>
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
