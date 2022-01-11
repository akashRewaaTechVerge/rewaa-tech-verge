import React, { useState } from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMap, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'react-phone-input-2/lib/style.css'
import './ContactUs.css'
import PhoneInput from 'react-phone-input-2';
const ContactUs = () => {
    const [selected, setSelected] = useState('');
    return (
        <div>
            <div class="page-title-area">
                <div class="container">
                    <div class="page-title-content">
                        <h2>Contact</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section class="contact-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-box">
                                <div class="icon"><i><FaPhone /></i></div>
                                <div class="content">
                                    <h4>Phone / Fax</h4>
                                    <p>+91 8799315884</p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-box">
                                <div class="icon"><i><FaEnvelope /></i></div>
                                <div class="content">
                                    <h4>E-mail</h4>
                                    <p>info@rewaatechverge.com</p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <div class="contact-box">
                                <div class="icon"><i><FaMap /></i></div>
                                <div class="content">
                                    <h4>Location</h4>
                                    <p>E-809, Titanium City Center, 100 Feet Road, Satellite, Ahemdabad 380015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact-text">
                                <h3>Get in Touch</h3>
                                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                    Etiam tempus magna vel turpis pharetra dictum.</p>
                                <p>Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue,
                                    eget commodo magna lobortis.</p>
                                <ul class="social-links">
                                    <li><a href="https://www.facebook.com/" target="_blank"><i><FaFacebookF /></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i><FaTwitter /></i></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i><FaInstagram /></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i><FaLinkedinIn /></i></a></li>
                                    <li><a href="https://www.pinterest.com/" target="_blank"><i><FaPinterest /></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <form class="contact-form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group"><input type="text" name="fname" placeholder="First Name"
                                            class="form-control" value="" required="" /></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group"><input type="text" name="lname" placeholder="Last Name"
                                            class="form-control" required="" /></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group"><input type="text" name="email" placeholder="Email"
                                            class="form-control" required="" /></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <PhoneInput inputStyle={{ paddingLeft: '5rem' }} country={'in'} /></div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group"><div className='form-control'>
                                            <label>
                                                You want to apply experience or fresher ?&nbsp;
                                            </label>
                                            <input type="radio" name='experience' value={0} />&nbsp;
                                            Experience  &nbsp;
                                            <input type="radio" name='experience' id='fresher' value={0} /> 
                                            &nbsp; Fresher 
                                        </div></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group"><input type="text" name="ctc" placeholder="Current Salary"
                                            class="form-control" value="" required="" /></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group"><input type="text" name="lname" placeholder="Expected Salary"
                                            class="form-control" required="" /></div>
                                    </div>
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group"><input type="file"  className='form-control'/></div>
                                    </div>
                                    <div class="col-lg-12 col-sm-12">
                                        <div class="send-btn"><button type="submit" class="send-btn-one">Send
                                            Message</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {console.log(selected + "")}
        </div>
    )
}

export default ContactUs
