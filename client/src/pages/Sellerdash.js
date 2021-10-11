import React from "react";
import "../css/Sellerdash.css";
import Dashnav  from "../components/Dashnav";
import Dashtop  from "../components/Dashtop";
const Sellerdash = () => {
  return (
    <div className="Sellerdash">
        <div className='rowC'>
            
        <Dashnav/>
        <div className='rowR'>
        <Dashtop/>
        <div className='rowC'>


        </div>
     
        </div>
        </div>
        
        
        
    </div>
    );
  };
  
  export default Sellerdash;