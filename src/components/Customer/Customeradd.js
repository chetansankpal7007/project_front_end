import React, { useEffect, useState } from 'react'
import '../Emp/Emp.css'

export default function Customeradd() {
   const [c_id, setCid] = useState('');
   const [c_name, setCname] = useState('');
   const [c_contact, setCconatc] = useState('');
   const [c_email, setCemail] = useState('');
   const [p_id, setPid] = useState('');
   const [p_name, setPName] = useState('');
   const [p_price, setPPrice] = useState('');   
   const [p_disc, setPDisc] = useState('');
   const [c_add_coust, setAddCoust] = useState('');
   const [c_price, setCprice] = useState(''); 
   const [e_id, setEId] = useState('');
   const [e_name, setEname] = useState(''); 
   const [c_desc, setCdesc] = useState(''); 
   const [c_date, setCDate] = useState(''); 
   const [product_list, setPList] = useState([]);
   const [is_follow_up, setfollowup] = useState(false); 


   
  const URL_Product_list = 'http://localhost:8090/product/get-product';
  const URL_ADDAPI = 'http://localhost:8090/customer/add-cust'

  let price = 0;
  let disc = 0;
  let addinalCoust = 0;
   
   useEffect(()=>{
    getProductList();
    setEId(localStorage.getItem('_id'))
    setEname(localStorage.getItem('emp_name'))
   }, []);

  const getProductList = async() =>{
    let res = await fetch(URL_Product_list);
    let data =await res.json();
    console.log(data);
    setPList(data);
   }


   
 const add = async() => {
    const palyload = {
          "c_id": c_id,
          "c_name": c_name,
          "c_contact_no": c_contact ,
          "c_email": c_email,
          "p_id": p_id,
          "p_name": p_name,
          "c_price": c_price,
          "e_id": e_id,
          "e_name": e_name, 
          "c_desc": c_desc,
          "cs_date": c_date 
    }

  let res = await fetch(URL_ADDAPI, {
    method: "POST",
    body: JSON.stringify(palyload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if(res.status == 200){
    alert("Customer added");
  } else {
    alert("Customer not added");
  }

 }

  const getProductPrice = (e) =>{
    console.log(e.target.value);
    setPid(e.target.value);
    let SelectProd;
    for(let i =0; i< product_list.length; i++) {
      let prod = product_list[i]
      if(prod._id==e.target.value) {
        SelectProd = prod
      }
    }
    price = SelectProd.p_price != '' ? SelectProd.p_price : 0;
    disc = SelectProd.p_disc != '' ? SelectProd.p_disc : 0;
    setPName(SelectProd.p_name);
    setPid(SelectProd._id);
    setPDisc(SelectProd.p_disc);
    setPPrice(SelectProd.p_price);
    console.log(p_disc, p_price);
    calculatePrice();
  }

  const calculatePrice = () => {
    let totalPrice = (parseInt(price) - parseInt(disc)) + parseInt(addinalCoust);
    setCprice(totalPrice);
  }

  const changeAdditinalCoust = (e) => {
    setAddCoust(e.target.value);
    price = p_price != '' ? p_price : 0;
    disc = p_disc != '' ? p_disc : 0;
    addinalCoust = e.target.value != '' ? e.target.value : 0; 
    calculatePrice();
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
        <select onChange={e => {getProductPrice(e)}}>
          <option value=''>Select Product</option>
         { product_list.map((prod)=> {
          return (
            <option value={prod._id}>{prod.p_name}</option>
          )
         }) }
        </select><br/>
        {/* {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>  */}

        <label>Product Price</label>
        <input placeholder='Product Price' value={p_price} onChange={e => {setPPrice(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>      */}
 
        <label>Product Discount</label>
        <input placeholder='Product Discount' value={p_disc} onChange={e => {setPDisc(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>      */}
 

        <label>Cust Addinal Coust</label>
        <input placeholder='Cust Addinal Coust' value={c_add_coust} onChange={e => {changeAdditinalCoust(e)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>      */}

        <label>Cust Price</label>
        <input placeholder='Cust Price' value={c_price} onChange={e => {setCprice(e.target.value)}} type='number' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>  */}

         <label>Description</label>
        <input placeholder='Description' value={c_desc} onChange={e => {setCdesc(e.target.value)}} type='text' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>  */}

         <label>Date</label>
        <input placeholder='Date' value={c_date} onChange={e => {setCDate(e.target.value)}} type='text' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>        */}
        
        
        <label>Add Follow up</label><input value={is_follow_up} onClick={e=> {setfollowup(!is_follow_up)}} type='checkbox'></input>
       
       {
        is_follow_up && 
        <div>
          <br/><br/>
          <h3>Follow up Add</h3><br/>
          <label>Type</label>
          <select>
            <option value=''>Select type</option>
            <option value='user'>Call</option>
            <option value='admin'>sms</option>
            <option value='admin'>mail</option>
            <option value='admin'>visite</option>
          </select><br/>
          {/* {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>    */}
        
          <label>Status</label>
          <select>
            <option value=''>Select Status</option>
            <option value='user'>New</option>
            <option value='admin'>pending</option>
            <option value='admin'>Done</option>
            <option value='admin'>Cancel</option>
          </select><br/>
          {/* {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>    */}
        
          <label>Description</label>
        <input placeholder='Description' value={c_desc} onChange={e => {setCdesc(e.target.value)}} type='text' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>  */}

        <label>Date</label>
        <input placeholder='Date' value={c_date} onChange={e => {setCDate(e.target.value)}} type='text' id='emp_contact' /><br/>
        {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>        */}
        
        
        </div>
        }
        
        
        
        
        <input type='button' value='Add' onClick={add} />
    </form>
  </div>
  )
}
