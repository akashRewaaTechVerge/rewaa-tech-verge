import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMap, FaTwitter } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import two from '../../images/shape/2.png'
import fourteen from '../../images/shape/14.png'
import fifteen from '../../images/shape/15.png'
import twel from '../../images/shape/12.svg'
import thirteen from '../../images/shape/13.svg'
import logo from '../../images/logoOutline.png'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-area">
                                <div className="footer-heading">
                                    <h3>
                                        <img alt='logo' className='footer-logo' src={logo} />
                                    </h3>
                                </div>
                                <p>We Build A Better Future With Tech</p>
                                <ul className="footer-social">
                                    <li><a href="https://www.linkedin.com/" className="bg-3955bc"><i><FaLinkedinIn /></i></a></li>
                                    <li><a href="https://www.facebook.com/" className="bg-1da1f2"><i><FaFacebookF /></i></a></li>
                                    <li><a href="https://twitter.com/" className="bg-004dff"><i><FaTwitter /></i></a></li>
                                    <li><a href="https://www.instagram.com/" className="bg-0273af"><i><FaInstagram /></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item-area">
                                <div className="footer-heading">
                                    <h3>Services</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li><a href="about-us/index.html">Mobile Application</a></li>
                                    <li><a href="projects/index.html">Custom Software</a></li>
                                    <li><a href="services/index.html">Web Application</a></li>
                                    <li><a href="team/index.html">UI/UX Design</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item-area">
                                <div className="footer-heading">
                                    <h3>Who Are We</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li><a href="single-service/index.html">Our Core Values</a></li>
                                    <li><a href="single-service/index.html">Our Vision</a></li>
                                    <li><a href="single-service/index.html">Our Goal</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item-area">
                                <div className="footer-heading">
                                    <h3>Company</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li><a href="single-service/index.html">About Us</a></li>
                                    <li><a href="single-service/index.html">Contact</a></li>
                                    <li><a href="single-service/index.html">Career</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="mb-30">
                                <div className="footer-heading">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-info-contact"><i><IoIosCall /></i>
                                    <h3>Phone</h3><span>+91 8799315884</span>
                                </div>
                                <div className="footer-info-contact"><i><FaEnvelope /></i>
                                    <h3>Email</h3><span><a
                                    >info@rewaatechverge.com</a></span>
                                </div>
                                <div className="footer-info-contact"><i><FaLocationArrow /></i>
                                    <h3>Address</h3><span>E-809, Titanium City Center, 100 Feet Road, Satellite, Ahemdabad 380015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="default-animation">
                    <div className="shape-img1"><img src={twel} alt="image1" /></div>
                    <div className="shape-img2"><img src={thirteen} alt="image2" /></div>
                    <div className="shape-img3"><img src={fourteen} alt="image3" /></div>
                    <div className="shape-img4"><img src={fifteen} alt="image4" /></div>
                    <div className="shape-img5"><img src={two} alt="image5" /></div>
                </div>
            </footer>
            <div class="copyright-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <p>© 2021 RewaaTechVerge. All Rights Reserved
                            </p>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                                <li><a href="terms-conditions/index.html">Terms &amp; Conditions</a></li>
                                <li><a href="privacy-policy/index.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
