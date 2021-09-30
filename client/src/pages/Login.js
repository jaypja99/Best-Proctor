import '../css/Login.css';

import { NavLink } from 'react-router-dom';
import React from 'react';
function Login() {



    return (
            <div className="Login">
                <div className="forml">
                <div class="wrapper">
                    <div class="title-text">
                        <div class="title login">
                            Welcome Back
                        </div>
                    </div>
                    <div class="form-container">
                        <div class="form-inner">
                            <form action="#" class="login">
                                <div class="field">
                                    <input type="text" placeholder="Email Address" required />
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="Password" required />
                                </div>
                                <div class="pass-link">
                                    <a href="#">Forgot password?</a>
                                </div>
                                <div class="field btn">
                                    <div class="btn-layer"></div>
                                    <input type="submit" value="Login" />
                                </div>
                                <div class="signup-link">
                                    Not a member?&nbsp;&nbsp;&nbsp;&nbsp;    <NavLink activeClassName="active" to="/SchoolRegister">Sign up</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Login;