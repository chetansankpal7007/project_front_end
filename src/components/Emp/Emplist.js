import React, { useEffect, useState } from 'react'
import './Emp.css'

export default function Emplist() {

  const [empList, setlist] = useState([]);
  const URL = 'http://localhost:8090/emp/get-emp'

  useEffect(()=>{
    getEmpList();
  }, []);

  const getEmpList = async () => {
    let res = await fetch(URL);
    let data =await res.json();
    setlist(data);
    console.log(data.length);
  }
   


  return (
    <div>
      <h1>Emp List</h1>
      <table id="customers">
      <thead>
        <tr>
          <th>Emp Id</th>
          <th>Name</th>
          <th>Email Id</th>
          <th>Contact no</th>
          <th>Role</th>
        </tr>
      </thead>
        <tbody>
        {
          empList?.map((emp)=>{
          return (<tr  key={emp.emp_id}>
            <td>{emp.emp_id}</td>
            <td>{emp.emp_name}</td>
            <td>{emp.emp_email}</td>
            <td>{emp.emp_contact}</td>
            <td>{emp.emp_role}</td>
          </tr>)
          })
        }
        </tbody>
        
      </table>
    </div>
  )
}
