import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dolore nemo voluptate mollitia non, similique doloribus nulla placeat labore ab tenetur repellat voluptatibus ipsa error eveniet consectetur fugiat, ducimus magnam?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                </ul>
                </div>

                <div className="footer-content-right">
                   <h2>GET IN TOUCH</h2>
                   <ul>
                   <li>0959723377</li>
                   <li>ruknehlawi@gmail.com</li>
                   </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
            Copyright 2024 @ Rukaya Nehlawi - All rights reserved
            </p>
        </div>
    )
}

export default Footer