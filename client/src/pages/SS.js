import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/ParentDashnav";
import Dashtop from "../components/Dashtop";
import Teacher_addAssignment from "../Notes/SS_notes";
import Subjects from "../components/Subjects";
const TeacherdashAssignment = () => {
  var result = localStorage.getItem("user");
  var object = JSON.parse(result);
  return (
    <div className="Sellerdash">
      <div className='rowC'>
      <Dashnav 
        f4="abc"/>
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
            <Subjects
            f2="cba"/>
            <h6>Standrad: {object.Standard}</h6>
            <Teacher_addAssignment/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default TeacherdashAssignment;