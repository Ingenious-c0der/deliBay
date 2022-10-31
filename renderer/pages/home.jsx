import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel='stylesheet' href='Styles/loginchoice.css'></link>
      </Head>
      <div className='delibay-header'>
        <img src='images/DelibayLogo.png' alt = 'Logo'/>
        <h1>Delibay</h1>
        <hr></hr>
      </div>
      <div className='container'>
        <Link href='/Admin'><div className='LoginChoice'><img className='LoginChoice-img' src='images/admin.png' alt = 'admin'/><p>Admin</p></div></Link>
        <Link href='/Customer'><div className='LoginChoice'><img className='LoginChoice-img' src='images/Customer.png' alt = 'Customer'/><p>Customer</p></div></Link>
        <Link href='/Employee'><div className='LoginChoice'><img className='LoginChoice-img' src='images/Employees.png' alt = 'Employee'/><p>Employee</p></div></Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
