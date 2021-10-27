import React, { useState, useRef } from 'react';
import "../components/Seller_addproduct.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import { API_URL } from '../utils/constants';


const Teacher_addAssignment = () => {

    const [state, setState] = useState({
        productname: '',
        schoolname: '',
        Standard: '',
        productcat: '',
        productsubcat: '',
        productquantity: '',
        productprice: ''
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
                productname,
                schoolname,
                Standard,
                productcat,
                productsubcat,
                productquantity,
                productprice } = state;
            if (productname.trim() !== '' && schoolname.trim() !== '' && Standard.trim() !== '' && productcat.trim() !== '' && productsubcat.trim() !== '' && productquantity.trim() !== '' && productprice.trim() !== '') {

                const formData = new FormData();

                formData.append('productname', productname);
                formData.append('schoolname', schoolname);
                formData.append('Standard', Standard);
                formData.append('productcat', productcat);
                formData.append('productsubcat', productsubcat);
                formData.append('productquantity', productquantity);
                formData.append('productprice', productprice);



                setErrorMsg('');
                await axios.post(`${API_URL}/Product`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }

                });
                this.setState({
                    productname: '',
                    schoolname: '',
                    Standard: '',
                    productcat: '',
                    productsubcat: '',
                    productquantity: '',
                    productprice: ''
                })

            }
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }

    };



    return (
        <div className="Seller_addproduct">
            <Form
            onSubmit={handleOnSubmit}
            >
                <h3>Add Product</h3>
                <div class="grid-container">
                    <div>
                        <label class="formlabel">Product Name<span class="required">*</span></label>
                        <input type="text"
                            required
                            name="productname" value={state.productname} onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label >School name<span class="required">*</span></label>
                        <input name="schoolname" id="schoolname" list="names"
                            required value={state.schoolname} onChange={handleInputChange}
                        />
                        <datalist id="names">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                        </datalist>
                    </div>
                    <div>
                        <label >Standard<span class="required">*</span></label>
                        <input name="Standard" id="Standard" list="standards"
                            required value={state.Standard} onChange={handleInputChange}
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
                </div>

                <div class="grid-container">

                    <div>
                        <label >Product Category<span class="required">*</span></label>
                        <input name="productcat" id="productcat" list="cates"
                            required value={state.productcat} onChange={handleInputChange}
                        />
                        <datalist id="cates">
                            <option value="T-shirts">T-shirts</option>
                            <option value="Jackets">Jackets</option>
                            <option value="Accessories">Accessories</option>
                        </datalist>
                    </div>


                    <div>
                        <label >Product Sub Category<span class="required">*</span></label>
                        <input name="productsubcat" id="productsubcat" list="subcates"
                            required value={state.productsubcat} onChange={handleInputChange}
                        />
                        <datalist id="subcates">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                        </datalist>
                    </div>
                </div>

                <div class="grid-container">
                    <div>
                        <label class="formlabel">Product Quantity<span class="required">*</span></label>
                        <input type="text"
                            required
                            name="productquantity"
                            value={state.productquantity} onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label class="formlabel">Product Price<span class="required">*</span></label>
                        <input type="text"
                            required
                            name="productprice"
                            value={state.productprice} onChange={handleInputChange}
                        />
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

export default Teacher_addAssignment
