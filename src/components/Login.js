import React, { useEffect, useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [username, setuserName] =useState ();
    const [password, setPassword] =useState ();
    const LOGINURL = 'http://localhost:8090/emp/emp-login';
    const navigate = useNavigate();   
    
    useEffect(()=>{
        if(localStorage.getItem("_id") && localStorage.getItem("emp_id")) {
            navigate('/crm')
          }
    }, [])

    const checkUserLogin = async() => {
        let playload = {
            email: username,
            password: password
        }
        let res = await fetch(LOGINURL, {
            method: "POST",
            body: JSON.stringify(playload),
            headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
        })
        if(res.status == 200) {
            let user = await res.json();
            console.log(user[0]._id)
            localStorage.setItem('_id', user[0]._id);
            localStorage.setItem('emp_id', user[0].emp_id);
            localStorage.setItem('emp_name', user[0].emp_name);
            alert("login");            
            navigate('/crm');
        } else {
            alert("Please check user name and password");
        }
    }


  return (
        <div className='login'>
            <form  >
                <label htmlFor="uname">User Name</label>
                <input type="text" value={username} onChange={e => {setuserName(e.target.value)}} id="uname" name="firstname" placeholder="Your User Name.."/>

                <label htmlFor="pass">password</label>
                <input type="text" value={password} id="lname" onChange={e=> {setPassword(e.target.value)}} name="pass" placeholder="Your password.."/>
            
                <input type="button" value="Submit" onClick={checkUserLogin} />
            </form>
    </div>
  )
}
