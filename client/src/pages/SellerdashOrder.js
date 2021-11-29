import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/SellerDashNav";
import Dashtop from "../components/Dashtop";

const SellerdashOrder = () => {
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav
          f2='abc'
        />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
          <h3>Add Product</h3>
            <div className='dashtop2'>
            
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