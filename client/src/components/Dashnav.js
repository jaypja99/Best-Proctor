import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Dashnav.css";

function Dashnav() {
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
                        <li>

                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-grid-alt'></i>
                                <span class="links_name">Dashboard</span>
                            </a>
                            <span class="tooltip">Dashboard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i class='bx bx-cart-alt'></i>
                                <span class="links_name">Order</span>
                            </a>
                            <span class="tooltip">Order</span>
                        </li>


                        <li>
                            <a href="#">
                                <i class='bx bx-user'></i>
                                <span class="links_name">User</span>
                            </a>
                            <span class="tooltip">User</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-chat'></i>
                                <span class="links_name">Messages</span>
                            </a>
                            <span class="tooltip">Messages</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-pie-chart-alt-2'></i>
                                <span class="links_name">Analytics</span>
                            </a>
                            <span class="tooltip">Analytics</span>
                        </li>
                        <li>
                            <a href="#">
                                <i class='bx bx-folder'></i>
                                <span class="links_name">File Manager</span>
                            </a>
                            <span class="tooltip">Files</span>
                        </li>



                    </ul>
                </div>
            </div>
        </>
    );
}
export default Dashnav;