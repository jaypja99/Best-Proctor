import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "../css/Register.css";
const Reg_Category = (props) => {
    return (

        <div className="reg_selection">
            <Link to="/SchoolRegister" style={{ textDecoration: 'none' , color: 'black',fontWeight: 900 }} className={props.field}>
                <div>

                    School Registration

                </div>
            </Link>

            <Link to="/ParentRegister" style={{ textDecoration: 'none' , color: 'black',fontWeight: 900}} className={props.field1}>
                <div >
                    Parent Registration
                </div>

            </Link>

            <Link to="/SellerRegister" style={{ textDecoration: 'none' , color: 'black',fontWeight: 900}} className={props.field2}>
                <div >
                    Seller Registration
                </div>
            </Link>
        </div>


    )
}

export default Reg_Category
