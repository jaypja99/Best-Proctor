import React from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/SellerDashNav";
import Dashtop from "../components/Dashtop";
import Seller_addproduct from "../components/Seller_addproduct";
const Sellerdash = () => {
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
            <Seller_addproduct/>
            </div>
          </div>
        </div>
 </div>

  );
};

export default Sellerdash;