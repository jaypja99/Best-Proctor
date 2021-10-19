import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "../css/Register.css";
const Reg_Category = (props) => {
    return (

        <div className="reg_selections">
            <Link to="/" style={{ textDecoration: 'none' , color: 'white',fontWeight: 900 }} className={props.field}>
                <div>

                    Parent

                </div>
            </Link>

            <Link to="/teacherLogin" style={{ textDecoration: 'none' , color: 'white',fontWeight: 900}} className={props.field1}>
                <div >
                    Teacher
                </div>

            </Link>

            <Link to="/sellerLogin" style={{ textDecoration: 'none' , color: 'white',fontWeight: 900}} className={props.field2}>
                <div >
                    Seller
                </div>
            </Link>
        </div>


    )
}

export default Reg_Category
