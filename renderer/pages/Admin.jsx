import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function TableMaker(props){
  var command = props.command;
  const [orders,setOrders] = useState([]);
  const fetchOrders = async() =>{
    /*const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => console.log(err));
  
    if(response){
      const order = response.data;
      setOrders(order);
      
    }
    */
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
    fetchOrders();
  },[]);
  return(
    <div>
    <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <thead{...column.getHeaderProps()}>
                  {column.render("Header")}
                </thead>
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
  const cus_id = props.cus_id;
  const handleSubmit = (e) =>{
    e.preventDefault();
    var PackageContents = document.getElementById('PackageContents').value;
    var DeliveryType = document.getElementById('DeliveryType').value;
    var date = new Date().toLocaleDateString();
    //console.log(PackageContents+DeliveryType+date+cus_id);
    location.href = "/Ratings"

    //MySQlfunction insert

     

  }
  return(
    <form onSubmit={handleSubmit}>
      <label>PackageContents:
        <input type="text" id="PackageContents"></input>
      </label>
      <label>
        <input type="text" />

      </label>
      <input type="submit"/>

    </form>

  )
}

function Admin() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-javascript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Admin;
