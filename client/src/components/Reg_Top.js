import React from 'react'
import { NavLink } from 'react-router-dom';
const Reg_Top = () => {
    return (
        <div className="top">
            <div className="logo">
                Logo
            </div>
            Registration
            <div class="btnfield btn float_right">
                <div class="btn-layer"></div>
                <NavLink to="/"><input type="submit" value="Login" /></NavLink>
            </div>
        </div>
    )
}

export default Reg_Top
