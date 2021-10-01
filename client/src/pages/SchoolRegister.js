import React, { useState, useRef } from 'react';
import "../css/Register.css";
import Top from "../components/Reg_Top"
import Top_Category from "../components/Reg_Category"
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import { API_URL } from '../utils/constants';

const SchoolRegister = () => {


  const [state, setState] = useState({
    schoolName: '',
    schoolType: '',
    contactNumber: '',
    addressLine: '',
    State: '',
    city: '',
    pinCode: '',
    adminName: '',
    adminNumber: '',
    email: '',
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

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
        schoolName,
        schoolType,
        contactNumber,
        addressLine,
        State,
        city,
        pinCode,
        adminName,
        adminNumber,
        email,
        username,
        password } = state;
      if (schoolName.trim() !== '' && schoolType.trim() !== '' &&  contactNumber.trim() !== '' && addressLine.trim() !== '' && State.trim() !== '' && city.trim() !== ''  && pinCode.trim() !== ''  && adminName.trim() !== ''  && adminNumber.trim() !== '' && email.trim() !== '' && username.trim() !== '' && password.trim() !== '') {
       
          const formData = new FormData();
       
          formData.append('schoolType', schoolType);
          formData.append('schoolName', schoolName);
          formData.append('contactNumber', contactNumber);
          formData.append('addressLine', addressLine);
          formData.append('State', State);
          formData.append('city', city);
          formData.append('pinCode', pinCode);
          formData.append('adminName', adminName);
          formData.append('adminNumber', adminNumber);
          formData.append('email', email);
          formData.append('username', username);
          formData.append('password', password);



          setErrorMsg('');
          await axios.post(`${API_URL}/School`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }

          });
          this.setState({
            schoolName: '',
            schoolType: '',
            contactNumber: '',
            addressLine: '',
            State: '',
            city: '',
            pinCode: '',
            adminName: '',
            adminNumber: '',
            email: '',
            username: '',
            password: ''
          })
        
      } 
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }

  };



  return (
    <div className="register">
      <Top />
      <Top_Category
        field='shadows active'
        field1='shadows nonActive'
        field2='shadows nonActive'
      />
      <Form onSubmit={handleOnSubmit}>
        <h3>School Information</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">School Name<span class="required">*</span></label>
            <input 
                type="text"
                required 
                name="schoolName"
                value={state.schoolName}
                onChange={handleInputChange}/>
          </div>
          <div>
            <label >School Type<span class="required">*</span></label>
            <div class="redioback">
              <div class="fielddiv">
                
                <div class="privatediv">
                  <label class="container">Private
                    <input type="radio"  name="schoolType" required  id="Private" value="Private"  onChange={handleInputChange} />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="govermentdiv">
                  <label class="container">Goverment
                    <input type="radio" name="schoolType" required  id="Goverment" value="Goverment"    onChange={handleInputChange}   />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label >Contact Number<span class="required">*</span></label>
            <input type="text" id="contactNumber" name="contactNumber" required value={state.contactNumber}
              onChange={handleInputChange} />
          </div>
          <div>
            <label >Address Line<span class="required">*</span></label>
            <input type="text" id="addressLine" name="addressLine" required value={state.addressLine}
              onChange={handleInputChange} />
          </div>
          <div class="fielddiv">
            <div class="statediv">
              <label >State<span class="required">*</span></label>
              <input name="State" id="State" list="states"   required value={state.State}  onChange={handleInputChange}    />
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
            <label >Pin Code<span class="required">*</span></label>
            <input type="text" id="pinCode" name="pinCode" required value={state.pinCode}
              onChange={handleInputChange} />
          </div>
        </div>

        <h3>Primary Content</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">Admin Name<span class="required">*</span></label>
            <input type="text" id="adminName" name="adminName" required value={state.adminName}
              onChange={handleInputChange} />
          </div>
          <div>
            <label class="formlabel">Admin Contact number<span class="required">*</span></label>
            <input type="text" id="adminNumber" name="adminNumber" required value={state.adminNumber}
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

export default SchoolRegister;
