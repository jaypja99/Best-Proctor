import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/SellerDashNav";
import Dashtop from "../components/Dashtop";

const SellerdashOrder = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav
          f='shadows1 nonActive'
          f1='shadows1 nonActive'
          f2='shadows1 active'
          f3='shadows1 nonActive'
        />
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
          </div>
        </div>
      </div>
    </div>

  );
};

export default SellerdashOrder;