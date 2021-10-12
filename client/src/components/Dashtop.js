import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Dashtop.css";

function Dashtop() {
    return (
        <>
            <div class="dashtop">

                <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search Something..." />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <div class="notification">
                    <i class='bx bx-bell'></i>
                </div>

                <div class="setting">
                    <i class="fas fa-cog"></i>
                </div>

                <div class="logout">
                <NavLink to="/">
                    <button type="submit" class="logoutbtn">
                        <i class='bx bx-log-out'></i>
                        Logout
                    </button>
                </NavLink>
                </div>
            </div>

        </>
    );
}
export default Dashtop;