import React from "react";
import "./style.css";

const Input = ({type, name, placeholder, onChange, value}) =>{
   return (
       <label className="input-container">
           <input 
            className="input" 
            type={type} 
            name={name} 
            onChange={onChange}
            value={value}
            />
           <span className="placeholder">{placeholder}</span>
           <span className="border"></span>
       </label>
   )
}
export default Input;