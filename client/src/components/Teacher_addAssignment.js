import React, { useState, useRef } from 'react';
import "../components/Seller_addproduct.css";
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Dropzone from 'react-dropzone';

import { API_URL } from '../utils/constants';


const Teacher_addAssignment = () => {
    const [file, setFile] = useState(null); // state for storing actual image
    const [state, setState] = useState({
        Standard: '',
        Subjects: '',
        description: ''
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
                Standard,
                Subjects,
                description
                 } = state;
            if (Subjects.trim() !== '' && Standard.trim()) {
                if (file) {
                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('Standard', Standard);
                    formData.append('Subjects', Subjects);
                    formData.append('description',description);


                    setErrorMsg('');
                    await axios.post(`${API_URL}/assignment`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }

                    });
                    this.setState({
                        Standard: '',
                        Subjects: '',
                        description: ''
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
      
        fileReader.readAsDataURL(uploadedFile);
      
        dropRef.current.style.border = '2px dashed #e9ebeb';
    };

    return (
        <div className="Teacher_addproduct">
            <Form
                onSubmit={handleOnSubmit}
            >
                <h3>Add Assignment</h3>
                <div class="grid-container">

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

                    <div>
                        <label >Subjects<span class="required">*</span></label>
                        <input name="Subjects" id="Subjects" list="cates"
                            required value={state.productcat} onChange={handleInputChange}
                        />
                        <datalist id="cates">
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                            <option value="Gujarati">Gujarati</option>
                            <option value="Maths">Maths</option>
                            <option value="Drawing">Drawing</option>
                            <option value="Computer">Computer</option>
                            <option value="Sunskrit">Sunskrit</option>
                            <option value="Science">Science</option>
                            <option value="Social Science">Social Science</option>
                        </datalist>
                    </div>

                    <div>
            <label >Description<span class="required">*</span></label>
            <input 
                type="text" 
                required 
                name="description"
                value={state.description}
                onChange={handleInputChange} />
          </div>

                </div>

                <div class="grid-container">
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
                </div>


                <div class="regbtndiv">
                    <button type="submit" class="registerbtn">
                        Upload Assignment
                    </button>
                </div>
            </Form>
        </div>


    );
};

export default Teacher_addAssignment