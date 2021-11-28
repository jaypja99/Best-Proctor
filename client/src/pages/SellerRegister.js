import React, { useState, useRef } from 'react';
import "../css/Register.css";
import Top from "../components/Reg_Top"
import Top_Category from "../components/Reg_Category"
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import { API_URL } from '../utils/constants';

const SellerRegister = () => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    sellerName: '',
    shopName: '',
    contactNumber:'',
    addressLine:'',
    city:'',
    email:'',
    username:'',
    password:''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {sellerName,
        shopName,
        contactNumber,
        addressLine,
        city,
        email,
        username,
        password} = state;
      if (shopName.trim() !== '' && sellerName.trim() !== '' && contactNumber.trim() !== '' && addressLine.trim() !== '' && city.trim() !== '' && email.trim() !== '' && username.trim() !== '' && password.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('shopName', shopName);
          formData.append('sellerName', sellerName);
          formData.append('contactNumber', contactNumber);
          formData.append('addressLine', addressLine);
          formData.append('city', city);
          formData.append('email', email);
          formData.append('username', username);
          formData.append('password', password);
          

  
          setErrorMsg('');
          await axios.post(`${API_URL}/Seller`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
            
          });
          this.setState({
            sellerName: '',
            shopName: '',
            contactNumber:'',
            addressLine:'',
            city:'',
            email:'',
            username:'',
            password:''
          })

       
   
        } else {
          alert("Please select a file to add.")
          setErrorMsg('Please select a file to add.');
        }
      } else {
        alert("Please enter all the field values.")
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      alert("Register Successfully")
     
    }

  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png|PNG|ppt)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  return (
    <div className="register">
      <Top />
      <Top_Category
        field='shadows nonActive'
        field1='shadows nonActive'
        field2='shadows active'
      />
      <Form onSubmit={handleOnSubmit}>
        <h3>Seller Information</h3>
        <div class="grid-container">
          <div>
            <label class="formlabel">Shop Name<span class="required">*</span></label>
            <input 
                type="text"
                required 
                name="shopName"
                value={state.shopName}
                onChange={handleInputChange}/>
          </div>
 
          <div>
            <label class="formlabel">Seller Name<span class="required">*</span></label>
            <input 
                type="text"
                required 
                name="sellerName"
                value={state.sellerName}
                onChange={handleInputChange} />
          </div>

          <div>
            <label >Contact Number<span class="required">*</span></label>
            <input 
                type="text" 
                required 
                name="contactNumber"
                value={state.contactNumber}
                onChange={handleInputChange} />
          </div>
          <div>
            <label >Address Line<span class="required">*</span></label>
            <input 
                type="text" 
                required 
                name="addressLine"
                value={state.addressLine}
                onChange={handleInputChange} />
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
              <input 
                  type="text" 
                  required 
                  name="city"
                  value={state.city}
                  onChange={handleInputChange}/>
            </div>
          </div>
          <div>
            <label >Email id<span class="required">*</span></label>
            <input 
              type="text" 
              required 
              name="email"
              value={state.email}
              onChange={handleInputChange}/>
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
            <input type="text" id="lname" name="lname"  />
          </div>
          
          <div className="upload-section">
          <Dropzone onDrop={onDrop} className="abc">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: 'drop-zone abc' })} ref={dropRef}>
                <input {...getInputProps() }  />
                <p>Drag and drop a file OR click here to select a file</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong> {file.name}
                  </div>
                )}
                
                
              </div>
            )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
                <img className="preview-image" src={previewSrc} alt="Preview" />
              </div>
            ) : (
              <div className="preview-message">
                <p>No preview available for this file</p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <p>Image preview will be shown here after selection</p>
            </div>
          )}
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

export default SellerRegister;