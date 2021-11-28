import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Dashnav.css";

const SellerDashNav = (props1) => {

    

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
                                <NavLink to="/sellerdashboard" className={props1.f2}>
                                    <i class="bx bx-grid-alt"></i>
                                    <span class="links_name">DashBoard</span>
                                </NavLink>
                                <span class="tooltip">Home</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/order" className={props1.f1}>
                                    <i class='bx bx-cart-alt'></i>
                                    <span class="links_name">Order</span>
                               </NavLink>
                                <span class="tooltip">Orders</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f2}>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span class="links_name">Products</span>
                                </NavLink>
                                <span class="tooltip">Products</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f2}>
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
export default SellerDashNav;