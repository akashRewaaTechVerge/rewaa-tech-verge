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
                                <h3>Build Your Idea With Rewaa Tech Verge. In Minutes.</h3>
                                <p>Share your idea with us and convert it to reality. We at Rewaa Tech Verge Believe in innovation and creativity.
We help people to shape their vison of success and provide all technology solutions which they require to
boost-up their business.</p><br/>
<p>We offer all kind of technology solutions at one place where you can fulfil your requirements satisfactorily. If
you are an entrepreneur and really looking for a technology partner then shake hand with us, and kick-start
your startup with Rewaa Tech Verge services.!!!</p>
                                <div className="choose-text"><i><FaCheck/></i>
                                    <h4>Web Application</h4>
                                    <p>Get the best affordable web solution for your business.</p>
                                </div>
                                <div className="choose-text"><i><FaCheck/></i>
                                    <h4>Mobile Application</h4>
                                    <p>Trasform your business with mobile applications.</p>
                                </div>
                                <div className="choose-text"><i><FaCheck/></i>
                                    <h4>Branding</h4>
                                    <p>Creative effective branding for your business.</p>
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
