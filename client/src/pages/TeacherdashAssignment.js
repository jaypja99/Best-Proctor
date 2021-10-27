import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/TeacherDashnav";
import Dashtop from "../components/Dashtop";
import Teacher_addAssignment from "../components/Teacher_addAssignment";
const TeacherdashAssignment = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav 
    
        />
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