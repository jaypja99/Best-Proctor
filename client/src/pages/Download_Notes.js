import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/ParentDashnav";
import Dashtop from "../components/Dashtop";
import Teacher_addAssignment from "../components/Material";
const TeacherdashAssignment = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
      <Dashnav 
        f4="abc"/>
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
            <Teacher_addAssignment/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default TeacherdashAssignment;