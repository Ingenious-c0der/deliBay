import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function CustomerOrderInsert() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript)</title>
      </Head>
      <div>
        <p>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
        
      </div>
    </React.Fragment>
  );
};

export default CustomerOrderInsert;