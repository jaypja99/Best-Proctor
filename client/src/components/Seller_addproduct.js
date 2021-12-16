import React, { useState, useRef, useEffect } from 'react';
import "../components/Seller_addproduct.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import Dropzone from 'react-dropzone';
import { API_URL } from '../utils/constants';


const Seller_addproduct = () => {


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

    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState('');
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
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
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
                productname,
                schoolname,
                Standard,
                productcat,
                productsubcat,
                productquantity,
                productprice } = state;
            if (productname.trim() !== '' && schoolname.trim() !== '' && Standard.trim() !== '' && productcat.trim() !== '' && productsubcat.trim() !== '' && productquantity.trim() !== '' && productprice.trim() !== '') {

                const formData = new FormData();
                formData.append('file', file);
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
        <div className="Seller_addproduct">
            <Form
                onSubmit={handleOnSubmit}
            >
                <h3>Add Product</h3>
                <div class="grid-container">
                    <div>
                        <div class="grid-container">
                            <div>
                                <label class="formlabel">Product Name<span class="required">*</span></label>
                                <input type="text"
                                    required
                                    name="productname" value={state.productname} onChange={handleInputChange}
                                />
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
                                    <option value="T-shirts">Shoes</option>
                                    <option value="Jackets">Bags</option>
                                    <option value="Accessories">Stationery</option>
                                    <option value="Accessories">Books</option>
                                    <option value="Accessories">Dress</option>
                                    <option value="Accessories">Sports</option>
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
                    </div>
                    <div >

                        <div class="grid-container">
                            <div>
                                <label >Drop your Image<span class="required">*</span></label><br />
                                <Dropzone onDrop={onDrop} className="abc">
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps({ className: 'drop-zone abc' })} ref={dropRef}>
                                            <input {...getInputProps()} />
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
                    </div>

                </div>
                <div class="regbtndiv1">
                    <button type="submit" class="registerbtn">
                        Add Product
                    </button>
                </div>


            </Form>
        </div>


    );
};

export default Seller_addproduct
