import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/TeacherDashnav";
import Dashtop from "../components/Dashtop";
import Seller_addproduct from "../components/Seller_addproduct";
const TeacherdashAssignment = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav 
    
        />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
            <Seller_addproduct/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default TeacherdashAssignment;