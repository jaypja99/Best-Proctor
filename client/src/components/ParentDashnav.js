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


                <div class="sidebar">

                    <ul class="nav-list">
                        <div className="nav_selection">
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f2}>
                                    <i class="bx bx-grid-alt"></i>
                                    <span class="links_name">Home</span>
                                </NavLink>
                                <span class="tooltip">Home</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f2}>
                                    <i class="fas fa-newspaper"></i>
                                    <span class="links_name">News Feeds</span>
                                </NavLink>
                                <span class="tooltip">News Feeds</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f2}>
                                    <i class="fas fa-shopping-bag"></i>
                                    <span class="links_name">Shopping</span>
                                </NavLink>
                                <span class="tooltip">Shopping</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/product" className={props1.f2}>
                                    <i class="fas fa-heart"></i>
                                    <span class="links_name">Assignment</span>
                                </NavLink>
                                <span class="tooltip">Assignment</span>
                            </li>
                            <li>
                                <NavLink to="/sellerdashboard/pending" className={props1.f3}>
                                    <i class="fas fa-user-clock" ></i>
                                    <span class="links_name">Fees Payment</span>
                                </NavLink>
                                <span class="tooltip">Fees Payment</span>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

        </>
    );
}
export default Dashnav;