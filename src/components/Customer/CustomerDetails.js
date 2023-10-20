import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CustomerDetails() {
    const {id} = useParams();
    const URL_GET_DETAILS = 'http://localhost:8090/customer/get-cust-by-id';
    const URL_GET_FOLLOW_UP = 'http://localhost:8090/follow-up/get-follow-up-by-cust';
    const [custDetail, setDetail] = useState();
    const [followUp, setSetFollwUp] = useState();
    const [is_follow_up, setIsFollowUp] = useState(false);

    const [f_type, setFType] = useState(''); 
    const [f_status, setFStatus] = useState(''); 
    const [f_date, setFDate] = useState(''); 
    const [f_desc, setFDesc] = useState(''); 
    const [f_id, setFID] =useState('');

    useEffect(()=>{
        getcustDeatils();
    }, [])

    const getcustDeatils = async () => {
        const playLoad = {
            id: id
        }
        let res = await fetch(URL_GET_DETAILS, {
            method: "POST",
            body: JSON.stringify(playLoad),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          let data =await res.json();
          setDetail(data);
          console.log(data);
          getFollowUp();
    }

    const getFollowUp = async () => {
        const playLoad = {
            c_id: id
        }
        let res = await fetch(URL_GET_FOLLOW_UP, {
            method: "POST",
            body: JSON.stringify(playLoad),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
          let data =await res.json();
          setSetFollwUp(data);
          console.log(data);
    } 

    const addFollwup = () => {
        if(f_id) {
          setFDate('');
          setFDesc('');
          setFType('');
          setFStatus('');
          setFID('');
        } else {
            setIsFollowUp(!is_follow_up);
        }
    }

    const add = async () => {
        let follow_up;
        let URL_FOLLOW_UP;
        if(f_id) {
            URL_FOLLOW_UP = 'http://localhost:8090/follow-up/update-follow-up'
            follow_up = {
                "f_id": (Math.floor(Math.random() * 100) + 1),
                "c_id": id,    
                "f_type": f_type,
                "f_status": f_status,
                "f_desc": f_desc,
                "f_date": f_date,
                "_id" : f_id
            }
        } else {            
         URL_FOLLOW_UP = 'http://localhost:8090/follow-up/add-follow-up'
            follow_up = {
                "f_id": (Math.floor(Math.random() * 100) + 1),
                "c_id": id,    
                "f_type": f_type,
                "f_status": f_status,
                "f_desc": f_desc,
                "f_date": f_date
            }
        }
        
        let res_foll0w_up = await fetch(URL_FOLLOW_UP, {
          method: "POST",
          body: JSON.stringify(follow_up),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        // let data =await res_foll0w_up.json();
        if(res_foll0w_up.status == 200){
          alert("follow up added or updated ");
          setFDate('');
          setFDesc('');
          setFType('');
          setFStatus('');
          setFID('');
          setIsFollowUp(false);
          getFollowUp();
        } else {
          alert("follow up not added or updated");
        }
    }

    const getupdateDetails = (follow_up) => {
        setFDate(follow_up.f_date);
        setFDesc(follow_up.f_desc);
        setFType(follow_up.f_type);
        setFStatus(follow_up.f_status);
        setFID(follow_up._id)
        setIsFollowUp(true);
    }

  return (
    <div>
      <h1>Customer Details</h1>
      {
        custDetail && 
      <div>
            <table id="customers">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Contact No</th>            
                    <th>Email</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Desc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{custDetail.c_name}</td>
                        <td>{custDetail.c_contact_no}</td>
                        <td>{custDetail.c_email}</td>
                        <td>{custDetail.p_name}</td>
                        <td>{custDetail.c_price}</td>
                        <td>{custDetail.cs_date}</td>
                        <td>{custDetail.c_desc}</td>
                    </tr>
                </tbody>
            </table>
            <br/><br/>
            <h3>Follow Up Details <input type='button' value='Add follow up' onClick={addFollwup} /></h3> 
            {
                followUp && 
                            <table id="customers">
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Type</th>            
                                    <th>status</th>
                                    <th>Desc</th>
                                    <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        followUp.map((follow)=> {
                                            return (
                                                <tr>
                                                    <td>{follow.f_date}</td>
                                                    <td>{follow.f_type}</td>
                                                    <td>{follow.f_status}</td>
                                                    <td>{follow.f_desc}</td>
                                                    <td><input type='button' onClick={e => {getupdateDetails(follow)}} value='update'></input></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
            }

            {
                is_follow_up && 
                <div>
                <br/><br/>
                <h3>Follow up Add</h3><br/>
                <label>Type</label>
                <select value={f_type} onChange={e => {setFType(e.target.value)}}>
                    <option value=''>Select type</option>
                    <option value='Call'>Call</option>
                    <option value='sms'>sms</option>
                    <option value='mail'>mail</option>
                    <option value='visite'>visite</option>
                </select><br/>
                {/* {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>    */}
                
                <label>Status</label>
                <select value={f_status} onChange={e => {setFStatus(e.target.value)}}>
                    <option value=''>Select Status</option>
                    <option value='New'>New</option>
                    <option value='pending'>pending</option>
                    <option value='Done'>Done</option>
                    <option value='Cancel'>Cancel</option>
                </select><br/>
                {/* {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>    */}
                
                <label>Description</label>
                <input placeholder='Description' value={f_desc} onChange={e => {setFDesc(e.target.value)}} type='text' id='emp_contact' /><br/>
                {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>  */}

                <label>Date</label>
                <input placeholder='Date' value={f_date} onChange={e => {setFDate(e.target.value)}} type='text' id='emp_contact' /><br/>
                {/* {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>        */}
                <input type='button' value={f_id ? 'Update': 'Add'} onClick={add} />

                </div>
            }
                
            
      </div>
    }
    </div>
  )
}
