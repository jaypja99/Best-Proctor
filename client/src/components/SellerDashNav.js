import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Dashnav.css";

const SellerDashNav = (props1) => {


    var result = localStorage.getItem("user");
    var object = JSON.parse(result);

    return (
        <>

            <div class="sidebars">
                <div class="sidebar1">
                    <div class="logo-details">
                        <i class='bx bxl-product-hunt icon'></i>
                        <div class="logo_name">BestProctor</div>

                    </div>
                    <div class="name_account">
                              
                                <h6>Name: {object.sellerName}</h6>
                                <h6>Shop name: {object.shopName}</h6>
                                
                     </div>
                  
                </div>


                <div class="sidebar">

                    <ul class="nav-list">
                        <div className="nav_selection">
                           
                            <li>
                                <NavLink to="/sellerdashboard/order" className={props1.f2}>
                                    <i class='bx bx-cart-alt'></i>
                                    <span class="links_name">Order</span>
                                </NavLink>
                                <span class="tooltip">Orders</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f3}>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span class="links_name">Products</span>
                                </NavLink>
                                <span class="tooltip">Products</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f4}>
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