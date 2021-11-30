import React, { useEffect, useState } from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/ParentDashnav";
import Dashtop from "../components/Dashtop";
import '../components/Cards.css';
import CardItem from '../components/CardIteam';

const Sellerdash = () => {
  const [data, setData] = useState([]);

  const getFeedData = async () => {
    try {

      const res = await fetch("http://localhost:5000/app/feed");
      const ActualData = await res.json();
      console.log(ActualData);
      setData(ActualData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeedData();
  }, []);

  return  (
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
                        <tr>

                          <img className="imagepro"
                            src={curElem1.file_path.slice(13)}
                          />
                          
                        </tr>
                        <div className="namepro">
                        <tr>Title: {curElem1.Title}</tr>
                        <tr>
                          Caption: {curElem1.Caption} 
                        </tr>
                        </div>
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