import React, { useState } from 'react'
import '../Emp/Emp.css'

export default function Customeradd() {
   const [c_id, setCid] = useState('');
   const [c_name, setCname] = useState('');
   const [c_contact, setCconatc] = useState('');
   const [c_email, setCemail] = useState('');
   const [p_id, setPid] = useState('');
   const [p_name, setPName] = useState('');
   const [p_price, setPPrice] = useState('');
   const [c_add_coust, setAddCoust] = useState('');
   const [c_price, setCprice] = useState(''); 
   const [e_id, setEId] = useState('');
   const [e_name, setEname] = useState(''); 
   const [c_desc, setCdesc] = useState(''); 
   const [c_date, setCDate] = useState(''); 
   
 const add = () => {
  
 }



  return (
    <div>
    <form className='empAdd'>
        <label>Cust id</label>
        <input placeholder='Cust id' value={c_id} onChange={e => {setCid(e.target.value)}} type='number' id='empid' />
          {/* {empId?.length == 0 && isAdd ?  <span>Please Enter Emp Id<br/></span> : ''  } <br/> */}
        
        <label>Cust Name</label>
        <input placeholder='Cust Name' value={c_name} onChange={e => {setCname(e.target.value)}} type='text' id='empName' /><br/>
        {/* {name?.length == 0 && isAdd ?  <span>Please Enter Name<br/></span> : ''  } <br/> */}
        
        <label>Cust Email</label>
        <input placeholder='Cust Email' value={c_email} onChange={e => {setCemail(e.target.value)}} type='text' id='emp_email' /><br/>
        {/* {emil?.length == 0 && isAdd ?  <span>Please Enter Email<br/></span> : ''  } <br/> */}
        
        <label>Cust Contact no</label>
        <input placeholder='Cust Contact no' value={c_contact} onChange={e => {setCconatc(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/> */}
        
        <label>Select Product</label>
        <select value={p_id} onChange={e => {setPid(e.target.value)}}>
          <option value=''>Select Role</option>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select><br/>
        {/* {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>  */}

        <label>product Price</label>
        <input placeholder='product Price' value={p_price} onChange={e => {setPPrice(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>      */}
 

        <label>Cust Addinal Coust</label>
        <input placeholder='Cust Addinal Coust' value={c_add_coust} onChange={e => {setAddCoust(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>      */}

        <label>Cust Price</label>
        <input placeholder='Cust Price' value={c_price} onChange={e => {setCprice(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>  */}

         <label>Description</label>
        <input placeholder='Description' value={c_desc} onChange={e => {setCdesc(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>  */}

         <label>Date</label>
        <input placeholder='Date' value={c_date} onChange={e => {setCDate(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>        */}

        <input type='button' value='Add' onClick={add} />
    </form>
  </div>
  )
}
