import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CustomerDetails() {
    const {id} = useParams();
    const URL_GET_DETAILS = 'http://localhost:8090/customer/get-cust-by-id';
    const URL_GET_FOLLOW_UP = 'http://localhost:8090/follow-up/get-follow-up-by-cust';
    const [custDetail, setDetail] = useState();
    const [followUp, setSetFollwUp] = useState();

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
            <h3>Follow Up Details</h3>
            {
                followUp && 
                            <table id="customers">
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Type</th>            
                                    <th>status</th>
                                    <th>Desc</th>
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
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                
            }
      </div>
    }
    </div>
  )
}
