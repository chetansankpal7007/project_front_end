import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Customerlist() {
  const [custList, setCustList] = useState([]);
  const URL = 'http://localhost:8090/customer/get-cust-by-emp'
  
  const navigate = useNavigate();
  

  useEffect(()=>{
    getCustList();
  }, []);

  const getCustList = async () => {
    let playload = {
      _id: localStorage.getItem('_id'),
      role: localStorage.getItem('role'),
    }
    let res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(playload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data =await res.json();
    setCustList(data);
  }
  const getDeatils = (id) => {
    console.log(id);
    navigate(`/crm/customer-detais/${id}`)
    
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
          return (<tr  key={cust._id} onClick={()=> {getDeatils(cust._id)}}>
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
