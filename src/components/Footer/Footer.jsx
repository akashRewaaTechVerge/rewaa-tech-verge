import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMap, FaTwitter } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import two from '../../images/shape/2.png'
import fourteen from '../../images/shape/14.png'
import fifteen from '../../images/shape/15.png'
import twel from '../../images/shape/12.svg'
import thirteen from '../../images/shape/13.svg'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-area">
                                <div className="footer-heading">
                                    <h3>About Us</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra</p>
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
                                    <h3>Important Links</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li><a href="about-us/index.html">About Us</a></li>
                                    <li><a href="projects/index.html">Project</a></li>
                                    <li><a href="services/index.html">Services</a></li>
                                    <li><a href="team/index.html">Team</a></li>
                                    <li><a href="contact/index.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-item-area">
                                <div className="footer-heading">
                                    <h3>Featured Service</h3>
                                </div>
                                <ul className="footer-quick-links">
                                    <li><a href="single-service/index.html">SEO Marketing</a></li>
                                    <li><a href="single-service/index.html">SEO Services</a></li>
                                    <li><a href="single-service/index.html">Services</a></li>
                                    <li><a href="single-service/index.html">Pay-Per-Click</a></li>
                                    <li><a href="single-service/index.html">Social Media</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="mb-30">
                                <div className="footer-heading">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-info-contact"><i><IoIosCall /></i>
                                    <h3>Phone</h3><span>(882) 569-7565</span>
                                </div>
                                <div className="footer-info-contact"><i><FaEnvelope /></i>
                                    <h3>Email</h3><span><a
                                    >info@rewaatechverge.com</a></span>
                                </div>
                                <div className="footer-info-contact"><i><FaLocationArrow/></i>
                                    <h3>Address</h3><span>123, Western Road, Melbourne Australia</span>
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
