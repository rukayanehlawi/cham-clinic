import React, { useState } from 'react';
import "./LoginPopUp.css";
import { assets } from '../../assets/assets';

const LoginPopUp = ({setshowlogin}) => {

    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setshowlogin(false)}  />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Log in" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="passwowrd" placeholder='Password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Log in"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By coninuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Log in"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an ccount? <span onClick={() => setCurrState("Log in")}>Log in here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp