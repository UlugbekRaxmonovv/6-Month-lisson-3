import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import Confetti from 'react-confetti'
import { toast } from 'react-toastify';
import "./Form.css";

const Form = () => {
  const [name, sitNmae] = useState("");
  const [data, sitdata] = useState([]);
  const javob = (e) => {
    e.preventDefault();
    if (!name.trim()){
       alert("Ism yozing")
       return
      };
    const newData ={name}
    sitdata([...data,newData]);
    sitNmae("");
  };
  const go = ()=>{
    toast.error('Malumot kiriting', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
  }
  const handleDelete  = (index)=>{
    const newData =data.filter((_, i)=> i !== index); 
    sitdata(newData)
  }
  let usirs = data?.map((user, index) => (
<ul key={index} >
<div className="logo">
<div className="loga-all">
<li>{user.name}</li>
</div>
<div className="loga-all">
<div className="il">
<MdDelete 
onClick={() => handleDelete(index)}   
className="delet" />
    </div>
  </div>
</div>
</ul>


  ));
  return (
    <div className="box">
      <div className="hammasi">
        <div className="hammasi-row">
        <div className="hammasi-all">
          <form onSubmit={javob}>
        
          <div className="input-all">
            <div className="inputrow">
            <input
              required
              type="name"
              value={name}
              onChange={(e) => sitNmae(e.target.value)}
            />

          
            </div>
            <div className="input-all">
            <button onClick={go}>Add</button>
            </div>
        </div>
          </form>
          {usirs}
 
        </div>
        </div> 
      </div>

    
      <Confetti
      numberOfPieces={300} />
    </div>
  );
};

export default Form;




