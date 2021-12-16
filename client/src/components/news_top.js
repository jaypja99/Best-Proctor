import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Ann from '../images/ann.png'
import News from '../images/newss.png'

import './FileList.css'

function Subjects(props) {
    return (
        <>
            <div className="menuback">
            </div>
            <div className="catmaterial1">
                <div className="cat">
                    
                    <div className={`catlayout ${ props.f1 }`}>
                    <NavLink to="/parentdashboard/announcement">
                        <center>
                            <img className="image" src={Ann} /></center>
                            </NavLink>
                    </div>
                    <div className={`catlayout ${ props.f2 }`}>
                    <NavLink to="/parentdashboard/feedReq">
                        <center><img className="image" src={News} /></center>
                        </NavLink>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default Subjects;