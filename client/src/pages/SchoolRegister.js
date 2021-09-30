import React, { Component } from "react";
import axios from "axios";
import "../css/Register.css";
import Top from "../components/Reg_Top"
import Top_Category from "../components/Reg_Category"
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { API_URL } from '../utils/constants';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      posts: [],
    };
    this.changeSchoolName = this.changeSchoolName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeSchoolName(event) {
    this.setState({
      schoolName: event.target.value,
    });
  }

  
  onSubmit(event) {
    event.preventDefault();
    const registered = {
      schoolName: this.state.schoolName,

    };
    axios
      .post("http://localhost:5000/app/project_co", registered)
      .then((response) => console.log(response.data));

    this.setState({
      schoolName: "",

      posts: [],
    });
  }

  render(){
    return (
      <div className="register">
        <Top />
        <Top_Category
          field='shadows active'
          field1='shadows nonActive'
          field2='shadows nonActive'
        />
  
        <form onSubmit={this.onSubmit}>
          <h3>School Information</h3>
          <div class="grid-container">
          
            <div>
              <label  class="formlabel">School Name<span class="required">*</span></label>
              <input type="text" id="fname" name="fname" onChange={this.changeSchoolName}
                value={this.state.schoolName}/>
            </div>
             <div>
              <label >School Type<span class="required">*</span></label>
              <div class="redioback">
                <div class="fielddiv">
                  <div>
                    <label class="container">Private
                      <input type="radio" checked="checked" name="radio" required/>
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label class="container">Goverment
                      <input type="radio" name="radio" required />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label >Contact Number<span class="required">*</span></label>
              <input type="text" id="lname" name="lname" required onChange={this.changeContactNumber}
                value={this.state.contactNumber}/>
            </div>
            <div>
              <label >Address Line<span class="required">*</span></label>
              <input type="text" id="lname" name="lname" required onChange={this.changeAddressLine}
                value={this.state.addressLine}/>
            </div>
            <div class="fielddiv">
              <div>
                <label >State<span class="required">*</span></label>
                <input name="state" id="state" list="states" required 
                />
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
              <div>
                <label >City<span class="required">*</span></label>
                <input name="citys" id="citys" list="citys" required onChange={this.changecity}
                value={this.state.city}/>
              </div>
            </div>
            <div>
              <label >Pin Code<span class="required">*</span></label>
              <input type="text" id="lname" name="lname" required onChange={this.changepincode}
                value={this.state.pincode}/>
            </div>
          </div>
  
          <h3>Primary Content</h3>
          <div class="grid-container">
            <div>
              <label  class="formlabel">Admin Name<span class="required">*</span></label>
              <input type="text" id="fname" name="fname" required onChange={this.changeadminName}
                value={this.state.adminName}/>
            </div>
            <div>
              <label  class="formlabel">Contact number<span class="required">*</span></label>
              <input type="text" id="fname" name="fname" required onChange={this.changeadminContact}
                value={this.state.adminContact}/>
            </div>
            <div>
              <label >Email id<span class="required">*</span></label>
              <input type="text" id="lname" name="lname" required onChange={this.changeEmail}
                value={this.state.email}/>
            </div>
            <div>
              <label >Username for Login<span class="required">*</span></label>
              <input type="text" id="lname" name="lname" required onChange={this.changeusername}
                value={this.state.username}/>
            </div>
            <div >
              <label  class="formlabel">Password<span class="required">*</span></label>
              <input type="text" id="fname" name="fname" required onChange={this.changepassword}
                value={this.state.password}/>
            </div>
            <div>
              <label >Confirm Password<span class="required">*</span></label>
              <input type="text" id="lname" name="lname" required />
            </div>
          </div>
  
  
          <div class="regbtndiv">
          <input
                type="submit"
                className="registerbtn"
                value="Submit"
              />
          </div>
        </form>
      </div>
    );
  }
  
}

export default Register;
