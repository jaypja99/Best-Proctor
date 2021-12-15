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
                                <NavLink to="/teacherDashboard" className={props1.f1}>
                                    <i class="bx bx-grid-alt"></i>
                                    <span class="links_name">Home</span>
                                </NavLink>
                                <span class="tooltip">Home</span>
                            </li>
                            <li>
                                <NavLink to="/teacherDashboard/addFeed" className={props1.f2}>
                                    <i class="fas fa-newspaper"></i>
                                    <span class="links_name">Post New Update</span>
                                </NavLink>
                                <span class="tooltip">Post New Update</span>
                            </li>
                            <li>
                                <NavLink to="/teacherDashboard/parentReq" className={props1.f3}>
                                    <i class="fas fas fa-user-lock"></i>
                                    <span class="links_name">Grant Access</span>
                                </NavLink>
                                <span class="tooltip">Grant Access</span>
                            </li>
                            <li>
                                <NavLink to="/teacherDashboard/addstudent" className={props1.f4}>
                                    <i class="fas fa-user-graduate"></i>
                                    <span class="links_name">Add Student</span>
                                </NavLink>
                                <span class="tooltip">Add Student</span>
                            </li>
                            <li>
                                <NavLink to="/teacherDashboard/addAss" className={props1.f5}>
                                    <i class="fas fa-heart"></i>
                                    <span class="links_name">Add Assignment</span>
                                </NavLink>
                                <span class="tooltip">Add Assignment</span>
                            </li>
                            <li>
                                <NavLink to="/teacherDashboard/addVideo" className={props1.f6}>
                                    <i class="fas fa-video"></i>
                                    <span class="links_name">Add Video Link</span>
                                </NavLink>
                                <span class="tooltip">Add Video Link</span>
                            </li>
                            <li>
                                <NavLink to="/teacherDashboard/parentReq" className={props1.f7}>
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