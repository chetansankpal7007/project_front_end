import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();  
  const logout = () => {
    localStorage.clear();
    alert("logout");
    navigate('/')

  }

  return (
    <div>
      <div className="navbar">
        <div className="dropdown">
            <button className="dropbtn">Emp 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <a href="#">Add EMP</a>
            <a href="#">EMP List</a>
            </div>
        </div> 
        <div className="dropdown">
            <button className="dropbtn">Product 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <a href="#">Add Product</a>
            <a href="#">List Product</a>
            </div>
        </div> 
        <div className="dropdown">
            <button className="dropbtn">Customer 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <a href="#">Add Customer</a>
            <a href="#">List Customer</a>
            </div>
        </div>
        <a onClick={logout}>Logout</a>
      </div>
    </div>
  )
}
