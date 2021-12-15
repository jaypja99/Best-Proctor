import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/TeacherDashnav";
import Dashtop from "../components/Dashtop";
import TeacherRegisterStudent from "../pages/TeacherRegisterStudent";


const TeacherdashStudent = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav 
          f4="abc"
        />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
              <TeacherRegisterStudent/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default TeacherdashStudent;