import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/Dashnav";
import Dashtop from "../components/Dashtop";
const Sellerdash = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
            <div className='dashtop1'>
              <div className='graph1'>
              </div>
              <div className='graph1'>
              </div>
              <div className='graph1'>
              </div>
            </div>
            <div className='dashtop1'>
              <div className='graph1'>
              </div>
              <div className='graph2'>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Sellerdash;