import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Maths from '../images/Maths.png'
import Computer from '../images/Computer.png'
import SS from '../images/SS.png'
import S from '../images/Science.png'
import Hindi from '../images/Hindi.png'
import English from '../images/English.png'
import './FileList.css'

function Subjects(props) {
    return (
        <>
            <div className="menuback">
            </div>
            <div className="catmaterial">
                <div className="cat">
                    
                    <div className={`catlayout ${ props.f1 }`}>
                    <NavLink to="/parentdashboard/material">
                        <center>
                       
                            <img className="image" src={Maths} /></center>
                            </NavLink>
                    </div>
                    <div className={`catlayout ${ props.f2 }`}>
                    <NavLink to="/parentdashboard/material_ss">
                        <center><img className="image" src={SS} /></center>
                        </NavLink>
                    </div>
                    <div className={`catlayout ${ props.f3 }`}>
                    <NavLink to="/parentdashboard/material_science">
                        <center><img className="image" src={S} /></center>
                        </NavLink>
                    </div>
                    <div className={`catlayout ${ props.f4 }`}>
                    <NavLink to="/parentdashboard/material_computer">
                        <center><img className="image" src={Computer} /></center>
                        </NavLink>
                    </div>
                    <div className={`catlayout ${ props.f5 }`}>
                    <NavLink to="/parentdashboard/material_hindi">
                        <center><img className="image" src={Hindi} /></center>
                        </NavLink>
                    </div>
                    <div className={`catlayout ${ props.f6 }`}>
                    <NavLink to="/parentdashboard/material_english">
                        <center><img className="image" src={English} /></center>
                        </NavLink>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Subjects;