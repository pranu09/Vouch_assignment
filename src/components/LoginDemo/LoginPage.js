import React, { useEffect, useState } from 'react';

import './LoginPage.css';
import BackRect from '../../images/BackRectangle.png'
import BackRect2 from '../../images/Backrect2.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/")
        }
    }, [])

    const userLogin = async () => {
        const loginData = {
             email:"eve.holt@reqres.in",
             password:"5cityslicka"
            // email, password
        }
        console.log(email, password);
        try {
            const { data } = await axios.post("https://reqres.in/api/login", loginData);
            console.log(data);
            if (data.token) {
                toast.success("Logged in successfully");
                localStorage.setItem('token', data.token);
                setPassword("");
                setEmail("");
                navigate("/")
            }
        } catch (error) {
            toast.error(error.response.data.error);
        }
    }
    return (
        <div className='LoginPage'>

            <div className="login_page_left_side row">
                <div className="login_page_left_side_body col-lg-7">
                    <div className="login_page_left_side_body_frame_63">
                        <p className='name'>Welcome</p>
                        <p className='user_pass_name'>Enter your Username and Passoword.</p>
                    </div>
                    <div className="login_page_left_side_body_inputs_buttons">
                        <div className="userNameInput">
                            <img src="./icon/profile.png" alt="" srcset="" />
                            {/* <PersonIcon />
                             */}
                            <img src="./icon/Vector.png" alt="" />
                            <input type="text" placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="passwordInput">
                            <img src="./icon/lock.png" alt="" />
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <img src="./icon/password.png" alt="ppp" onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword} />
                          
                        </div>
                        <div className="loginButton">
                            <button onClick={userLogin}>Login</button>
                            <p className='forgot_password'>Forgot Password?</p>
                        </div>
                    </div>
                </div>

                <div className="frame_168">
                    <div className="frame_167">
                        <div className="frame_165">
                            <p>Terms of Use</p>
                        </div>
                        <div className="frame_166">
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="frame_164">

                        <p>© Punctualiti 2022. All rights reserved</p>
                    </div>
                </div>

            </div>
            <div className="login_page_right_side col-lg-7">
                
               
                <div className='loginRight'>
                    <div className='ImgDiv'>
                        <img className='rectimg' src={BackRect} />
                        <img className='rectimg2' src={BackRect2} />
                    </div>


                    <div className="loginRight_title">
                        <div className="upper_title">360° Solution for Asset Management</div>
                        <div className="lower_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

                    </div>

                </div>


            </div>
        </div >
    )
}

export default LoginPage;