import React, { useEffect, useState } from "react";
import "../css/Sellerdash.css";
import Dashnav from "../components/TeacherDashnav";
import Dashtop from "../components/Dashtop";
const Sellerdash = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    Standard: ''
});
  const getCovidData = async () => {
    try {
      const res = await fetch("http://localhost:5000/app/parent");
      const ActualData = await res.json();
      console.log(ActualData);
      setData(ActualData.filter((x) => x.Standard=== "Second"));
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
          f3="abc" />
        <div className='sideright'>
          <Dashtop />
          <div className='dash'>
          <div>
                        <label >Standard<span class="required">*</span></label>
                        <input name="Standard" id="Standard" list="standards"
                            required value={state.Standard} 
                        />
                        <datalist id="standards">
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                            <option value="Fourth">Fourth</option>
                            <option value="Fifth">Fifth</option>
                            <option value="Sixth">Sixth</option>
                            <option value="Seventh">Seventh</option>
                            <option value="Eighth">Eighth</option>
                            <option value="Ninth">Ninth</option>
                            <option value="Tenth">Tenth</option>
                            <option value="Eleventh">Eleventh</option>
                            <option value="Twelfth">Twelfth</option>
                        </datalist>
                    </div>
            <div className='dashtop3'>
              <div className='fullback'>
                <table className="box">
                  <div>
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Standrad</th>
                        <th>Age</th>
                        <th>Contact Number</th>
                        <th>State</th>
                        <th>Parent Name</th>
                        <th>Grant</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((curElem, ind) => {
                        return (
                          <tr>
                            <td>{curElem.studentName}</td>
                            <td>{curElem.Standard}</td>
                            <td>{curElem.Age}</td>
                            <td>{curElem.contactNumber}</td>
                            <td>{curElem.State}</td>
                            <td>{curElem.parentName}</td>
                            <td><button class="btn_grant">Yes</button>
                            <button class="btn_grant_no">No</button></td>
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