import React, { useEffect, useState } from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/ParentDashnav";
import Dashtop from "../components/Dashtop";
const Sellerdash = () => {
  const [data, setData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await fetch("http://localhost:5000/app/product");
      const ActualData = await res.json();
      console.log(ActualData);
      setData(ActualData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="Sellerdash">
      <div className='rowC'>
        <Dashnav
          f2="abc" />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
            <div className='dashtop3'>
              <div className='fullback1'>
                  <div className='prodiv1'>
    
                      {data.map((curElem1, ind) => {
                        return (
                          <div className='prodiv' >
                         <td>
                           <tr></tr>
                           <tr>Name: {curElem1.productname}</tr>
                          
                          <tr>
                          Price: {curElem1.productprice} ₹
                          </tr>
                          </td>
                          </div>
                        );
                      })}
                   
                  </div>
       
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Sellerdash;