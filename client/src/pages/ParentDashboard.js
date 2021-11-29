import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/ParentDashnav";
import Dashtop from "../components/Dashtop";
import Timetable from '../images/1.png';
const Sellerdash = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
      <Dashnav 
          f1='abc'
        />
        <div className='sideright'>
          <Dashtop />
         
          <div className='fullback'>

          <img className="preview-image" src={Timetable} alt="Preview" />

           
          </div>
        </div>




      </div>

    </div>

  );
};

export default Sellerdash;