import React, { useEffect, useState } from 'react'

export default function Customerlist() {
  const [custList, setCustList] = useState([]);
  const URL = 'http://localhost:8090/customer/get-cust'

  useEffect(()=>{
    getCustList();
  }, []);

  const getCustList = async () => {
    let res = await fetch(URL);
    let data =await res.json();
    setCustList(data);
  }
   


  return (
    <div>
      <h1>Customer  List</h1>
      <table id="customers">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Contact No</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Emp name</th>
          <th>Date</th>
          <th>Desc</th>
        </tr>
      </thead>
        <tbody>
        {
          custList?.map((cust)=>{
          return (<tr  key={cust.p_id}>
            <td>{cust.c_id}</td>
            <td>{cust.c_name}</td>
            <td>{cust.c_contact_no}</td>
            <td>{cust.p_name}</td>
            <td>{cust.c_price}</td>
            <td>{cust.e_name}</td>
            <td>{cust.cs_date}</td>
            <td>{cust.c_desc}</td>
          </tr>)
          })
        }
        </tbody>
        
      </table>
    </div>
  )
}
