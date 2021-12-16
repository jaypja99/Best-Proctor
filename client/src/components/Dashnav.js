import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Dashnav.css";

const Dashnav = (props1) => {
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


                <div className="sidebar">
                    <ul className="nav-list">
                        <div className="nav_selection">
                            
                            <li>
                                <NavLink to="/admin/schoolReq" className={props1.f2}>
                                    <i class="fas fa-shopping-cart"></i>
                                    <span class="links_name">School Request</span>
                                </NavLink>
                                <span class="tooltip">School Request    </span>
                            </li>
                            <li>
                                <NavLink to="/adminDash" className={props1.f3}>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span class="links_name">Products</span>
                                </NavLink>
                                <span class="tooltip">Products</span>
                            </li>
                            <li>
                                <NavLink to="/admin/schoolReq" className={props1.f4}>
                                    <i class="fas fa-heart"></i>
                                    <span class="links_name">Pending Orders</span>
                                </NavLink>
                                <span class="tooltip">Pending Orders</span>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

        </>
    );
}
export default Dashnav;