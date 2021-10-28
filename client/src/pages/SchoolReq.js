import React, { useEffect, useState } from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/Dashnav";
import Dashtop from "../components/Dashtop";
const Sellerdash = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("http://localhost:5000/app/school");
      const ActualData = await res.json();
      console.log(ActualData);
      setData(ActualData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
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
              <div className='graph1'>
                <table className="box">
                  <div>
                    <thead>
                      <tr>
                        <th>School</th>
                        <th>School Type</th>
                        <th>Contact Number</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Admin Name</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((curElem, ind) => {
                        return (
                          <tr>
                            <td>{curElem.schoolName}</td>
                            <td>{curElem.schoolType}</td>
                            <td>{curElem.contactNumber}</td>
                            <td>{curElem.city}</td>
                            <td>{curElem.State}</td>
                            <td>{curElem.adminName}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Sellerdash;