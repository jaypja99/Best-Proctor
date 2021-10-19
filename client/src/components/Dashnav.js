import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Dashnav.css";

const Dashnav = (props) => {
    return (
        <>

            <div class="sidebars">
                <div class="sidebar1">
                    <div class="logo-details">
                        <i class='bx bxl-product-hunt icon'></i>
                        <div class="logo_name">BestProctor</div>

                    </div>
                    <ul class="nav-list">
                        <li>

                        </li>
                    </ul>
                </div>


                <div class="sidebar">

                    <ul class="nav-list">
                        <div className="nav_selection">
                            <li>

                                <NavLink to="/sellerdashboard" className={props.field}>
                                    <i class='bx bx-grid-alt'></i>
                                    <span class="links_name">Dashboard</span>
                                </NavLink>
                                <span class="tooltip">Dashboard</span>
                            </li>

                            <li>
                                <NavLink to="/sellerdashboard/product" className={props.field1}>
                                    <i class='bx bx-cart-alt'></i>
                                    <span class="links_name">Order</span>
                                </NavLink>
                                <span class="tooltip">Order</span>
                            </li>


                            <li>

                                <NavLink to="/sellerdashboard/product" className={props.field2}>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span class="links_name">Product</span>
                                </NavLink>
                                <span class="tooltip">Product</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props.field3}>
                                    <i class="fas fa-user-clock" ></i>
                                    <span class="links_name">Pending Order</span>
                                </NavLink>
                                <span class="tooltip">Pending Order</span>
                            </li>



                        </div>
                    </ul>
                </div>
            </div>

        </>
    );
}
export default Dashnav;