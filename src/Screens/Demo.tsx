
import React from "react";
import { useStore } from "../stores/Index";

export const Demo:React.FC=  ()=>{
const {AuthStore}=useStore();
    const handleChange=()=>{
        AuthStore.printFunctionDetails();
    }
    return (
       <div>
           <div style={{marginLeft:'20px' , marginTop:'50px'}}>
                <label>Enter username</label>
                <input></input>
                <label>passwords</label>
                <input></input>
                <button onClick={handleChange}>submit</button>
           </div>
       </div>
    );
};