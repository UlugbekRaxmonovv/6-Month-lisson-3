import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import "./Form.css";

const Form = () => {
  const [name, sitNmae] = useState("");
  const [data, sitdata] = useState([]);
  const javob = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Ism yozing");
    let javob1 = {
      name,
    };
    sitdata([...data, javob1]);
    sitNmae("");
  };
  let usirs = data?.map((u, ins) => (
    <div className="input" key={ins}>
        <div className="input-show">
 <h3>{u.name}</h3>
 </div>
      <div className="input-show">
     <div className="il">
     <MdDelete className="delet" />
            </div>
     </div>
        </div>


  ));
  return (
    <div className="box">
      <div className="hammasi">
        <div className="hammasi-row">
        <div className="hammasi-all">
          <form action="" onSubmit={javob}>
          <div className="input-all">
            <div className="inputrow">
            <input
              required
              type="name"
              value={name}
              onChange={(event) => sitNmae(event.target.value)}
            />

          
            </div>
            <div className="input-all">
            <button>Add</button>
            </div>
        </div>
          </form>
          {usirs}
          {/* <div className="input">
          <div className="input-show">
                
            </div>
            <div className="input-show">

            </div>
          </div> */}
        </div>
        </div>
     
      </div>
    </div>
  );
};

export default Form;
