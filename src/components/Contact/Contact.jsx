
import './Contact.css'
import React, { useState } from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMap, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa'
import 'react-intl-tel-input/dist/main.css';
import "react-phone-input-2/lib/style.css";
import { Action } from './Action'
import { Provider } from '../../utils/Context'
import Form from './form/Form'
const Contact = () => {
    const data = Action();
    return (
        <>
            <section class="contact-area ptb-100" id='Contact'>
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
            </section>
            <Provider value={data}>
                <Form />
            </Provider>

        </>
    )
}

export default Contact
