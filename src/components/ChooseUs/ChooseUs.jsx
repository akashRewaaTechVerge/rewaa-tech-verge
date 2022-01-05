import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './ChooseUs.css'
import chooseImg from '../../images/choose-image.svg'
const ChooseUs = () => {
    return (
        <div>
            <section className="choose-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="choose-content-area"><span>Why Choose Us</span>
                                <h3>Outstanding Digital Experience</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel facilisis. </p>
                                <div className="choose-text"><i><FaCheck/></i>
                                    <h4>First Working Process</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore
                                        et dolore magna aliqua.</p>
                                </div>
                                <div className="choose-text"><i><FaCheck/></i>
                                    <h4>Dedicated Team Member</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore
                                        et dolore magna aliqua.</p>
                                </div>
                                <div className="choose-text"><i><FaCheck/></i>
                                    <h4>24/7 Support</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor abore
                                        et dolore magna aliqua.</p>
                                </div>
                                <div className="choose-btn"><a className="default-btn-one" href="about-us/index.html">Discover
                                    More</a></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image"><img src={chooseImg} alt="image1" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChooseUs
