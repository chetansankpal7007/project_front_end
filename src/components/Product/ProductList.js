import React, { useEffect, useState } from 'react'

export default function ProductList() {

  const [productList, setProducts] = useState([]);
  const URL = 'http://localhost:8090/product/get-product'

  useEffect(()=>{
    getProdList();
  }, []);

  const getProdList = async () => {
    let res = await fetch(URL);
    let data =await res.json();
    setProducts(data);
  }
   


  return (
    <div>
      <h1>Product List</h1>
      <table id="customers">
      <thead>
        <tr>
          <th>Prod Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Disc</th>
          <th>Desc</th>
        </tr>
      </thead>
        <tbody>
        {
          productList?.map((prod)=>{
          return (<tr  key={prod.p_id}>
            <td>{prod.p_id}</td>
            <td>{prod.p_name}</td>
            <td>{prod.p_price}</td>
            <td>{prod.p_disc}</td>
            <td>{prod.p_desc}</td>
          </tr>)
          })
        }
        </tbody>
        
      </table>
    </div>
  )
}
