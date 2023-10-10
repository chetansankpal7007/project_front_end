import React, { useState } from 'react'
import './product.css'

export default function Productadd() {
  const ADDAPI = "http://localhost:8090/product/add-product";

  const [proid, setproId] = useState('');
  const [proname, setproName] = useState('');
  const [proprice, setproPrice] = useState('');
  const [prodiscount, setproDiscount] = useState('');
  const [prodesc, setproDesc] = useState('');
  const [isadd, setisAdd] = useState(false);

  const addPro = async () => {
    setisAdd(true);
    if(proid.length> 0 && proname.length>0 && proprice.length>0 && prodiscount.length>0 && prodesc.length>0){
    let playLoad = {
      p_id: proid,
      p_name: proname,
      p_price: proprice,
      p_disc: prodiscount,
      p_desc: prodesc,
    };
    console.log(playLoad);
    let res = await fetch(ADDAPI, {
      method: "POST",
      body: JSON.stringify(playLoad),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // let resJson = await res.json();
    // alert("Employee add");
    // console.log(resJson);
    if(res.status == 200){
      alert("Product added")
      setproId("");
    setproName("");
    setproPrice("");
    setproDiscount("");
    setproDesc("");
    setisAdd(false);
    }else {
      alert("Wait");
    }

    

  } else {        
    alert("Please enter data");
  }
}
  return (
    <div className="container">
      <div className="text">Product Add</div>
      <form>
        <div className="form-row">
          <div className="input-data">
            <input
              type="number"
              onChange={(e) => setproId(e.target.value)}
              value={proid}
              required
            />
            {proid?.length == 0 && isadd ?  <span>Please Enter Emp Id<br/></span> : ''  } <br/>
          
            <div className="underline"></div>
            <label htmlFor="">Pro Id</label>
          </div>
          <div className="input-data">
            <input
              type="text"
              onChange={(e) => setproName(e.target.value)}
              value={proname}
              required
            />
            {proname?.length == 0 && isadd ?  <span>Please Enter Emp Name<br/></span> : ''  } <br/>
          
            <div className="underline"></div>
            <label htmlFor="">Product Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              onChange={(e) => setproDiscount(e.target.value)}
              value={prodiscount}
              required
            />
            {prodiscount?.length == 0 && isadd ?  <span>Please Enter Emp Email<br/></span> : ''  } <br/>
          
            <div className="underline"></div>
            <label htmlFor="">Product Discount</label>
          </div>
          <div className="input-data">
            <input
              type="number"
              onChange={(e) => setproPrice(e.target.value)}
              value={proprice}
              required
            />
            {proprice?.length == 0 && isadd ?  <span>Please Enter Emp Contact<br/></span> : ''  } <br/>
          
            <div className="underline"></div>
            <label htmlFor="">Product Price</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              onChange={(e) => setproDesc(e.target.value)}
              value={prodesc}
              required
            />
            {prodesc?.length == 0 && isadd ?  <span>Please Enter Emp Password<br/></span> : ''  } <br/>
          
            <div className="underline"></div>
            <label htmlFor="">Product Desc</label>
          </div>
        </div>
      
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="button" onClick={addPro} value="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}
