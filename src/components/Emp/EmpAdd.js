import React from 'react'
import './Emp.css'

export default function EmpAdd() {
  return (
    <div>
      <form className='empAdd'>
          <label>Emp id</label>
          <input placeholder='Emp Id' type='number' id='empid' /><br/>
          <label>Emp Name</label>
          <input placeholder='Emp name' type='text' id='empName' /><br/>
          <label>Emp Email</label>
          <input placeholder='Emp Email' type='text' id='emp_email' /><br/>
          <label>Emp Contact no</label>
          <input placeholder='mp Contact no' type='number' id='emp_contact' /><br/>
          <label>Emp Password</label>
          <input placeholder='Emp Password' type='text' id='password' /><br/>
          <label>Emp Role</label>
          <select>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select><br/>
          <input type='button' value='Add'/>
      </form>
    </div>
  )
}
