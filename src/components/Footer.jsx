import React from 'react'
import logo from '../assets/image/logo.png';
import google from '../assets/image/google.png';
import apple from '../assets/image/appstore.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  return (
    <div className='footer_wrap'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='footer_logo'>
                        <img src={logo} alt="" />
                        <div>
                            <ul>
                                <li><YouTubeIcon/></li>
                                <li><InstagramIcon/></li>
                                <li><FacebookIcon/></li>
                            </ul>
                        </div> 
                    </div>    
                </div>
            </div>
            <div className="row my-md-5">
                <div className="col-md-3">
                    <ul>
                        <li>about us</li>
                        <li>contact us</li>
                        <li>term and condition</li>
                        <li>privacy policy</li>
                        <li>career</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>contact us</li>
                        <li>store location</li>
                        <li>track order</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>term and condition</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li><img src={google} alt="" /></li>
                        <li><img src={apple} alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>2023 KFC. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer