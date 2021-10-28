import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/TeacherDashnav";
import Dashtop from "../components/Dashtop";
import Teacher_addAssignment from "../components/Teacher_addAssignment";
import Teacher_addFeeds from "../components/Teacher_addFeeds";
const TeacherdashAssignment = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav 
    
        />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
              <Teacher_addFeeds/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default TeacherdashAssignment;