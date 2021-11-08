import React, { useState, useRef } from 'react';
import "../components/Seller_addproduct.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Dropzone from 'react-dropzone';

import { API_URL } from '../utils/constants';


const Teacher_addFeeds = () => {
    const [file, setFile] = useState(null); // state for storing actual image
    const [previewSrc, setPreviewSrc] = useState('');
    const [state, setState] = useState({
        Title:'',
        Caption:'',
        Privacy:'',
        Notify: ''
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
                Title,
                Caption,
                Privacy,
                Notify
            } = state;
            if (Title.trim() !== '' && Caption.trim() !== '' && Privacy.trim() !== '' && Notify.trim()) {
                if (file) {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('Title', Title);
                    formData.append('Caption', Caption);
                    formData.append('Privacy', Privacy);
                    formData.append('Notify', Notify);



                    setErrorMsg('');
                    await axios.post(`${API_URL}/feeds`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }

                    });
                    this.setState({
                        Title:'',
                        Caption:'',
                        Privacy:'',
                        Notify: ''
                    })

                }
                else {
                    setErrorMsg('Please select a file to add.');
                }
            } else {
                setErrorMsg('Please enter all the field values.');
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
        <div className="Teacher_addproduct">
            <Form
                onSubmit={handleOnSubmit}
            >
                <h3>Upload New Feeds</h3>
                <div className="Sellerdash">
                    <div className='rowC'>
                        <div>
                            <div class="grid-container">
                                <div>
                                    <label class="formlabel">Title<span class="required">*</span></label>
                                    <input
                                        type="text"
                                        required
                                        name="Title"
                                        value={state.Title}
                                        onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="grid-container">
                                <div>
                                    <label class="formlabel">Caption<span class="required">*</span></label><br />
                                    <textarea
                                        rows="4"
                                        cols="50"
                                        type="text"
                                        required
                                        name="Caption"
                                        value={state.Caption}
                                        onChange={handleInputChange} />
                                </div>
                            </div>
                            <div class="grid-container">
                                <div>
                                    <label >Privacy<span class="required">*</span></label>
                                    <input name="Privacy" id="Privacy" list="standards"
                                        required value={state.Privacy} onChange={handleInputChange}
                                    />
                                    <datalist id="standards">
                                        <option value="Standard First">Standard First</option>
                                        <option value="Standard Second">Standard Second</option>
                                        <option value="Standard Third">Standard Third</option>
                                        <option value="Standard Fourth">Standard Fourth</option>
                                        <option value="Standard Fifth">Standard Fifth</option>
                                        <option value="Standard Sixth">Standard Sixth</option>
                                        <option value="Standard Seventh">Standard Seventh</option>
                                        <option value="Standard Eighth">Standard Eighth</option>
                                        <option value="Standard Ninth">Standard Ninth</option>
                                        <option value="Standard Tenth">Standard Tenth</option>
                                        <option value="Standard Eleventh">Standard Eleventh</option>
                                        <option value="Standard Twelfth">Standard Twelfth</option>
                                        <option value="Everybody in school">Everybody in school</option>
                                    </datalist>
                                </div>

                                <div>
                                    <label >Notify by mail<span class="required">*</span></label>
                                    <div class="redioback">
                                        <div class="fielddiv">

                                            <div class="privatediv">
                                                <label class="container1">Yes
                                                    <input type="radio" name="Notify" required id="Yes" value="Yes" onChange={handleInputChange} />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="govermentdiv">
                                                <label class="container1">No
                                                    <input type="radio" name="Notify" required id="No" value="No" onChange={handleInputChange} />
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="grid-container">
                                <div class="regbtndiv">
                                    <button type="submit" class="registerbtn">
                                        Upload Feed
                                    </button>
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
                </div>

            </Form>
        </div>


    );
};

export default Teacher_addFeeds
