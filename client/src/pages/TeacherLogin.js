import '../css/Login.css';
import Top_Category from "../components/login_category"
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
function Login({ history }) {
    
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Sign In'
      });
    const { email, password1, textChange } = formData;
    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
    
       
    const handleSubmit = e => {
        console.log(process.env.REACT_APP_API_URL);
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                isAuth() && isAuth().role === 'Seller'
                  ? history.push('/admin')
                  : history.push('/private');
                toast.success(`Hey ${res.data.user.name}, Welcome back!`);
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              console.log(err.response);
              toast.error(err.response.data.errors);
            });
        } else {
          toast.error('Please fill all fields');
        }
      };
    return (
            <div className="Login">
                {isAuth() ? <Redirect to='/' /> : null}
                <div className="forml">
                <div class="wrapper">
                    <div class="title-text">
                        <div class="title login">
                            Welcome Back
                        </div>
                    </div>
                    <div>
                    <Top_Category
                        field='shadows nonActives'
                        field1='shadows actives'
                        field2='shadows nonActives'
                      />
                    </div>
                    <div class="form-container">
                        <div class="form-inner">
                            <form saaction="#" class="login" onSubmit={handleSubmit}>
                                <div class="field">
                                    <input type="email" placeholder="Email Address" required 
                                    onChange={handleChange('email')}
                                    value={email}/>
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="Password" required 
                                    onChange={handleChange('password1')}
                                    value={password1}/>
                                </div>
                                <div class="pass-link">
                                    <a href="#">Forgot password?</a>
                                </div>
                                <div class="field btn">
                                    <div class="btn-layer"></div>
                                    <NavLink to="teacherDashboard"><input type="submit" value="Login" /></NavLink>
                                    
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