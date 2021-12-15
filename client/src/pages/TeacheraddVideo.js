import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/TeacherDashnav";
import Dashtop from "../components/Dashtop";
import Teacher_addVideo from "../components/Teacher_addVideo";
const TeacherdashAssignment = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
      <Dashnav 
        f6="abc"/>
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
        <  Teacher_addVideo/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default TeacherdashAssignment;