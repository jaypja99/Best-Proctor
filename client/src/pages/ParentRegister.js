import React from "react";
import "../css/Register.css";
import Top from "../components/Reg_Top"
import Top_Category from "../components/Reg_Category"

const Register = () => {
  return (
    <div className="register">
      <Top />
      <Top_Category
        field='shadows nonActive'
        field1='shadows active'
        field2='shadows nonActive'
      />
      <form>
        <h3>School Information</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">School Name<span class="required">*</span></label>
            <input type="text" id="fname" name="fname" required />
          </div>
          <div>
            <label >School Type<span class="required">*</span></label>
            <div class="redioback">
              <div class="fielddiv">
                <div class="privatediv">
                  <label class="container">Private
                    <input type="radio" checked="checked" name="radio" required />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="govermentdiv">
                  <label class="container">Goverment
                    <input type="radio" name="radio" required />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="fielddiv">
            <div class="statediv">
              <label >Standard<span class="required">*</span></label>
              <input name="standard" id="standard" list="standards" required />
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
              <input name="Age" id="Age" list="Ages" required />
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
            <input type="text" id="lname" name="lname" required />
          </div>
          <div class="fielddiv">
            <div class="statediv">
              <label >State<span class="required">*</span></label>
              <input name="state" id="state" list="states" required />
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
              <input name="citys" id="citys" list="citys" required />
            </div>
          </div>
          <div>
          <label >School Name<span class="required">*</span></label>
              <input name="Age" id="Age" list="Ages" required />
              
          </div>
        </div>

        <h3>Primary Content</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">Student Name<span class="required">*</span></label>
            <input type="text" id="fname" name="fname" required />
          </div>
          <div>
            <label class="formlabel">Contact number<span class="required">*</span></label>
            <input type="text" id="fname" name="fname" required />
          </div>
          <div>
            <label >Email id<span class="required">*</span></label>
            <input type="text" id="lname" name="lname" required />
          </div>
          <div>
            <label >Username for Login<span class="required">*</span></label>
            <input type="text" id="lname" name="lname" required />
          </div>
          <div >
            <label class="formlabel">Password<span class="required">*</span></label>
            <input type="text" id="fname" name="fname" required />
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
      </form>
    </div>
  );
};

export default Register;
