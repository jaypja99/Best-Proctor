import React, { useState, useRef, useEffect } from 'react';
import "../css/Register.css";
import Top from "../components/Reg_Top"
import Top_Category from "../components/Reg_Category"
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import { API_URL } from '../utils/constants';

const ParentRegister = () => {

  const [data, setData] = useState([]);

  const getProductData = async () => {
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
    getProductData();
  }, []);

  const [state, setState] = useState({
    studentName: '',
    schoolType: '',
    Standard: '',
    Age: '',
    addressLine: '',
    State: '',
    city: '',
    schoolName: '',
    parentName: '',
    email: '',
    contactNumber: '',
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');

  const dropRef = useRef();

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };


  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const {
        studentName,
        schoolType,
        Standard,
        Age,
        addressLine,
        State,
        city,
        schoolName,
        parentName,
        email,
        contactNumber,
        username,
        password } = state;
      if (studentName.trim() !== '' && schoolType.trim() !== '' && Standard.trim() !== '' && Age.trim() !== '' && addressLine.trim() !== '' && State.trim() !== '' && city.trim() !== '' && schoolName.trim() !== '' && parentName.trim() !== '' && email.trim() !== '' && contactNumber.trim() !== '' && username.trim() !== '' && password.trim() !== '') {

        const formData = new FormData();

        formData.append('schoolType', schoolType);
        formData.append('studentName', studentName);
        formData.append('Standard', Standard);
        formData.append('Age', Age);
        formData.append('addressLine', addressLine);
        formData.append('State', State);
        formData.append('city', city);
        formData.append('schoolName', schoolName);
        formData.append('parentName', parentName);
        formData.append('contactNumber', contactNumber);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);



        setErrorMsg('');
        await axios.post(`${API_URL}/Parent`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

        });
        this.setState({
          studentName: '',
          schoolType: '',
          Standard: '',
          Age: '',
          addressLine: '',
          State: '',
          city: '',
          schoolName: '',
          parentName: '',
          email: '',
          contactNumber: '',
          username: '',
          password: ''
        })

      }
      else {
        alert("Please enter all the field values.")
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
     
     
    }

  };




  return (
    <div className="register">
      <Top />
      <Top_Category
        field='shadows nonActive'
        field1='shadows active'
        field2='shadows nonActive'
      />
      <Form onSubmit={handleOnSubmit}>
        <h3>School Information</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">Student Name<span class="required">*</span></label>
            <input type="text"
              required
              name="studentName"
              value={state.studentName}
              onChange={handleInputChange} />
          </div>
          <div>
            <label >School Type<span class="required">*</span></label>
            <div class="redioback">
              <div class="fielddiv">

                <div class="privatediv">
                  <label class="container1">Private
                    <input type="radio" name="schoolType" required id="Private" value="Private" onChange={handleInputChange} />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="govermentdiv">
                  <label class="container1">Goverment
                    <input type="radio" name="schoolType" required id="Goverment" value="Goverment" onChange={handleInputChange} />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="fielddiv">
            <div class="statediv">
              <label >Standard<span class="required">*</span></label>
              <input name="Standard" id="Standard" list="standards" required value={state.Standard} onChange={handleInputChange} />
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
            <div class="citydiv">
              <label >Age<span class="required">*</span></label>
              <input name="Age" id="Age" list="Ages" required value={state.Age} onChange={handleInputChange} />
              <datalist id="Ages">
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </datalist>
            </div>
          </div>
          <div>
            <label >Address Line<span class="required">*</span></label>
            <input type="text" id="addressLine" name="addressLine" required value={state.addressLine} onChange={handleInputChange} />
          </div>
          <div class="fielddiv">
            <div class="statediv">
              <label >State<span class="required">*</span></label>
              <input name="State" id="State" list="states" required value={state.State} onChange={handleInputChange} />
              <datalist id="states">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </datalist>
            </div>
            <div class="citydiv">
              <label >City<span class="required">*</span></label>
              <input
                type="text"
                required
                name="city"
                value={state.city}
                onChange={handleInputChange} />
            </div>
          </div>
          
          <div>
             <label >School Name<span class="required">*</span></label>
            <input name="schoolName" id="schoolName" list="schoolNames" required value={state.schoolName} onChange={handleInputChange} />
           
            <datalist id="schoolNames">
            {data.map((curElem, ind) => {
                        return (
            <option value={curElem.schoolName}>{curElem.schoolName}</option>
            );
          })}
            </datalist>
            
          
          </div>
           
        </div>
        

        <h3>Primary Content</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">Parent Name<span class="required">*</span></label>
            <input
              type="text"
              required
              name="parentName"
              value={state.parentName}
              onChange={handleInputChange} />
          </div>
          <div>
            <label class="formlabel">Contact number<span class="required">*</span></label>
            <input
              type="number"
              required
              name="contactNumber"
              value={state.contactNumber}
              onChange={handleInputChange} />
          </div>
          <div>
            <label >Email id<span class="required">*</span></label>
            <input
              type="text"
              required
              name="email"
              value={state.email}
              onChange={handleInputChange} />
          </div>
          <div>
            <label >Username for Login<span class="required">*</span></label>
            <input
              type="text"
              required
              name="username"
              value={state.username}
              onChange={handleInputChange} />
          </div>
          <div >
            <label class="formlabel">Password<span class="required">*</span></label>
            <input
              type="text"
              required
              name="password"
              value={state.password}
              onChange={handleInputChange} />
          </div>
          <div>
            <label >Confirm Password<span class="required">*</span></label>
            <input type="text" id="lname" name="lname" required />
          </div>
        </div>


        <div class="regbtndiv">
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ParentRegister;
